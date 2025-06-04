'use client';

import React from 'react';
import { Brain, Code, Users, TrendingUp, Zap, ArrowRight, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Success metrics that demonstrate program effectiveness
const successMetrics = [
  {
    value: "95%",
    label: "Skill Acquisition Rate",
    description: "Participants master core technical skills",
    icon: Code,
    color: "text-brain-rot-purple-600"
  },
  {
    value: "87%", 
    label: "Business Confidence",
    description: "Feel prepared to start their own ventures",
    icon: TrendingUp,
    color: "text-brain-rot-pink-600"
  },
  {
    value: "100%",
    label: "Portfolio Projects",
    description: "Complete real-world applications",
    icon: Zap,
    color: "text-brain-rot-cyan-600"
  },
  {
    value: "78%",
    label: "Continued Learning", 
    description: "Pursue advanced programming after program",
    icon: Brain,
    color: "text-brain-rot-accent-600"
  }
];

// Student testimonials
const testimonials = [
  {
    quote: "I went from playing games all day to actually building them. Now I understand both the fun side and the business side.",
    author: "Alex Chen",
    age: 16,
    project: "Discord Community Bot",
    avatar: "AC",
    metrics: "$2.3k MRR"
  },
  {
    quote: "The mentors didn't just teach me to code - they taught me to think like an entrepreneur. That's the real value.",
    author: "Jordan Rivera", 
    age: 15,
    project: "Study Group Marketplace",
    avatar: "JR",
    metrics: "50+ users"
  },
  {
    quote: "Finally, a program that gets our generation. They turned my TikTok addiction into marketing expertise.",
    author: "Sam Williams",
    age: 17,
    project: "Content Creator Tools",
    avatar: "SW", 
    metrics: "10k+ installs"
  }
];

// Learning modules
const learningModules = [
  {
    week: "Weeks 1-3",
    title: "Foundation Building",
    description: "Transform screen time into structured learning. Master development fundamentals while understanding the business context.",
    skills: ["React & TypeScript", "Git Collaboration", "User Research", "Market Analysis"],
    deliverable: "Personal Portfolio Site"
  },
  {
    week: "Weeks 4-8", 
    title: "Product Development",
    description: "Build real applications that solve actual problems. Learn to balance technical execution with user needs.",
    skills: ["Full-Stack Development", "Database Design", "UX/UI Principles", "Agile Methodology"],
    deliverable: "MVP Web Application"
  },
  {
    week: "Weeks 9-12",
    title: "Business Launch",
    description: "Take your product to market. Understand pricing, marketing, customer acquisition, and scaling strategies.",
    skills: ["Product Marketing", "Analytics", "Customer Development", "Growth Strategies"],
    deliverable: "Live Product Launch"
  }
];

const ProgramShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brain-rot-purple-100 text-brain-rot-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Program Overview
          </div>
          <h2 className="text-brand-subtitle text-gradient-primary mb-6">
            Where Brain Rot Becomes Business Brilliance
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our unique approach transforms what adults call "wasted time" into valuable entrepreneurial skills. 
            Participants learn by building real products that solve actual problems.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="card-brand-glow text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brain-rot-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-purple transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Journey */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-brand-subtitle text-gray-900 mb-4">
              12-Week Learning Journey
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured progression from digital native to technical entrepreneur, 
              with real deliverables and measurable outcomes at each stage.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-brain-rot-gradient opacity-30"></div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {learningModules.map((module, index) => (
                <div
                  key={module.title}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brain-rot-gradient rounded-full shadow-lg z-10"></div>
                  
                  <div className="card-brand-gradient p-6 h-full">
                    <div className="text-sm font-medium text-brain-rot-purple-600 mb-2">
                      {module.week}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {module.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {module.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Key Skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-white/60 text-brain-rot-purple-700 text-xs font-medium rounded-full border border-brain-rot-purple-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Deliverable */}
                    <div className="bg-white/60 p-3 rounded-lg border border-brain-rot-purple-200">
                      <div className="text-sm font-medium text-gray-900 mb-1">Deliverable:</div>
                      <div className="text-sm text-brain-rot-purple-700 font-medium">
                        {module.deliverable}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-brand-subtitle text-gray-900 mb-4">
              Success Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real participants, real projects, real results. See how young entrepreneurs 
              are transforming their interests into valuable skills and businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="card-brand-glow relative group hover:scale-105 transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-brain-rot-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                <div className="pt-4">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brain-rot-accent-500 text-brain-rot-accent-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brain-rot-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}, {testimonial.age}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-brain-rot-purple-600 font-medium">
                      Current Status: {testimonial.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-brain-rot-mesh rounded-2xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-brand-subtitle text-gray-900 mb-4">
              Ready to Transform Your Summer?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join a community of young entrepreneurs who are turning their digital interests 
              into real business skills. Applications for our next cohort are now open.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="btn-brand-outline text-lg px-8 py-4"
                asChild
              >
                <Link href="/learn-more">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200/50">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brain-rot-accent-500 rounded-full"></div>
                  <span>12-week program</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brain-rot-accent-500 rounded-full"></div>
                  <span>Expert mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brain-rot-accent-500 rounded-full"></div>
                  <span>Real portfolio projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brain-rot-accent-500 rounded-full"></div>
                  <span>Business outcomes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramShowcase;
