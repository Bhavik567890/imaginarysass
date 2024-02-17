"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link className="sidebar-logo" href={"/"}>
          <Image
            src={"/assets/images/logo-text.svg"}
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks?.slice(0, 6)?.map((o, i) => {
                const isActive = o.route === pathname;
                return (
                  <li
                    key={o.route}
                    className={cn(
                      "sidebar-nav_element group text-gray-700 ",
                      isActive && "bg-purple-gradient text-white"
                    )}
                  >
                    <Link href={o.route} className="sidebar-link">
                      <Image
                        src={o.icon}
                        width={24}
                        height={24}
                        alt="logo"
                        className={cn("", isActive && "brightness-200")}
                      />
                      {o.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks?.slice(6)?.map((o, i) => {
                const isActive = o.route === pathname;
                return (
                  <li
                    key={o.route}
                    className={cn(
                      "sidebar-nav_element group text-gray-700 ",
                      isActive && "bg-purple-gradient text-white"
                    )}
                  >
                    <Link href={o.route} className="sidebar-link">
                      <Image
                        src={o.icon}
                        width={24}
                        height={24}
                        alt="logo"
                        className={cn("", isActive && "brightness-200")}
                      />
                      {o.label}
                    </Link>
                  </li>
                );
              })}
              <li className="gap-2 p-4 flex-center cursor-pointer">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};
