'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1 text-center">
        <h3 className="text-xl font-semibold text-brand-blue">Add Photos</h3>
        <p className="text-sm text-gray-600">A smiling photo builds trust</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="photos">Upload Photos</Label>
        <Input id="photos" type="file" multiple accept="image/*" onChange={handleFiles} />
      </div>
      <Button type="submit" className="w-full">Finish</Button>
    </form>
  );
}
