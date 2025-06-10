import SignUpForm from '@/components/Auth/SignUpForm'
import { AuthProvider } from '@/components/Auth/AuthProvider'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function SignUpPage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center bg-brand-beige p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18baabf0a112?auto=format&fit=crop&w=80&q=80"
              alt="Lotus"
              className="mx-auto h-16 w-16 rounded-full object-cover"
            />
            <h1 className="text-3xl font-bold text-brand-blue">Join DharmaSaathi</h1>
            <p className="text-sm text-brand-blue/80">Begin your journey to conscious connection</p>
          </div>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Create your account</CardTitle>
              <CardDescription>It only takes a minute</CardDescription>
            </CardHeader>
            <CardContent>
              <SignUpForm />
            </CardContent>
          </Card>
          <p className="text-center text-xs text-gray-500 italic">
            &ldquo;Walk your path with a partner who shares your vision.&rdquo;
          </p>
        </div>
      </div>
    </AuthProvider>
  );
}
