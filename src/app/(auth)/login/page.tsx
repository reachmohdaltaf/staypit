import React from 'react';
import LoginButton from '@/components/login-button';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Sign in to your account</h1>
        <LoginButton />
        <p className="mt-6 text-xs text-gray-400">
          By signing in, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
