import SignUpForm from '@/components/Auth/SignUpForm';
import { AuthProvider } from '@/components/Auth/AuthProvider';

export default function SignUpPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center">
        <SignUpForm />
      </div>
    </AuthProvider>
  );
}
