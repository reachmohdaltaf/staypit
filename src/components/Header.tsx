"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { BriefcaseBusiness, Crown, Home, Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function Header() {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();

  const menuItems = [
    {
      icon: Crown,
      title: "Become a member",
      subtitle: "Addition 10% off on stays",
    },
    {
      icon: BriefcaseBusiness,
      title: "StayPit for Business",
      subtitle: "Trusted by 5000 Corporates",
    },
    {
      icon: Home,
      title: "List your property",
      subtitle: "Start earning in 30 minutes",
    },
    {
      icon: Phone,
      title: "0124-6201611",
      subtitle: "Call us to Book now",
    },
  ];

  return (
    <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 flex justify-between border-border shadow-sm gap-2 px-4 py-2">
      <div className="flex justify-between items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50">
          <Image alt="App Logo" src={`${theme === "dark" ? "/hotel_white.png" : "/hotel_black.png"}`} width={24} height={24} />
        </div>
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          StayPit
        </Link>
      </div>

      <div className="flex items-center">
        <div className="flex max-sm:hidden bg-muted/50 rounded-xl border border-border/50 overflow-hidden">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex justify-center items-center gap-2 px-4 py-3 hover:bg-accent/50 transition-colors border-r border-border/30 last:border-r-0"
              >
                <IconComponent className="h-4 w-4 text-primary" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[13px] text-foreground">{item.title}</h3>
                  <p className="text-[10px] text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 ml-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-xl border border-border/50">
            {status === "loading" ? (
              <div className="text-muted-foreground">Loading...</div>
            ) : session ? (
              <LogoutButton />
            ) : (
              <Link href="/login">
                <Button className="shadow-sm">Login</Button>
              </Link>
            )}
          </div>

          {/* button for dark mode and light mode */}
          <div className="p-1 bg-muted/50 rounded-xl border border-border/50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 hover:bg-accent"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
