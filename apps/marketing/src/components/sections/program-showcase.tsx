'use client';

import React from 'react';

import Link from 'next/link';

import {
  Brain,
  Code,
  Users,
  TrendingUp,
  Zap,
  ArrowRight,
  Star,
  Quote,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Success metrics that demonstrate program effectiveness
const successMetrics = [
  {
    value: '95%',
    label: 'Skill Acquisition Rate',
    description: 'Participants master core technical skills',
    icon: Code,
    color: 'text-brain-rot-purple-600',
  },
  {
    value: '87%',
    label: 'Business Confidence',
    description: 'Feel prepared to start their own ventures',
    icon: TrendingUp,
    color: 'text-brain-rot-pink-600',
  },
  {
    value: '100%',
    label: 'Portfolio Projects',
    description: 'Complete real-world applications',
    icon: Zap,
    color: 'text-brain-rot-cyan-600',
  },
  {
    value: '78%',
    label: 'Continued Learning',
    description: 'Pursue advanced programming after program',
    icon: Brain,
    color: 'text-brain-rot-accent-600',
  },
];

// Student testimonials
const testimonials = [
  {
    quote:
      'I went from playing games all day to actually building them. Now I understand both the fun side and the business side.',
    author: 'Alex Chen',
    age: 16,
    project: 'Discord Community Bot',
    avatar: 'AC',
    metrics: '$2.3k MRR',
  },
  {
    quote:
      "The mentors didn't just teach me to code - they taught me to think like an entrepreneur. That's the real value.",
    author: 'Jordan Rivera',
    age: 15,
    project: 'Study Group Marketplace',
    avatar: 'JR',
    metrics: '50+ users',
  },
  {
    quote:
      'Finally, a program that gets our generation. They turned my TikTok addiction into marketing expertise.',
    author: 'Sam Williams',
    age: 17,
    project: 'Content Creator Tools',
    avatar: 'SW',
    metrics: '10k+ installs',
  },
];

// Learning modules
const learningModules = [
  {
    week: 'Weeks 1-3',
    title: 'Foundation Building',
    description:
      'Transform screen time into structured learning. Master development fundamentals while understanding the business context.',
    skills: [
      'React & TypeScript',
      'Git Collaboration',
      'User Research',
      'Market Analysis',
    ],
    deliverable: 'Personal Portfolio Site',
  },
  {
    week: 'Weeks 4-8',
    title: 'Product Development',
    description:
      'Build real applications that solve actual problems. Learn to balance technical execution with user needs.',
    skills: [
      'Full-Stack Development',
      'Database Design',
      'UX/UI Principles',
      'Agile Methodology',
    ],
    deliverable: 'MVP Web Application',
  },
  {
    week: 'Weeks 9-12',
    title: 'Business Launch',
    description:
      'Take your product to market. Understand pricing, marketing, customer acquisition, and scaling strategies.',
    skills: [
      'Product Marketing',
      'Analytics',
      'Customer Development',
      'Growth Strategies',
    ],
    deliverable: 'Live Product Launch',
  },
];

const ProgramShowcase = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="bg-brain-rot-purple-100 text-brain-rot-purple-700 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Brain className="h-4 w-4" />
            Program Overview
          </div>
          <h2 className="text-brand-subtitle text-gradient-primary mb-6">
            Where Brain Rot Becomes Business Brilliance
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Our unique approach transforms what adults call "wasted time" into
            valuable entrepreneurial skills. Participants learn by building real
            products that solve actual problems.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="card-brand-glow group text-center transition-all duration-300 hover:scale-105"
              >
                <div className="bg-brain-rot-gradient group-hover:shadow-glow-purple mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-gradient-primary mb-2 text-3xl font-bold">
                  {metric.value}
                </div>
                <div className="mb-1 font-semibold text-gray-900">
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
          <div className="mb-12 text-center">
            <h3 className="text-brand-subtitle mb-4 text-gray-900">
              12-Week Learning Journey
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Structured progression from digital native to technical
              entrepreneur, with real deliverables and measurable outcomes at
              each stage.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="bg-brain-rot-gradient absolute top-8 right-0 left-0 hidden h-0.5 opacity-30 lg:block"></div>

            <div className="grid gap-8 lg:grid-cols-3">
              {learningModules.map((module, index) => (
                <div key={module.title} className="relative">
                  {/* Timeline dot */}
                  <div className="bg-brain-rot-gradient absolute -top-3 left-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 transform rounded-full shadow-lg lg:block"></div>

                  <div className="card-brand-gradient h-full p-6">
                    <div className="text-brain-rot-purple-600 mb-2 text-sm font-medium">
                      {module.week}
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-gray-900">
                      {module.title}
                    </h4>
                    <p className="mb-4 leading-relaxed text-gray-600">
                      {module.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="mb-2 text-sm font-medium text-gray-900">
                        Key Skills:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-brain-rot-purple-700 border-brain-rot-purple-200 rounded-full border bg-white/60 px-2 py-1 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable */}
                    <div className="border-brain-rot-purple-200 rounded-lg border bg-white/60 p-3">
                      <div className="mb-1 text-sm font-medium text-gray-900">
                        Deliverable:
                      </div>
                      <div className="text-brain-rot-purple-700 text-sm font-medium">
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
          <div className="mb-12 text-center">
            <h3 className="text-brand-subtitle mb-4 text-gray-900">
              Success Stories
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Real participants, real projects, real results. See how young
              entrepreneurs are transforming their interests into valuable
              skills and businesses.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="card-brand-glow group relative transition-all duration-300 hover:scale-105"
              >
                {/* Quote icon */}
                <div className="bg-brain-rot-gradient absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full shadow-lg">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                <div className="pt-4">
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-brain-rot-accent-500 text-brain-rot-accent-500 h-4 w-4"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 leading-relaxed text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="bg-brain-rot-gradient flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
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
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="text-brain-rot-purple-600 text-sm font-medium">
                      Current Status: {testimonial.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-brain-rot-mesh rounded-2xl p-8 text-center lg:p-12">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-brand-subtitle mb-4 text-gray-900">
              Ready to Transform Your Summer?
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Join a community of young entrepreneurs who are turning their
              digital interests into real business skills. Applications for our
              next cohort are now open.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="btn-brand-primary group px-8 py-4 text-lg"
                asChild
              >
                <Link href="/apply" className="flex items-center">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-brand-outline px-8 py-4 text-lg"
                asChild
              >
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 border-t border-gray-200/50 pt-8">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="bg-brain-rot-accent-500 h-2 w-2 rounded-full"></div>
                  <span>12-week program</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brain-rot-accent-500 h-2 w-2 rounded-full"></div>
                  <span>Expert mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brain-rot-accent-500 h-2 w-2 rounded-full"></div>
                  <span>Real portfolio projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-brain-rot-accent-500 h-2 w-2 rounded-full"></div>
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
