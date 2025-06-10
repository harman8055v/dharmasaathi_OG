'use client';
import { useState } from 'react';
import PersonalInfoStep from './PersonalInfoStep';
import ProfessionalInfoStep from './ProfessionalInfoStep';
import SpiritualInfoStep from './SpiritualInfoStep';
import LifestyleStep from './LifestyleStep';
import PreferencesStep from './PreferencesStep';
import PhotoUploadStep from './PhotoUploadStep';
import ProfileProgressBar from '../ProfileProgressBar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function MultiStepOnboarding() {
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const next = () => {
    setStep((s) => s + 1)
    setProgress(((step + 1) / 6) * 100)
  }

  const steps = [
    <PersonalInfoStep onNext={next} key="personal" />,
    <ProfessionalInfoStep onNext={next} key="professional" />,
    <SpiritualInfoStep onNext={next} key="spiritual" />,
    <LifestyleStep onNext={next} key="lifestyle" />,
    <PreferencesStep onNext={next} key="preferences" />,
    <PhotoUploadStep onNext={() => {}} key="photo" />,
  ]

  const titles = [
    'Personal Details',
    'Professional Info',
    'Spiritual Journey',
    'Lifestyle',
    'Partner Preferences',
    'Photos',
  ]

  const copy = [
    'Tell us a bit about yourself.',
    'Share your work and education.',
    'Let others know your spiritual path.',
    'Your daily habits help us match you.',
    'What are you looking for in a partner?',
    'Add a smiling photo to finish.',
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige p-4">
      <div className="w-full max-w-xl space-y-6">
        <div className="text-center space-y-2">
          <img
            src="https://images.unsplash.com/photo-1478476868527-002ae3f3a520?auto=format&fit=crop&w=100&q=80"
            alt="Lotus"
            className="mx-auto h-20 w-20 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold text-brand-blue">Create Your Profile</h1>
          <p className="text-sm text-brand-blue/80">A few quick steps to connect with like-minded souls</p>
        </div>
        <Card>
          <CardHeader className="space-y-2 text-center">
            <CardTitle>
              Step {step + 1} of 6: {titles[step]}
            </CardTitle>
            <CardDescription>{copy[step]}</CardDescription>
            <ProfileProgressBar progress={progress} />
          </CardHeader>
          <CardContent>{steps[step]}</CardContent>
        </Card>
        <p className="text-center text-xs text-gray-500 italic">
          &ldquo;Every connection is divine when the heart is open.&rdquo;
        </p>
      </div>
    </div>
  )
}
