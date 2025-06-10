'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  education: z.string(),
  profession: z.string(),
  annualIncome: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ProfessionalInfoStep({ onNext }: { onNext: (data: FormData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <input placeholder="Education" {...register('education')} className="border p-2 w-full" />
      {errors.education && <p className="text-red-500">{errors.education.message}</p>}
      <input placeholder="Profession" {...register('profession')} className="border p-2 w-full" />
      {errors.profession && <p className="text-red-500">{errors.profession.message}</p>}
      <input placeholder="Annual Income" {...register('annualIncome')} className="border p-2 w-full" />
      <button className="bg-blue-500 text-white px-4 py-2">Next</button>
    </form>
  );
}
