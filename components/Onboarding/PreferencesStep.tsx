'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  partnerAge: z.string(),
  partnerCity: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function PreferencesStep({ onNext }: { onNext: (data: FormData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <input placeholder="Preferred Partner Age Range" {...register('partnerAge')} className="border p-2 w-full" />
      {errors.partnerAge && <p className="text-red-500">{errors.partnerAge.message}</p>}
      <input placeholder="Preferred Partner City" {...register('partnerCity')} className="border p-2 w-full" />
      <button className="bg-blue-500 text-white px-4 py-2">Next</button>
    </form>
  );
}
