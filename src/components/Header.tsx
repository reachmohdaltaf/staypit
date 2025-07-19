"use client";
import { BellIcon, HotelIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import LoginButton from "./login-button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import LogoutButton from "./logout-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const { data: session, status } = useSession();

  return (
    <div className="flex px-10 sm:px-20 lg:px-30 border font-poppins justify-between py-6">
      <div className="flex justify-center items-center gap-2">
        {/* <Image src={"/logo.png"} alt="Logo" height={40} width={40} /> */}
        <h1 className="font-bold text-[25px]">Staypit</h1>
      </div>

      <div className="text-sm max-lg:hidden  flex items-center gap-2 border rounded-full px-2 py-1 shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-2">
          <h3 className="border-r pr-2 pl-3">Location</h3>
          <h3 className="border-r px-2">Check In</h3>
          <h3 className="pl-2">Add guests</h3>
          <div className="bg-primary rounded-full p-2">
            <SearchIcon className="text-white" height={15} width={15} />
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <div className="p-2 max-sm:hidden px-3 border font-medium rounded-full text-sm hover:border-gray-500 text-[#374151]">
          <p>List your property</p>
        </div>
        <div className="p-3  rounded-full text-sm hover:bg-gray-100">
          <BellIcon className="font-light" height={15} width={15} />
        </div>

        {status === "loading" ? (
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        ) : session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="rounded-full text-sm hover:bg-gray-100 overflow-hidden cursor-pointer">
                <Image
                  src={session.user?.image || "/3davatar.webp"}
                  height={40}
                  width={40}
                  alt="profile-image"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>{session.user?.name || session.user?.email}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 text-sm font-medium">
              Sign up
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
