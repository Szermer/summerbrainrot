'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, Code, TrendingUp, Users, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Educational benefits that the program provides
const benefits = [
  {
    title: 'Real Business Skills',
    description: 'Learn entrepreneurship through building actual products with paying customers.',
    icon: TrendingUp,
  },
  {
    title: 'Professional Development',
    description: 'Work with industry-standard tools and practices used by top tech companies.',
    icon: Code,
  },
  {
    title: 'Collaborative Learning',
    description: 'Build alongside peers and receive mentorship from experienced developers.',
    icon: Users,
  },
  {
    title: 'Portfolio Building',
    description: 'Create authentic projects that demonstrate real-world skills to future employers.',
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
    <section className="relative min-h-screen bg-brain-rot-mesh overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brain-rot-purple-500/5 via-brain-rot-pink-500/5 to-brain-rot-cyan-500/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brain-rot-purple-300/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-brain-rot-pink-300/10 rounded-full blur-3xl animate-float [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brain-rot-cyan-300/10 rounded-full blur-3xl animate-float [animation-delay:2s]" />
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-16 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 items-center">
          
          {/* Left side - Main content */}
          <div className={cn(
            "space-y-8 lg:space-y-12 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brain-rot-purple-200 rounded-full px-4 py-2 text-sm font-medium text-brain-rot-purple-700">
              <Brain className="w-4 h-4" />
              Strategic Learning Laboratory
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-brand-hero text-gradient-hero text-gradient-animated font-bold">
                Transform Your
                <br />
                <span className="relative">
                  Summer Brain Rot
                  <div className="absolute -inset-1 bg-brain-rot-gradient opacity-20 blur-xl -z-10 animate-pulse-slow" />
                </span>
              </h1>
              
              <p className="text-brand-tagline text-gray-600 max-w-2xl">
                Where young entrepreneurs learn to build real SaaS businesses through hands-on development. 
                Turn your digital obsessions into professional advantages.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-brand-primary group text-lg px-8 py-4"
                asChild
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-brand-outline group text-lg px-8 py-4"
                asChild
              >
                <Link href="/learn-more">
                  <Play className="mr-2 w-5 h-5" />
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
                      "card-brand-glow p-4 lg:p-6 transition-all duration-700 ease-out hover:scale-105",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-brain-rot-gradient rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Visual content */}
          <div className={cn(
            "relative transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            
            {/* Main visual container */}
            <div className="relative">
              
              {/* Stats dashboard mockup */}
              <div className="card-brand-gradient p-6 lg:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Program Impact</h3>
                  <div className="w-3 h-3 bg-brain-rot-accent-500 rounded-full animate-pulse" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/40"
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-gradient-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Progress visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">Learning Progress</span>
                    <span className="text-brain-rot-purple-600">Week 8 of 12</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brain-rot-gradient rounded-full transition-all duration-2000 ease-out"
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
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full border-4 border-brain-rot-pink-200 shadow-lg flex items-center justify-center animate-float">
                <div className="w-8 h-8 bg-brain-rot-pink-gradient rounded-full" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-xl border-4 border-brain-rot-cyan-200 shadow-lg p-3 animate-float [animation-delay:1s]">
                <div className="w-full h-full bg-brain-rot-cyan-gradient rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Bottom testimonial preview */}
            <div className="mt-8 card-brand p-4 bg-white/80 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brain-rot-purple-gradient rounded-full flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 italic mb-2">
                    "Finally, a program that gets it. My gaming skills actually became business skills."
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-brain-rot-purple-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brain-rot-purple-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
