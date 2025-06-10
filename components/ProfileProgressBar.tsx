'use client';
import { Progress } from '@/components/ui/progress';

export default function ProfileProgressBar({ progress }: { progress: number }) {
  return <Progress value={progress} />;
}
