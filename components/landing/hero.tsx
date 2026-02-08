import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center rounded-lg bg-indigo-100 dark:bg-indigo-950/50 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                            <Sparkles className="mr-2 h-4 w-4" />
                            <span>AI-Powered Video Creation</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 pb-2">
                            Create & Schedule Viral Short Videos with AI
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Generate engaging short-form content for YouTube Shorts, Instagram Reels, and TikTok in seconds.
                            Auto-schedule your growth.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 transition-all hover:scale-105">
                            Start Generating Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 hover:bg-muted/50">
                            View Demo
                        </Button>
                    </div>
                    <div className="pt-8 w-full max-w-4xl relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-25"></div>
                        <div className="aspect-video w-full rounded-xl border bg-card shadow-2xl flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-muted-foreground font-medium">Dashboard Preview</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
