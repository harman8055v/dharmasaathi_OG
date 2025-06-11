"use client"
import { AuthProvider } from "@/components/Auth/AuthProvider";
import OnboardingForm from "@/components/OnboardingV2/onboarding-form";

export default function OnboardingPage() {
  return (
    <AuthProvider>
      <OnboardingForm />
    </AuthProvider>
  );
}
