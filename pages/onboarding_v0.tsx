import { useRouter } from 'next/router'
import QuoteBox from '@/components/quote-box'
import StepButtons from '@/components/step-buttons'

export default function OnboardingIntro() {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-beige p-4">
      <div className="max-w-md w-full">
        <QuoteBox
          quote="Every connection is divine when the heart is open."
          inspiration="Let's get started with a few quick steps."
        />
        <StepButtons
          onNext={() => router.push('/onboarding')}
          showSkip={false}
          nextLabel="Start"
        />
      </div>
    </div>
  )
}
