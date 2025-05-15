
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Using shadcn button
import { useState, useCallback } from 'react';

const FileUploadArea = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
      // Here you would typically handle the file upload logic
      console.log("File selected:", event.target.files[0]);
    }
  };

  const handleDragOver = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFileName(event.dataTransfer.files[0].name);
      // Handle the dropped file
      console.log("File dropped:", event.dataTransfer.files[0]);
      // You might want to trigger the input's onChange or directly process the file
      const input = document.getElementById('file-upload-input') as HTMLInputElement | null;
      if (input) {
        input.files = event.dataTransfer.files;
      }
    }
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-8 border-2 border-dashed border-primary/50 rounded-lg text-center bg-card">
      <label
        htmlFor="file-upload-input"
        className="cursor-pointer flex flex-col items-center justify-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Upload size={48} className="text-primary mb-4" />
        <p className="text-lg font-semibold text-foreground mb-2">
          Drag & drop your course material here
        </p>
        <p className="text-muted-foreground mb-4">or</p>
        <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload-input')?.click()}>
          Browse Files
        </Button>
        <input
          type="file"
          id="file-upload-input"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.ppt,.pptx,.txt" // Common document types
        />
      </label>
      {fileName && (
        <p className="mt-4 text-sm text-green-600">
          Selected file: {fileName}
        </p>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        Supports: PDF, DOC, DOCX, PPT, PPTX, TXT
      </p>
    </div>
  );
};

export default FileUploadArea;
