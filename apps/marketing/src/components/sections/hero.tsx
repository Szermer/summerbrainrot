'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Autoplay from 'embla-carousel-autoplay';
import {
  ArrowRight,
  Brain,
  Code,
  TrendingUp,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Real Business Skills',
    description: 'Learn entrepreneurship by building actual products.',
    icon: TrendingUp,
  },
  {
    title: 'Professional Tools',
    description: 'Work with industry-standard development practices.',
    icon: Code,
  },
  {
    title: 'Collaborative Learning',
    description: 'Build alongside peers with mentor guidance.',
    icon: Users,
  },
  {
    title: 'Portfolio Building',
    description: 'Create authentic projects for future employers.',
    icon: Brain,
  },
];

const SLIDES = [
  { image: '/images/homepage/hero.webp', label: 'Development Environment' },
  { image: '/images/homepage/hero2.webp', label: 'Project Management' },
  { image: '/images/homepage/hero3.webp', label: 'Collaboration Tools' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-secondary pt-24 md:pt-32 lg:pt-40">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-orange-500/10 via-transparent to-yellow-500/10" />
      </div>
      
      <div className="relative container grid gap-12 lg:grid-cols-[1fr_0.68fr]">
        {/* Left side - Content */}
        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-foreground font-normal tracking-tight text-[2.5rem] leading-tight sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]">
              Transform Your Summer Brain Rot
            </h1>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed md:text-xl max-w-2xl">
              Where young entrepreneurs learn to build real SaaS businesses
              through hands-on development.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex max-w-[250px] gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon className="size-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button 
              aria-label="Apply Now" 
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-6 text-sm font-semibold transition-all"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              aria-label="See success stories from past participants"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 px-6 text-sm font-semibold transition-all max-sm:hidden"
              asChild
            >
              <Link href="#success-stories">
                <span className="flex items-center gap-2">
                  View Success Stories
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </Button>
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4! max-lg:hidden"
            api={api}
          />
        </div>

        {/* Right side - Carousel */}
        <div className="relative -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] shadow-xl max-lg:translate-x-10 lg:shadow-2xl">
          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          >
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative size-full min-h-[30rem] overflow-hidden rounded-t-xl">
                    <Image
                      src={slide.image}
                      alt={`Summer Brain Rot ${slide.label}`}
                      fill
                      className="object-cover object-left-top"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <SlideIndicator
        currentSlide={currentSlide}
        slides={SLIDES}
        className="mt-6 mb-8 lg:hidden"
        api={api}
      />
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div className={cn('flex flex-col items-center font-medium', className)}>
      <div className="">
        <span className="text-sand-700">{currentSlide + 1} of 3 — </span>
        <span className="text-primary">{slides[currentSlide].label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="py-2"
          >
            <div
              className={cn(
                'h-0.5 w-6 rounded-full transition-colors',
                index === currentSlide
                  ? 'bg-primary'
                  : 'bg-primary/20 hover:bg-primary/40',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;