'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
      <div className="space-y-2">
        <Label htmlFor="age">Preferred Partner Age Range</Label>
        <Input id="age" placeholder="25-35" {...register('partnerAge')} />
        {errors.partnerAge && <p className="text-red-500 text-sm">{errors.partnerAge.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">Preferred Partner City</Label>
        <Input id="city" placeholder="City" {...register('partnerCity')} />
      </div>
      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
}
