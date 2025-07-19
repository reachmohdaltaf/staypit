"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-md py-2 text-sm font-semibold text-gray-700 shadow-sm transition duration-150"
    >
      <svg height="20" width="20" viewBox="0 0 48 48">
        <g><path d="M44.5 20H24v8.5h11.8C34.8 33.8 30.4 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.3 5.1 29.4 3 24 3 12.5 3 3 12.5 3 24s9.5 21 21 21c10.5 0 20-7.7 20-21 0-1.4-.1-2.7-.3-4z" fill="#fbbc05"/><path d="M6.3 14.6l7 5.1C15 15.2 19.2 12 24 12c3.1 0 6 .8 8.3 2.7l6.2-6.2C34.3 5.1 29.4 3 24 3c-7.3 0-13.6 4.7-16.7 11.6z" fill="#ea4335"/><path d="M24 45c5.2 0 10.1-1.8 13.8-5l-6.4-5.2c-2.1 1.5-4.8 2.4-7.4 2.4-6.1 0-11.3-4.1-13.2-9.6l-7 5.2C7.8 42.2 15.5 45 24 45z" fill="#34a853"/><path d="M44.5 20H24v8.5h11.8C33.2 34 29.3 37 24 37c-6 0-10.9-4.1-12.6-9.6l-7 5.2C7.8 42.2 15.5 45 24 45z" fill="#4285f4"/></g>
      </svg>
      Sign in with Google
    </Button>
  );
}
