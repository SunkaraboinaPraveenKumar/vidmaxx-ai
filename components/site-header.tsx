import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link className="flex items-center gap-2 font-bold text-xl" href="/">
                    <Video className="h-6 w-6 text-primary" />
                    <span>VidMaxx</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link className="hover:underline underline-offset-4" href="#features">
                        Features
                    </Link>
                    <Link className="hover:underline underline-offset-4" href="#pricing">
                        Pricing
                    </Link>
                    <Link className="hover:underline underline-offset-4" href="#about">
                        About
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block" href="/login">
                        Login
                    </Link>
                    <Button>Get Started</Button>
                </div>
            </div>
        </header>
    );
}
