'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <div className="space-y-1 text-center">
        <h3 className="text-xl font-semibold text-brand-blue">Personal Details</h3>
        <p className="text-sm text-gray-600">Tell us about yourself</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" placeholder="First Name" {...register('firstName')} />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" placeholder="Last Name" {...register('lastName')} />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="birthdate">Birthdate</Label>
        <Input id="birthdate" type="date" {...register('birthdate')} />
        {errors.birthdate && <p className="text-red-500 text-sm">{errors.birthdate.message}</p>}
      </div>
      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
}
