'use client';
import { useState } from 'react';

export default function PhotoUploadStep({ onNext }: { onNext: (files: File[]) => void }) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(files);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="file" multiple accept="image/*" onChange={handleFiles} />
      <button className="bg-blue-500 text-white px-4 py-2">Finish</button>
    </form>
  );
}
