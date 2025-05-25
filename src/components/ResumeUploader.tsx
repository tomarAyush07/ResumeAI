
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Upload, X, FileText, Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface ResumeUploaderProps {
  onFileUpload: (file: File) => void;
}

export default function ResumeUploader({ onFileUpload }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];
      
      // Check if file is PDF or DOCX
      if (
        uploadedFile.type === "application/pdf" ||
        uploadedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setFile(uploadedFile);
        onFileUpload(uploadedFile);
        toast.success("Resume uploaded successfully!");
      } else {
        toast.error("Please upload a PDF or DOCX file");
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    multiple: false,
  });

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full">
      {!file ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? "border-primary bg-primary/10"
                : "border-gray-300 hover:border-primary/50 hover:bg-primary/5"
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center">
              <Upload
                className={`h-12 w-12 mb-4 ${
                  isDragActive ? "text-primary" : "text-gray-400"
                }`}
              />
              <p className="text-lg font-medium mb-1">
                {isDragActive
                  ? "Drop your resume here..."
                  : "Drag & drop your resume here"}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Supports PDF, DOCX (Max 5MB)
              </p>
              <Button type="button" className="mt-2">
                Browse Files
              </Button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4 bg-primary/10 rounded-lg"
        >
          <div className="mr-3 bg-primary/20 p-2 rounded-full">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{file.name}</p>
            <p className="text-xs text-muted-foreground">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-green-500" />
            <Button
              variant="ghost"
              size="icon"
              onClick={removeFile}
              className="text-gray-500 hover:text-red-500"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
