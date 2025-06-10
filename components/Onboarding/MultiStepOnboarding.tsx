'use client';
import { useState } from 'react';
import PersonalInfoStep from './PersonalInfoStep';
import ProfessionalInfoStep from './ProfessionalInfoStep';
import SpiritualInfoStep from './SpiritualInfoStep';
import LifestyleStep from './LifestyleStep';
import PreferencesStep from './PreferencesStep';
import PhotoUploadStep from './PhotoUploadStep';
import ProfileProgressBar from '../ProfileProgressBar';

export default function MultiStepOnboarding() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = () => {
    setStep((s) => s + 1);
    setProgress(((step + 1) / 6) * 100);
  };

  const steps = [
    <PersonalInfoStep onNext={next} key="personal" />,
    <ProfessionalInfoStep onNext={next} key="professional" />,
    <SpiritualInfoStep onNext={next} key="spiritual" />,
    <LifestyleStep onNext={next} key="lifestyle" />,
    <PreferencesStep onNext={next} key="preferences" />,
    <PhotoUploadStep onNext={() => {}} key="photo" />,
  ];

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 bg-brand-beige rounded-xl shadow">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-brand-blue">Step {step + 1} of 6</h2>
      </div>
      <ProfileProgressBar progress={progress} />
      <div>{steps[step]}</div>
    </div>
  );
}
