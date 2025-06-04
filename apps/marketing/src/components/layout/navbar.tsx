'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Brain, Users, BookOpen, HelpCircle, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

// Summer Brain Rot Logo Component
const BrandLogo = ({ className = "", showText = true }: { className?: string; showText?: boolean }) => (
  <Link href="/" className={cn("flex items-center gap-3 group", className)}>
    {/* Brain Icon */}
    <div className="relative">
      <div className="w-8 h-8 bg-brain-rot-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        <Brain className="w-5 h-5 text-white" />
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-brain-rot-gradient rounded-lg blur-md opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-200" />
    </div>
    
    {/* Brand text */}
    {showText && (
      <div className="hidden sm:block">
        <div className="text-gradient-primary font-display font-bold text-lg leading-tight">
          Summer Brain Rot
        </div>
        <div className="text-xs text-gray-500 font-medium -mt-1">
          Strategic Learning Lab
        </div>
      </div>
    )}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu overflow
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const NAVIGATION_ITEMS = [
    {
      label: 'Program',
      href: '#program',
      icon: BookOpen,
      dropdownItems: [
        {
          title: 'Curriculum',
          href: '/curriculum',
          description: 'Comprehensive learning path from basics to business launch',
          icon: BookOpen,
        },
        {
          title: 'Mentorship',
          href: '/mentorship',
          description: 'Work directly with industry professionals and successful entrepreneurs',
          icon: Users,
        },
        {
          title: 'Projects',
          href: '/projects',
          description: 'Real-world applications and portfolio-building opportunities',
          icon: Brain,
        },
      ],
    },
    { 
      label: 'About', 
      href: '/about',
      icon: Users,
    },
    { 
      label: 'Success Stories', 
      href: '/success-stories',
      icon: Brain,
    },
    { 
      label: 'FAQ', 
      href: '/faq',
      icon: HelpCircle,
    },
    { 
      label: 'Contact', 
      href: '/contact',
      icon: Mail,
    },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center gap-2">
              {NAVIGATION_ITEMS.map((item) =>
                item.dropdownItems ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-brain-rot-purple-50 text-gray-700 hover:text-brain-rot-purple-700 font-medium px-4 py-2 rounded-lg transition-colors">
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[420px] p-4">
                        <div className="grid gap-3">
                          {item.dropdownItems.map((dropdownItem) => (
                            <NavigationMenuLink key={dropdownItem.title} asChild>
                              <Link
                                href={dropdownItem.href}
                                className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700"
                              >
                                <div className="w-8 h-8 bg-brain-rot-purple-100 rounded-lg flex items-center justify-center group-hover:bg-brain-rot-purple-200 transition-colors">
                                  <dropdownItem.icon className="w-4 h-4 text-brain-rot-purple-600" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-sm mb-1">
                                    {dropdownItem.title}
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
                        pathname === item.href
                          ? 'bg-brain-rot-purple-100 text-brain-rot-purple-700'
                          : 'text-gray-700 hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700'
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Portal Link for existing participants */}
            <Link 
              href="https://portal.summerbrainrot.camp" 
              className="hidden lg:block text-sm text-brain-rot-purple-600 hover:text-brain-rot-purple-700 font-medium transition-colors"
            >
              Participant Portal →
            </Link>
            
            {/* Apply Button */}
            <Link href="/apply">
              <Button 
                className="btn-brand-primary hidden sm:flex"
                size="sm"
              >
                Apply Now
              </Button>
            </Link>

            {/* Theme Toggle */}
            <div className={cn(
              'transition-opacity duration-300',
              isMenuOpen ? 'max-lg:pointer-events-none max-lg:opacity-0' : 'opacity-100'
            )}>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative flex items-center justify-center w-8 h-8 text-gray-600 hover:text-brain-rot-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={cn(
                    'absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out',
                    isMenuOpen ? 'rotate-45 top-2' : 'top-1'
                  )}
                />
                <span
                  className={cn(
                    'absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out top-2',
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <span
                  className={cn(
                    'absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out',
                    isMenuOpen ? '-rotate-45 top-2' : 'top-3'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300 ease-in-out',
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        )}
      >
        <div className="container mx-auto py-6">
          
          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 mb-6">
            <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
              <Button className="btn-brand-primary w-full">
                Apply Now
              </Button>
            </Link>
            <Link 
              href="https://portal.summerbrainrot.camp" 
              className="text-center text-sm text-brain-rot-purple-600 hover:text-brain-rot-purple-700 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Participant Portal →
            </Link>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {NAVIGATION_ITEMS.map((item) =>
              item.dropdownItems ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full p-3 text-left text-gray-700 hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight
                      className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === item.label ? 'rotate-90' : ''
                      )}
                    />
                  </button>
                  
                  <div
                    className={cn(
                      'ml-8 space-y-1 overflow-hidden transition-all duration-300',
                      openDropdown === item.label
                        ? 'mt-2 max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    )}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="flex items-start gap-3 p-3 text-gray-600 hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 rounded-lg transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        <dropdownItem.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm">{dropdownItem.title}</div>
                          <p className="text-xs mt-1 leading-relaxed">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-lg font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-brain-rot-purple-100 text-brain-rot-purple-700'
                      : 'text-gray-700 hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
