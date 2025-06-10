'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabaseClient';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await supabase.auth.signUp({ email: data.email, password: data.password });
  };

  const handleSocial = async (provider: 'google' | 'facebook' | 'apple') => {
    await supabase.auth.signInWithOAuth({ provider });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="email" placeholder="Email" {...register('email')} className="border p-2 w-full" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input type="password" placeholder="Password" {...register('password')} className="border p-2 w-full" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-4 py-2">
        Sign Up
      </button>
      <div className="flex gap-2">
        <button type="button" onClick={() => handleSocial('google')} className="underline">
          Google
        </button>
        <button type="button" onClick={() => handleSocial('facebook')} className="underline">
          Facebook
        </button>
        <button type="button" onClick={() => handleSocial('apple')} className="underline">
          Apple
        </button>
      </div>
    </form>
  );
}
