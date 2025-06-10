import LoginForm from '@/components/Auth/LoginForm'
import { AuthProvider } from '@/components/Auth/AuthProvider'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function LoginPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center bg-brand-beige p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <img
              src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=80&q=80"
              alt="Lotus"
              className="mx-auto h-16 w-16 rounded-full object-cover"
            />
            <h1 className="text-3xl font-bold text-brand-blue">Welcome Back</h1>
            <p className="text-sm text-brand-blue/80">
              Log in to continue your journey
            </p>
          </div>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Login to DharmaSaathi</CardTitle>
              <CardDescription>Enter your details below</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
          <p className="text-center text-xs text-gray-500 italic">
            &ldquo;Love rooted in dharma is love that lasts.&rdquo;
          </p>
        </div>
      </div>
    </AuthProvider>
  );
}
