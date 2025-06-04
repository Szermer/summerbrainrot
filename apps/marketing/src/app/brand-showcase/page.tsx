import React from 'react';
import { Brain, Code, Users, TrendingUp, Zap, Star, Palette, Type, Layout } from 'lucide-react';
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
  { name: 'Hero Text', class: 'text-brand-hero text-gradient-hero', text: 'Summer Brain Rot' },
  { name: 'Subtitle', class: 'text-brand-subtitle text-gradient-primary', text: 'Strategic Learning Laboratory' },
  { name: 'Tagline', class: 'text-brand-tagline text-gray-600', text: 'Where digital obsessions become professional advantages' },
  { name: 'Body Text', class: 'text-body-lg text-gray-700', text: 'This is body text that provides detailed information in a readable format.' },
];

const componentExamples = [
  { name: 'Primary Button', component: 'btn-brand-primary', text: 'Apply Now' },
  { name: 'Secondary Button', component: 'btn-brand-secondary', text: 'Learn More' },
  { name: 'Outline Button', component: 'btn-brand-outline', text: 'Get Started' },
];

export default function BrandShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <Hero />
      
      {/* Program Showcase */}
      <ProgramShowcase />
      
      {/* Brand Elements Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brain-rot-purple-100 text-brain-rot-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4" />
              Brand Showcase
            </div>
            <h2 className="text-brand-subtitle text-gray-900 mb-4">
              Summer Brain Rot Design System
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive brand identity that transforms the concept of "brain rot" 
              into a professional, engaging, and educational experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            
            {/* Colors */}
            <div className="card-brand">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brain-rot-gradient rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Color Palette</h3>
              </div>
              
              <div className="space-y-4">
                {colorExamples.map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 ${color.class} rounded-lg shadow-sm`}></div>
                    <div>
                      <div className="font-medium text-gray-900">{color.name}</div>
                      <div className="text-sm text-gray-500 font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-900 mb-3">Gradient Examples:</div>
                <div className="space-y-2">
                  <div className="h-4 bg-brain-rot-gradient rounded-full"></div>
                  <div className="h-4 bg-gradient-to-r from-brain-rot-cyan-500 to-brain-rot-purple-500 rounded-full"></div>
                  <div className="h-4 bg-gradient-to-r from-brain-rot-accent-500 to-brain-rot-cyan-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="card-brand">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brain-rot-gradient rounded-lg flex items-center justify-center">
                  <Type className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Typography</h3>
              </div>
              
              <div className="space-y-6">
                {typographyExamples.map((example) => (
                  <div key={example.name}>
                    <div className="text-sm font-medium text-gray-500 mb-2">{example.name}</div>
                    <div className={example.class}>{example.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-900 mb-3">Font Stack:</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div><span className="font-display font-bold">Space Grotesk</span> - Display & Headings</div>
                  <div><span className="font-sans font-medium">Inter</span> - Body & Interface</div>
                  <div><span className="font-mono font-medium">JetBrains Mono</span> - Code & Data</div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="card-brand">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brain-rot-gradient rounded-lg flex items-center justify-center">
                  <Layout className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Components</h3>
              </div>
              
              <div className="space-y-4">
                {componentExamples.map((example) => (
                  <div key={example.name}>
                    <div className="text-sm font-medium text-gray-500 mb-2">{example.name}</div>
                    <button className={example.component}>
                      {example.text}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-900 mb-3">Interactive States:</div>
                <div className="space-y-2">
                  <button className="btn-brand-primary opacity-50 cursor-not-allowed">
                    Disabled State
                  </button>
                  <button className="btn-brand-outline hover:scale-105 transition-transform">
                    Hover Effect
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Showcase */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Card Variations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="card-brand card-brand-hover">
                <div className="w-10 h-10 bg-brain-rot-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5 text-brain-rot-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Default Card</h4>
                <p className="text-gray-600 text-sm">Clean, minimal design with subtle hover effects and excellent readability.</p>
              </div>

              <div className="card-brand-gradient card-brand-hover">
                <div className="w-10 h-10 bg-white/60 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-brain-rot-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Gradient Card</h4>
                <p className="text-gray-600 text-sm">Subtle mesh background that adds visual interest without overwhelming content.</p>
              </div>

              <div className="card-brand-glow card-brand-hover">
                <div className="w-10 h-10 bg-brain-rot-gradient rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Glow Card</h4>
                <p className="text-gray-600 text-sm">Elevated design with brand-colored shadows for special content and CTAs.</p>
              </div>
            </div>
          </div>

          {/* Logo Showcase */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Logo Variations</h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Primary Logo */}
              <div className="card-brand text-center p-8">
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 300 80" className="h-full">
                    <defs>
                      <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6"/>
                        <stop offset="50%" stopColor="#EC4899"/>
                        <stop offset="100%" stopColor="#06B6D4"/>
                      </linearGradient>
                    </defs>
                    <g transform="translate(10,15)">
                      <path d="M20 5C25 5 30 8 32 15C35 12 40 12 42 18C44 16 48 18 48 25C48 30 45 35 40 35C38 38 35 40 30 40C25 40 20 38 18 35C15 35 12 32 12 28C10 30 5 28 5 22C5 18 8 15 12 15C12 10 15 5 20 5Z" fill="url(#primaryGradient)"/>
                    </g>
                    <text x="70" y="35" fontFamily="Space Grotesk" fontWeight="600" fontSize="18" fill="url(#primaryGradient)">Summer</text>
                    <text x="70" y="55" fontFamily="Space Grotesk" fontWeight="700" fontSize="22" fill="url(#primaryGradient)">Brain Rot</text>
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-900">Primary Logo</div>
                <div className="text-xs text-gray-500">Full brand with tagline</div>
              </div>

              {/* Icon Only */}
              <div className="card-brand text-center p-8">
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-brain-rot-gradient rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">Icon Mark</div>
                <div className="text-xs text-gray-500">Square format for apps</div>
              </div>

              {/* Wordmark */}
              <div className="card-brand text-center p-8">
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="text-gradient-primary font-display font-bold text-2xl">
                    Summer Brain Rot
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">Wordmark</div>
                <div className="text-xs text-gray-500">Text-only version</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
