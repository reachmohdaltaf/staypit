'use client'
import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

import {
  MapPinHouse,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const navItems = [
  {
    title: "Templates",
    links: [
      { title: "Beach Resorts", description: "Sun and sea at their best" },
      { title: "Hill Stations", description: "Cool breeze and green trees" },
      { title: "City Hotels", description: "Stay in the heart of the action" },
      { title: "Luxury Villas", description: "Privacy and luxury combined" },
    ],
  },
  {
    title: "Travelers",
    links: [
      { title: "Weekend Deals", description: "Up to 50% off" },
      { title: "Member Specials", description: "Exclusive pricing" },
      { title: "Festival Offers", description: "Celebrate with savings" },
      { title: "Early Bird", description: "Book in advance, save more" },
    ],
  },
  {
    title: "Help",
    links: [
      { title: "Contact Support", description: "We’re here 24/7" },
      { title: "Cancellation Policy", description: "Know your rights" },
      { title: "FAQs", description: "Find quick answers" },
      { title: "Chatbot", description: "Get help instantly" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", description: "Our journey so far" },
      { title: "Careers", description: "Join our team" },
      { title: "Blog", description: "Travel stories and guides" },
      { title: "Media", description: "Press & branding" },
    ],
  },
  {
    title: "Account",
    links: [
      { title: "My Bookings", description: "View your trips" },
      { title: "Profile Settings", description: "Manage your info" },
      { title: "Saved Properties", description: "Wishlist stays" },
      { title: "Payment Methods", description: "Add or edit cards" },
    ],
  },
];

const PublicNavbar = () => {
  return (
    <div className="bg-white/50 hidden h-20 shadow-xs bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 md:flex items-center justify-between px-3 bg-[url('data:image/svg+xml;base64,CiAgICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmRldi9zdmdqcyIgdmlld0JveD0iMCAwIDcwMCA3MDAiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBvcGFjaXR5PSIwLjQ0Ij4KICAgICAgICA8ZGVmcz4KICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgogICAgICAgICAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4xMTYiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICAgICAgICAgIDxmZVNwZWN1bGFyTGlnaHRpbmcgc3VyZmFjZVNjYWxlPSIxOCIgc3BlY3VsYXJDb25zdGFudD0iMC43IiBzcGVjdWxhckV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiM3OTU3QTgiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ic3BlY3VsYXJMaWdodGluZyI+CiAgICAgICAgICAgICAgPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogICAgICAgICAgICA8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0ic3BlY3VsYXJMaWdodGluZyIgcmVzdWx0PSJjb2xvcm1hdHJpeCI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPC9kZWZzPgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+CiAgICAgIDwvc3ZnPgogICAg')] bg-blend-overlay">
      <Link href={'/'} className="logo flex  items-end">
        <MapPinHouse className="text-primary mb-1" size={44} />
        {/* <h1 className="text-3xl font-semibold">Staypit</h1> */}
      </Link>

      <div className="right-side text-gray-600 flex items-center  gap-2 h-full">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem className="cursor-pointer" key={index}>
                <NavigationMenuTrigger className="cursor-pointer bg-transparent text-gray-600 ">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 min-w-[500px]  max-w-[500px] w-full">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {item.links.map((link, i) => (
                      <NavigationMenuLink
                        key={i}
                        className="block p-3 rounded-md  transition"
                      >
                        <div className="font-semibold text-sm">
                          {link.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {link.description}
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
     
        <div className="gap-3 text-gray-600  flex items-center  h-full">
        
        <Button>Login</Button>
        {/* <Button>Sign Up</Button> */}
         

         
        </div>
      </div>
    </div>
  );
};

export default PublicNavbar;
