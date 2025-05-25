import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import useSettingsStore from '@/stores/settingsStore';

interface SkillsSphereProps {
  skills: string[];
  size?: number;
  className?: string;
}

const SkillsSphere: React.FC<SkillsSphereProps> = ({
  skills,
  size = 300,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const { enhancedVisualsEnabled } = useSettingsStore();

  useEffect(() => {
    if (!containerRef.current || skills.length === 0) return;

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      size / size,
      0.1,
      1000
    );
    camera.position.z = enhancedVisualsEnabled ? 4.5 : 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create sphere group
    const sphere = new THREE.Group();
    sphereRef.current = sphere;
    scene.add(sphere);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add dynamic point lights if enhanced visuals are enabled
    let pointLight1: THREE.PointLight | null = null;
    let pointLight2: THREE.PointLight | null = null;

    if (enhancedVisualsEnabled) {
      pointLight1 = new THREE.PointLight(0x3B82F6, 2, 10);
      pointLight1.position.set(3, 2, 2);
      scene.add(pointLight1);
      
      pointLight2 = new THREE.PointLight(0x8B5CF6, 2, 10);
      pointLight2.position.set(-3, -2, 2);
      scene.add(pointLight2);
    }

    // Add subtle background atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(enhancedVisualsEnabled ? 3.2 : 3, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: enhancedVisualsEnabled ? 0.05 : 0.03,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);
    
    // Create text sprites for each skill
    const points = generateFibonacciSphere(skills.length);
    
    skills.forEach((skill, index) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;
      
      canvas.width = 256;
      canvas.height = 128;
      
      // Background with gradient
      const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#3B82F6');
      gradient.addColorStop(1, '#8B5CF6');
      
      context.fillStyle = enhancedVisualsEnabled ? gradient : '#3B82F6';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add a glow effect if enhanced visuals are enabled
      if (enhancedVisualsEnabled) {
        context.shadowColor = '#8B5CF6';
        context.shadowBlur = 15;
      }
      
      context.fillStyle = 'white';
      context.font = 'Bold 24px Inter, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(skill, canvas.width/2, canvas.height/2);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true,
      });
      
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(1.5, 0.75, 1);
      
      // Position on sphere
      const point = points[index];
      const radius = enhancedVisualsEnabled ? 2.8 : 2.5;
      sprite.position.set(
        point.x * radius, 
        point.y * radius, 
        point.z * radius
      );
      
      // Add custom property for hover animation
      (sprite as any).userData = { 
        originalScale: new THREE.Vector3(1.5, 0.75, 1),
        index
      };
      
      sphere.add(sprite);
    });

    // Raycaster for mouse interactions
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    // Handle mouse move for hover effects
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / size) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / size) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      
      // Check intersections with sprites
      const intersects = raycaster.intersectObjects(sphere.children);
      
      // Reset all sprites
      sphere.children.forEach((child) => {
        if (child instanceof THREE.Sprite) {
          child.scale.copy((child as any).userData.originalScale);
        }
      });
      
      // Scale up intersected sprite
      if (intersects.length > 0 && enhancedVisualsEnabled) {
        const sprite = intersects[0].object as THREE.Sprite;
        sprite.scale.multiplyScalar(1.3);
      }
    };
    
    // Animation
    let animationFunction = () => {
      frameIdRef.current = requestAnimationFrame(animationFunction);
      
      if (sphereRef.current) {
        sphereRef.current.rotation.y += enhancedVisualsEnabled ? 0.003 : 0.002;
        sphereRef.current.rotation.x += enhancedVisualsEnabled ? 0.0008 : 0.0005;
      }

      if (enhancedVisualsEnabled && pointLight1 && pointLight2) {
        const time = Date.now() * 0.001;
        pointLight1.position.x = Math.sin(time * 0.7) * 3;
        pointLight1.position.y = Math.cos(time * 0.5) * 3;
        pointLight2.position.x = Math.cos(time * 0.3) * 3;
        pointLight2.position.y = Math.sin(time * 0.5) * 3;
      }
      
      renderer.render(scene, camera);
    };

    animationFunction();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const newSize = Math.min(containerRef.current.clientWidth, size);
      
      cameraRef.current.aspect = 1;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(newSize, newSize);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse interaction for rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseUp = () => {
      isDragging = false;
    };
    
    if (enhancedVisualsEnabled) {
      containerRef.current.addEventListener('mousedown', handleMouseDown);
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousemove', (e) => {
        if (!isDragging || !sphereRef.current) return;
        
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };
        
        sphereRef.current.rotation.y += deltaMove.x * 0.005;
        sphereRef.current.rotation.x += deltaMove.y * 0.005;
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    // Add touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !sphereRef.current || e.touches.length !== 1) return;
      
      const deltaMove = {
        x: e.touches[0].clientX - previousMousePosition.x,
        y: e.touches[0].clientY - previousMousePosition.y
      };
      
      sphereRef.current.rotation.y += deltaMove.x * 0.005;
      sphereRef.current.rotation.x += deltaMove.y * 0.005;
      
      previousMousePosition = { 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      };
    };
    
    const handleTouchEnd = () => {
      isDragging = false;
    };
    
    if (enhancedVisualsEnabled) {
      containerRef.current.addEventListener('touchstart', handleTouchStart);
      containerRef.current.addEventListener('touchmove', handleTouchMove);
      containerRef.current.addEventListener('touchend', handleTouchEnd);
    }
    
    // Cleanup
    return () => {
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (enhancedVisualsEnabled) {
        if (containerRef.current) {
          containerRef.current.removeEventListener('mousedown', handleMouseDown);
          containerRef.current.removeEventListener('mousemove', handleMouseMove);
          containerRef.current.removeEventListener('touchstart', handleTouchStart);
          containerRef.current.removeEventListener('touchmove', handleTouchMove);
          containerRef.current.removeEventListener('touchend', handleTouchEnd);
        }
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
      
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [skills, size, enhancedVisualsEnabled]);

  // Fibonacci sphere algorithm for even distribution of points on a sphere
  function generateFibonacciSphere(samples: number) {
    const points: { x: number; y: number; z: number }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    
    for (let i = 0; i < samples; i++) {
      const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // Radius at y
      
      const theta = phi * i; // Golden angle increment
      
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      
      points.push({ x, y, z });
    }
    
    return points;
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative flex items-center justify-center ${className} ${enhancedVisualsEnabled ? 'cursor-grab active:cursor-grabbing' : ''}`} 
      style={{ width: size, height: size }}
    />
  );
};

export default SkillsSphere;
