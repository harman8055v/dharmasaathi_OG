'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from '@/lib/supabaseClient'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type FormData = z.infer<typeof schema>

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await supabase.auth.signInWithPassword({ email: data.email, password: data.password })
  }

  const handleSocial = async (provider: 'google' | 'facebook' | 'apple') => {
    await supabase.auth.signInWithOAuth({ provider })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register('email')} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Your password" {...register('password')} />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        Login
      </Button>
      <div className="flex justify-center gap-4 text-sm">
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
  )
}
