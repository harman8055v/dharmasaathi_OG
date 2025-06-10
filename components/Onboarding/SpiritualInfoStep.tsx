'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <div className="space-y-1 text-center">
        <h3 className="text-xl font-semibold text-brand-blue">Spiritual Journey</h3>
        <p className="text-sm text-gray-600">Share your practices and path</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="org">Spiritual Org</Label>
        <Input id="org" placeholder="Spiritual Org" {...register('spiritualOrg')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="teacher">Primary Teacher</Label>
        <Input id="teacher" placeholder="Primary Teacher" {...register('primaryTeacher')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="practices">Practices</Label>
        <Input id="practices" placeholder="Practices" {...register('practices')} />
        {errors.practices && <p className="text-red-500 text-sm">{errors.practices.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="years">Years on Path</Label>
        <Input id="years" type="number" {...register('yearsOnPath', { valueAsNumber: true })} />
        {errors.yearsOnPath && <p className="text-red-500 text-sm">{errors.yearsOnPath.message}</p>}
      </div>
      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
}
