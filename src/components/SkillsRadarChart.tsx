
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

export interface SkillData {
  name: string;
  value: number;
  fullMark: number;
}

interface SkillsRadarChartProps {
  data: SkillData[];
  className?: string;
}

const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({ data, className = '' }) => {
  return (
    <div className={`w-full h-[300px] ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="var(--border)" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: 'currentColor', fontSize: 12 }}
          />
          <Radar
            name="Your Skills"
            dataKey="value"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadarChart;
