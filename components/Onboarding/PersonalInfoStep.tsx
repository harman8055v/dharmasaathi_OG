'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  birthdate: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function PersonalInfoStep({ onNext }: { onNext: (data: FormData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <input placeholder="First Name" {...register('firstName')} className="border p-2 w-full" />
      {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
      <input placeholder="Last Name" {...register('lastName')} className="border p-2 w-full" />
      {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
      <input type="date" {...register('birthdate')} className="border p-2 w-full" />
      {errors.birthdate && <p className="text-red-500">{errors.birthdate.message}</p>}
      <button className="bg-blue-500 text-white px-4 py-2">Next</button>
    </form>
  );
}
