'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Brain,
  Code,
  TrendingUp,
  Users,
  Zap,
  Play,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Educational benefits that the program provides
const benefits = [
  {
    title: 'Real Business Skills',
    description:
      'Learn entrepreneurship through building actual products with paying customers.',
    icon: TrendingUp,
  },
  {
    title: 'Professional Development',
    description:
      'Work with industry-standard tools and practices used by top tech companies.',
    icon: Code,
  },
  {
    title: 'Collaborative Learning',
    description:
      'Build alongside peers and receive mentorship from experienced developers.',
    icon: Users,
  },
  {
    title: 'Portfolio Building',
    description:
      'Create authentic projects that demonstrate real-world skills to future employers.',
    icon: Zap,
  },
];

// Stats that demonstrate program value
const stats = [
  { value: '95%', label: 'Participants gain technical skills' },
  { value: '87%', label: 'Feel confident in business concepts' },
  { value: '100%', label: 'Build real portfolio projects' },
  { value: '12+', label: 'Weeks of hands-on experience' },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-brain-rot-mesh relative min-h-screen overflow-hidden">
      {/* Background gradient overlay */}
      <div className="from-brain-rot-purple-500/5 via-brain-rot-pink-500/5 to-brain-rot-cyan-500/5 absolute inset-0 bg-gradient-to-br" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-brain-rot-purple-300/10 animate-float absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-brain-rot-pink-300/10 animate-float absolute top-3/4 right-1/4 h-96 w-96 rounded-full blur-3xl [animation-delay:1s]" />
        <div className="bg-brain-rot-cyan-300/10 animate-float absolute top-1/2 left-1/2 h-96 w-96 rounded-full blur-3xl [animation-delay:2s]" />
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-16 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Left side - Main content */}
          <div
            className={cn(
              'space-y-8 transition-all duration-1000 ease-out lg:space-y-12',
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            )}
          >
            {/* Badge */}
            <div className="border-brain-rot-purple-200 text-brain-rot-purple-700 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Brain className="h-4 w-4" />
              Strategic Learning Laboratory
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-brand-hero text-gradient-hero text-gradient-animated font-bold">
                Transform Your
                <br />
                <span className="relative">
                  Summer Brain Rot
                  <div className="bg-brain-rot-gradient animate-pulse-slow absolute -inset-1 -z-10 opacity-20 blur-xl" />
                </span>
              </h1>

              <p className="text-brand-tagline max-w-2xl text-gray-600">
                Where young entrepreneurs learn to build real SaaS businesses
                through hands-on development. Turn your digital obsessions into
                professional advantages.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="btn-brand-primary group px-8 py-4 text-lg"
                asChild
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-brand-outline group px-8 py-4 text-lg"
                asChild
              >
                <Link href="/learn-more">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <span className="font-medium">Trusted by families from:</span>
              <div className="flex items-center gap-4 opacity-70">
                <span>Wheeler School</span>
                <span>•</span>
                <span>Brown University</span>
                <span>•</span>
                <span>RISD</span>
              </div>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className={cn(
                      'card-brand-glow p-4 transition-all duration-700 ease-out hover:scale-105 lg:p-6',
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0',
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-brain-rot-gradient flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Visual content */}
          <div
            className={cn(
              'relative transition-all delay-300 duration-1000 ease-out',
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0',
            )}
          >
            {/* Main visual container */}
            <div className="relative">
              {/* Stats dashboard mockup */}
              <div className="card-brand-gradient space-y-6 p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Program Impact
                  </h3>
                  <div className="bg-brain-rot-accent-500 h-3 w-3 animate-pulse rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/40 bg-white/60 p-4 text-center backdrop-blur-sm"
                    >
                      <div className="text-gradient-primary mb-1 text-2xl font-bold lg:text-3xl">
                        {stat.value}
                      </div>
                      <div className="text-xs leading-tight text-gray-600 lg:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      Learning Progress
                    </span>
                    <span className="text-brain-rot-purple-600">
                      Week 8 of 12
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="bg-brain-rot-gradient h-full rounded-full transition-all duration-2000 ease-out"
                      style={{ width: isVisible ? '67%' : '0%' }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Concept Learning</span>
                    <span>Real Projects</span>
                    <span>Business Launch</span>
                  </div>
                </div>
              </div>

              {/* Floating participant cards */}
              <div className="border-brain-rot-pink-200 animate-float absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-lg">
                <div className="bg-brain-rot-pink-gradient h-8 w-8 rounded-full" />
              </div>

              <div className="border-brain-rot-cyan-200 animate-float absolute -bottom-6 -left-6 h-20 w-20 rounded-xl border-4 bg-white p-3 shadow-lg [animation-delay:1s]">
                <div className="bg-brain-rot-cyan-gradient flex h-full w-full items-center justify-center rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Bottom testimonial preview */}
            <div className="card-brand mt-8 bg-white/80 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="bg-brain-rot-purple-gradient h-10 w-10 flex-shrink-0 rounded-full" />
                <div>
                  <p className="mb-2 text-sm text-gray-600 italic">
                    "Finally, a program that gets it. My gaming skills actually
                    became business skills."
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-medium">Alex, Age 16</span>
                    <span>•</span>
                    <span>Built profitable Discord bot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <div className="border-brain-rot-purple-300 flex h-10 w-6 justify-center rounded-full border-2">
            <div className="bg-brain-rot-purple-500 mt-2 h-3 w-1 animate-pulse rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
