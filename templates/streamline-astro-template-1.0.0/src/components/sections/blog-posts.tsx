import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogPosts = ({ posts }: { posts: any[] }) => {
  // Find the latest post (assuming they're already sorted by date)
  const featuredPost = posts[0];
  const restOfPosts = posts.slice(1);

  return (
    <div className="relative">
      {/* Hero Section with Featured Post */}
      <div className="bg-muted/30 relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
        <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        <div className="container relative z-10 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col justify-center lg:col-span-2">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="from-primary to-primary/70 inline bg-gradient-to-r bg-clip-text text-transparent">
                  Insights
                </span>{" "}
                & Ideas
              </h1>
              <p className="text-muted-foreground mt-4 text-lg">
                Explore our collection of articles, tutorials, and thoughts on
                software development, design, and industry trends.
              </p>
              <div className="mt-8 hidden md:block">
                <Button asChild variant="outline" size="lg" className="group">
                  <a href="#latest">
                    Browse all articles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>

            {featuredPost && (
              <div className="relative lg:col-span-3">
                <a href={`/blog/${featuredPost.id}/`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
                    <img
                      src={featuredPost.data.image}
                      alt={featuredPost.data.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16 text-white">
                      <Badge
                        variant="outline"
                        className="mb-3 border-white/30 text-white"
                      >
                        Featured
                      </Badge>
                      <h2 className="mb-2 text-2xl font-bold leading-tight md:text-3xl">
                        {featuredPost.data.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage
                              src={featuredPost.data.authorImage}
                              alt={featuredPost.data.authorName}
                            />
                            <AvatarFallback>
                              {featuredPost.data.authorName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{featuredPost.data.authorName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>10 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="from-background h-16 w-full bg-gradient-to-t to-transparent"></div>
      </div>

      {/* Latest Articles Section */}
      <section id="latest" className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <h2 className="text-foreground/90 mb-4 text-3xl font-bold">
              Latest Articles
            </h2>
            <Separator className="bg-primary/30 max-w-[120px]" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {restOfPosts.map((post) => (
              <a
                className="bg-card group flex flex-col overflow-hidden rounded-xl border transition-all hover:shadow-md"
                href={`/blog/${post.id}/`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.data.image}
                    alt={post.data.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex grow flex-col justify-between p-6">
                  <div>
                    <h3 className="group-hover:text-primary mb-2 text-xl font-semibold leading-tight">
                      {post.data.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {post.data.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border">
                        <AvatarImage
                          src={post.data.authorImage}
                          alt={post.data.authorName}
                        />
                        <AvatarFallback>
                          {post.data.authorName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {post.data.authorName}
                      </span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Clock className="h-3.5 w-3.5" />
                      <span>10 min</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { BlogPosts };
