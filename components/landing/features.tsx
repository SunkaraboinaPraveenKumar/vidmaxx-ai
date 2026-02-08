import { CalendarClock, Clapperboard, Share2, Wand2, BarChart3, Zap } from "lucide-react";

export function FeaturesSection() {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium border">
                            Key Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Everything you need to dominate short-form video
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            From idea to published video in minutes. VidMaxx handles the heavy lifting so you can focus on creativity.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-violet-100 dark:bg-violet-900/20 rounded-full">
                            <Wand2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 className="text-xl font-bold">AI Video Generation</h3>
                        <p className="text-sm text-muted-foreground text-center">
                            Turn text prompts into engaging videos with AI-generated visuals, voiceovers, and subtitles.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                            <CalendarClock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold">Auto-Scheduling</h3>
                        <p className="text-sm text-muted-foreground text-center">
                            Plan your content calendar ahead. Auto-post to YouTube, Instagram, and TikTok at optimal times.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                            <Share2 className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold">Multi-Platform</h3>
                        <p className="text-sm text-muted-foreground text-center">
                            Resize and repurpose content for different platforms automatically. One video, everywhere.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-full">
                            <Clapperboard className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h3 className="text-xl font-bold">Script Assistant</h3>
                        <p className="text-sm text-muted-foreground text-center">
                            Writer's block? Let our AI write viral scripts and hooks for your niche.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 rounded-full">
                            <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold">Instant Rendering</h3>
                        <p className="text-sm text-muted-foreground text-center">
                            Cloud-based rendering means you don't need a powerful PC. Get your videos in minutes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-full">
                            <BarChart3 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold">Analytics</h3>
                        <p className="text-sm text-muted-foreground text-center">
                            Track performance across all platforms in one dashboard. See what works best.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
