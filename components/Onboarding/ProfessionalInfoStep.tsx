'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
      <div className="space-y-2">
        <Label htmlFor="education">Education</Label>
        <Input id="education" placeholder="Education" {...register('education')} />
        {errors.education && <p className="text-red-500 text-sm">{errors.education.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="profession">Profession</Label>
        <Input id="profession" placeholder="Profession" {...register('profession')} />
        {errors.profession && <p className="text-red-500 text-sm">{errors.profession.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="income">Annual Income</Label>
        <Input id="income" placeholder="Annual Income" {...register('annualIncome')} />
      </div>
      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
}
