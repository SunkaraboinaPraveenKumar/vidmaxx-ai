import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Video } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2 lg:col-span-2">
                        <Link className="flex items-center gap-2 font-bold text-xl mb-4" href="/">
                            <Video className="h-6 w-6 text-primary" />
                            <span>VidMaxx</span>
                        </Link>
                        <p className="text-muted-foreground mb-4 max-w-xs">
                            The ultimate AI-powered short video generator and scheduler for content creators.
                            Create, schedule, and grow.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:underline">Features</Link></li>
                            <li><Link href="#" className="hover:underline">Pricing</Link></li>
                            <li><Link href="#" className="hover:underline">Integrations</Link></li>
                            <li><Link href="#" className="hover:underline">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:underline">Documentation</Link></li>
                            <li><Link href="#" className="hover:underline">API Reference</Link></li>
                            <li><Link href="#" className="hover:underline">Blog</Link></li>
                            <li><Link href="#" className="hover:underline">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} VidMaxx Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <h4 className="text-sm font-semibold whitespace-nowrap">Subscribe to our newsletter</h4>
                        <div className="flex gap-2 w-full max-w-sm">
                            <Input type="email" placeholder="Enter your email" className="h-9" />
                            <Button size="sm">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
