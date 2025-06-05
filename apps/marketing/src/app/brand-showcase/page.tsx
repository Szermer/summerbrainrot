import React from 'react';

import { Brain, Zap, Star, Palette, Type, Layout } from 'lucide-react';

import Hero from '@/components/sections/hero';
import ProgramShowcase from '@/components/sections/program-showcase';

// Brand showcase examples
const colorExamples = [
  { name: 'Primary Purple', class: 'bg-brain-rot-purple-500', hex: '#8B5CF6' },
  { name: 'Brand Pink', class: 'bg-brain-rot-pink-500', hex: '#EC4899' },
  { name: 'Brand Cyan', class: 'bg-brain-rot-cyan-500', hex: '#06B6D4' },
  { name: 'Success Green', class: 'bg-brain-rot-accent-500', hex: '#10B981' },
];

const typographyExamples = [
  {
    name: 'Hero Text',
    class: 'text-brand-hero text-gradient-hero',
    text: 'Summer Brain Rot',
  },
  {
    name: 'Subtitle',
    class: 'text-brand-subtitle text-gradient-primary',
    text: 'Strategic Learning Laboratory',
  },
  {
    name: 'Tagline',
    class: 'text-brand-tagline text-gray-600',
    text: 'Where digital obsessions become professional advantages',
  },
  {
    name: 'Body Text',
    class: 'text-body-lg text-gray-700',
    text: 'This is body text that provides detailed information in a readable format.',
  },
];

const componentExamples = [
  { name: 'Primary Button', component: 'btn-brand-primary', text: 'Apply Now' },
  {
    name: 'Secondary Button',
    component: 'btn-brand-secondary',
    text: 'Learn More',
  },
  {
    name: 'Outline Button',
    component: 'btn-brand-outline',
    text: 'Get Started',
  },
];

