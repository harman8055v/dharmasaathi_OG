import SignUpForm from '@/components/Auth/SignUpForm';
import { AuthProvider } from '@/components/Auth/AuthProvider';

export default function SignUpPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center bg-brand-beige p-4">
        <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-6 shadow">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-semibold text-brand-blue">Create Account</h1>
            <p className="text-sm text-brand-blue/80">Join DharmaSaathi today</p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </AuthProvider>
  );
}
