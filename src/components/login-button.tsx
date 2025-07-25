"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
    className="text-sm tracking-wide flex  gap-6 w-fit justify-center" variant={"outline"}
    >
       <img
              src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
              className="w-5 h-5"
              alt=""
            />
            Continue with Google
    </Button>
  );
}


