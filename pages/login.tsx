import LoginForm from '@/components/Auth/LoginForm';
import { AuthProvider } from '@/components/Auth/AuthProvider';

export default function LoginPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </AuthProvider>
  );
}
