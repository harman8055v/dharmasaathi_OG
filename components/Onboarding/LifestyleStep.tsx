'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

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
      <div className="space-y-2">
        <Label htmlFor="diet">Diet</Label>
        <Input id="diet" placeholder="Diet" {...register('diet')} />
        {errors.diet && <p className="text-red-500 text-sm">{errors.diet.message}</p>}
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="smoking" {...register('smoking')} />
        <Label htmlFor="smoking">Smoking</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="drinking" {...register('drinking')} />
        <Label htmlFor="drinking">Drinking</Label>
      </div>
      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
}
