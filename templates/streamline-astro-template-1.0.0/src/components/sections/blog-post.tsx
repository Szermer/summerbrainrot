import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BlogPost = ({
  post,
  children,
}: {
  post: any;
  children: React.ReactNode;
}) => {
  const { title, authorName, image, pubDate, description, authorImage } =
    post.data;
  return (
    <div className="relative">
      {/* Header */}
      <div className="bg-muted/20 relative pb-8 pt-12 md:pt-20">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-6 px-3 py-1 text-xs">
              Published {format(pubDate, "MMMM d, yyyy")}
            </Badge>
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl font-normal leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative mx-auto -mt-4 max-w-4xl px-4 md:-mt-8 lg:-mt-12">
        <div className="aspect-[16/9] overflow-hidden rounded-xl border shadow-lg">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="mx-auto my-12 max-w-3xl space-y-12 md:my-16 lg:my-20">
          <article className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-base prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-md prose-img:shadow-sm prose-blockquote:border-l-primary prose-blockquote:bg-muted/40 prose-blockquote:py-1 prose-blockquote:not-italic max-w-none">
            {children}
          </article>

          <Separator />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src={authorImage} alt={authorName} />
                <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{authorName}</div>
                <div className="text-muted-foreground text-sm">Written by</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" asChild>
                <a href="/blog">More Articles</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogPost };
