"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">StayPit</h1>
        </div>
        <div>
          {status === "loading" ? (
            <div>Loading...</div>
          ) : session ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;