import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import OnboardingForm from '@/components/OnboardingV2/onboarding-form'
import { AuthProvider } from '@/components/Auth/AuthProvider'

export default async function OnboardingPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/')
  }

  return (
    <AuthProvider initialSession={data.session}>
      <OnboardingForm />
    </AuthProvider>
  )
}
