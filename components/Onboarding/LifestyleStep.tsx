'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  diet: z.string(),
  smoking: z.boolean(),
  drinking: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export default function LifestyleStep({ onNext }: { onNext: (data: FormData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <input placeholder="Diet" {...register('diet')} className="border p-2 w-full" />
      {errors.diet && <p className="text-red-500">{errors.diet.message}</p>}
      <label className="block">
        <input type="checkbox" {...register('smoking')} className="mr-2" /> Smoking
      </label>
      <label className="block">
        <input type="checkbox" {...register('drinking')} className="mr-2" /> Drinking
      </label>
      <button className="bg-blue-500 text-white px-4 py-2">Next</button>
    </form>
  );
}
