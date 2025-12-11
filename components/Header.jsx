"use client";

import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox, Sparkles } from "lucide-react";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">  

        <a href="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[hsl(173_80%_50%)] to-[hsl(199_89%_48%)] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Expensia</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#limited" className="text-muted-foreground hover:text-foreground transition-colors">
            Join Now
          </a>
        </div>

        <div className="flex items-center gap-2">

          <SignedIn>
            <Link 
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link 
              href={"/transaction/create"}
              className="flex items-center gap-2"
            >
              <Button>
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <Button variant="ghost" className="hidden sm:inline-flex hover:bg-muted hover:text-foreground">Login</Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant="default">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                },
              }}
            />
          </SignedIn>

        </div>

      </div>
    </nav>
  );
};

export default Header;
