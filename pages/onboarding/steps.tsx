import MultiStepOnboarding from '@/components/Onboarding/MultiStepOnboarding';
import { AuthProvider } from '@/components/Auth/AuthProvider';

export default function OnboardingPage() {
  return (
    <AuthProvider>
      <MultiStepOnboarding />
    </AuthProvider>
  );
}
