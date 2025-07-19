"use client";
import { useSession } from "next-auth/react";
import LoginButton from "@/components/login-button";
import Hero from "@/components/hero";
import LogoutButton from "@/components/logout-button";

const Home = () => {
  const { data: session, status } = useSession();


  return (
     <Hero/>
  );
};

export default Home;