export default function BrandShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Program Showcase */}
      <ProgramShowcase />

      {/* Brand Elements Showcase */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="bg-brain-rot-purple-100 text-brain-rot-purple-700 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Palette className="h-4 w-4" />
              Brand Showcase
            </div>
            <h2 className="text-brand-subtitle mb-4 text-gray-900">
              Summer Brain Rot Design System
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A comprehensive brand identity that transforms the concept of
              "brain rot" into a professional, engaging, and educational
              experience.
            </p>
          </div>

          <div className="mb-16 grid gap-12 lg:grid-cols-3">
            {/* Colors */}
            <div className="card-brand">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-brain-rot-gradient flex h-8 w-8 items-center justify-center rounded-lg">
                  <Palette className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Color Palette
                </h3>
              </div>

              <div className="space-y-4">
                {colorExamples.map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div
                      className={`h-8 w-8 ${color.class} rounded-lg shadow-sm`}
                    ></div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {color.name}
                      </div>
                      <div className="font-mono text-sm text-gray-500">
                        {color.hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="mb-3 text-sm font-medium text-gray-900">
                  Gradient Examples:
                </div>
                <div className="space-y-2">
                  <div className="bg-brain-rot-gradient h-4 rounded-full"></div>
                  <div className="from-brain-rot-cyan-500 to-brain-rot-purple-500 h-4 rounded-full bg-gradient-to-r"></div>
                  <div className="from-brain-rot-accent-500 to-brain-rot-cyan-500 h-4 rounded-full bg-gradient-to-r"></div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="card-brand">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-brain-rot-gradient flex h-8 w-8 items-center justify-center rounded-lg">
                  <Type className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Typography</h3>
              </div>

              <div className="space-y-6">
                {typographyExamples.map((example) => (
                  <div key={example.name}>
                    <div className="mb-2 text-sm font-medium text-gray-500">
                      {example.name}
                    </div>
                    <div className={example.class}>{example.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="mb-3 text-sm font-medium text-gray-900">
                  Font Stack:
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>
                    <span className="font-display font-bold">
                      Space Grotesk
                    </span>{' '}
                    - Display & Headings
                  </div>
                  <div>
                    <span className="font-sans font-medium">Inter</span> - Body
                    & Interface
                  </div>
                  <div>
                    <span className="font-mono font-medium">
                      JetBrains Mono
                    </span>{' '}
                    - Code & Data
                  </div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="card-brand">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-brain-rot-gradient flex h-8 w-8 items-center justify-center rounded-lg">
                  <Layout className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Components</h3>
              </div>

              <div className="space-y-4">
                {componentExamples.map((example) => (
                  <div key={example.name}>
                    <div className="mb-2 text-sm font-medium text-gray-500">
                      {example.name}
                    </div>
                    <button className={example.component}>
                      {example.text}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="mb-3 text-sm font-medium text-gray-900">
                  Interactive States:
                </div>
                <div className="space-y-2">
                  <button className="btn-brand-primary cursor-not-allowed opacity-50">
                    Disabled State
                  </button>
                  <button className="btn-brand-outline transition-transform hover:scale-105">
                    Hover Effect
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Showcase */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Card Variations
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card-brand card-brand-hover">
                <div className="bg-brain-rot-purple-100 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Brain className="text-brain-rot-purple-600 h-5 w-5" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900">Default Card</h4>
                <p className="text-sm text-gray-600">
                  Clean, minimal design with subtle hover effects and excellent
                  readability.
                </p>
              </div>

              <div className="card-brand-gradient card-brand-hover">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/60">
                  <Zap className="text-brain-rot-purple-600 h-5 w-5" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900">Gradient Card</h4>
                <p className="text-sm text-gray-600">
                  Subtle mesh background that adds visual interest without
                  overwhelming content.
                </p>
              </div>

              <div className="card-brand-glow card-brand-hover">
                <div className="bg-brain-rot-gradient mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900">Glow Card</h4>
                <p className="text-sm text-gray-600">
                  Elevated design with brand-colored shadows for special content
                  and CTAs.
                </p>
              </div>
            </div>
          </div>

          {/* Logo Showcase */}
          <div className="text-center">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Logo Variations
            </h3>
            <div className="grid items-center gap-8 md:grid-cols-3">
              {/* Primary Logo */}
              <div className="card-brand p-8 text-center">
                <div className="mb-4 flex h-20 items-center justify-center">
                  <svg viewBox="0 0 300 80" className="h-full">
                    <defs>
                      <linearGradient
                        id="primaryGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="50%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(10,15)">
                      <path
                        d="M20 5C25 5 30 8 32 15C35 12 40 12 42 18C44 16 48 18 48 25C48 30 45 35 40 35C38 38 35 40 30 40C25 40 20 38 18 35C15 35 12 32 12 28C10 30 5 28 5 22C5 18 8 15 12 15C12 10 15 5 20 5Z"
                        fill="url(#primaryGradient)"
                      />
                    </g>
                    <text
                      x="70"
                      y="35"
                      fontFamily="Space Grotesk"
                      fontWeight="600"
                      fontSize="18"
                      fill="url(#primaryGradient)"
                    >
                      Summer
                    </text>
                    <text
                      x="70"
                      y="55"
                      fontFamily="Space Grotesk"
                      fontWeight="700"
                      fontSize="22"
                      fill="url(#primaryGradient)"
                    >
                      Brain Rot
                    </text>
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Primary Logo
                </div>
                <div className="text-xs text-gray-500">
                  Full brand with tagline
                </div>
              </div>

              {/* Icon Only */}
              <div className="card-brand p-8 text-center">
                <div className="mb-4 flex h-20 items-center justify-center">
                  <div className="bg-brain-rot-gradient flex h-16 w-16 items-center justify-center rounded-xl">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Icon Mark
                </div>
                <div className="text-xs text-gray-500">
                  Square format for apps
                </div>
              </div>

              {/* Wordmark */}
              <div className="card-brand p-8 text-center">
                <div className="mb-4 flex h-20 items-center justify-center">
                  <div className="text-gradient-primary font-display text-2xl font-bold">
                    Summer Brain Rot
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Wordmark
                </div>
                <div className="text-xs text-gray-500">Text-only version</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
