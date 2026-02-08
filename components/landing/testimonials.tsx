import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function TestimonialsSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        Trusted by Creators
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        See what others are achieving with VidMaxx.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="bg-muted/30">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" alt="@alex" />
                                <AvatarFallback>AD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="text-sm font-medium leading-none">Alex D.</p>
                                <p className="text-xs text-muted-foreground">YouTuber</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                "VidMaxx saved me hours of editing time. The AI scripts are surprisingly good!"
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" alt="@sarah" />
                                <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="text-sm font-medium leading-none">Sarah J.</p>
                                <p className="text-xs text-muted-foreground">Digital Marketer</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                "The auto-scheduling feature is a game changer. I set up a month's worth of content in one sitting."
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" alt="@mike" />
                                <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="text-sm font-medium leading-none">Mike R.</p>
                                <p className="text-xs text-muted-foreground">Influencer</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                "Finally, a tool that handles multi-platform distribution correctly. Love the AI rendering!"
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
