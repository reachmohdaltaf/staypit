"use client";
import { useSession } from "next-auth/react";
import LoginButton from "@/components/login-button";
import LogoutButton from "@/components/logout-button";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <div className="">
         <div>

         </div>
         <div>

         </div>
      </div>
    </div>
  );
};

export default Home;
