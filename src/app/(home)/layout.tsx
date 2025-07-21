import PrivateNavbar from "@/components/layout/PrivateNavbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="fixed top-0 z-50 left-0 right-0">
        <PrivateNavbar />
      </div>
      <main className="max-w-screen-2xl mx-auto pt-20   ">{children}</main>
    </div>
  );
};

export default HomeLayout;
