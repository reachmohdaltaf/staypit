import React from 'react';
import LoginButton from '@/components/login-button';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4 md:pb-[100px]">
      <div className="bg-card border shadow-2xl rounded-2xl p-8 w-full max-w-md text-center relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to continue to StayPit</p>
          </div>
          
          <LoginButton />
          
          <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
            By signing in, you agree to our{' '}
            <span className="text-primary hover:underline cursor-pointer font-medium">Terms</span>{' '}
            and{' '}
            <span className="text-primary hover:underline cursor-pointer font-medium">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
