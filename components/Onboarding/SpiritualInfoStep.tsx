'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  spiritualOrg: z.string().optional(),
  primaryTeacher: z.string().optional(),
  practices: z.string(),
  yearsOnPath: z.number().min(0),
});

type FormData = z.infer<typeof schema>;

export default function SpiritualInfoStep({ onNext }: { onNext: (data: FormData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <input placeholder="Spiritual Org" {...register('spiritualOrg')} className="border p-2 w-full" />
      <input placeholder="Primary Teacher" {...register('primaryTeacher')} className="border p-2 w-full" />
      <input placeholder="Practices" {...register('practices')} className="border p-2 w-full" />
      {errors.practices && <p className="text-red-500">{errors.practices.message}</p>}
      <input type="number" placeholder="Years on Path" {...register('yearsOnPath', { valueAsNumber: true })} className="border p-2 w-full" />
      {errors.yearsOnPath && <p className="text-red-500">{errors.yearsOnPath.message}</p>}
      <button className="bg-blue-500 text-white px-4 py-2">Next</button>
    </form>
  );
}
