'use client';

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  ChevronRight,
  Brain,
  Users,
  BookOpen,
  HelpCircle,
  Mail,
} from 'lucide-react';

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
const BrandLogo = ({
  className = '',
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) => (
  <Link href="/" className={cn('group flex items-center gap-3', className)}>
    {/* Brain Icon */}
    <div className="relative">
      <div className="bg-brain-rot-gradient flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110">
        <Brain className="h-5 w-5 text-white" />
      </div>
      {/* Subtle glow effect */}
      <div className="bg-brain-rot-gradient absolute inset-0 -z-10 rounded-lg opacity-20 blur-md transition-opacity duration-200 group-hover:opacity-40" />
    </div>

    {/* Brand text */}
    {showText && (
      <div className="hidden sm:block">
        <div className="text-gradient-primary font-display text-lg leading-tight font-bold">
          Summer Brain Rot
        </div>
        <div className="-mt-1 text-xs font-medium text-gray-500">
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
          description:
            'Comprehensive learning path from basics to business launch',
          icon: BookOpen,
        },
        {
          title: 'Mentorship',
          href: '/mentorship',
          description:
            'Work directly with industry professionals and successful entrepreneurs',
          icon: Users,
        },
        {
          title: 'Projects',
          href: '/projects',
          description:
            'Real-world applications and portfolio-building opportunities',
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
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-gray-200/50 bg-white/95 shadow-sm backdrop-blur-lg'
          : 'bg-transparent',
      )}
    >
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
                    <NavigationMenuTrigger className="hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 rounded-lg bg-transparent px-4 py-2 font-medium text-gray-700 transition-colors">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[420px] p-4">
                        <div className="grid gap-3">
                          {item.dropdownItems.map((dropdownItem) => (
                            <NavigationMenuLink
                              key={dropdownItem.title}
                              asChild
                            >
                              <Link
                                href={dropdownItem.href}
                                className="group hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 flex items-start gap-3 rounded-lg p-3 transition-colors"
                              >
                                <div className="bg-brain-rot-purple-100 group-hover:bg-brain-rot-purple-200 flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                                  <dropdownItem.icon className="text-brain-rot-purple-600 h-4 w-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="mb-1 text-sm font-semibold">
                                    {dropdownItem.title}
                                  </div>
                                  <p className="text-xs leading-relaxed text-gray-600">
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
                        'flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors',
                        pathname === item.href
                          ? 'bg-brain-rot-purple-100 text-brain-rot-purple-700'
                          : 'hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 text-gray-700',
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Portal Link for existing participants */}
            <Link
              href="https://portal.summerbrainrot.camp"
              className="text-brain-rot-purple-600 hover:text-brain-rot-purple-700 hidden text-sm font-medium transition-colors lg:block"
            >
              Participant Portal →
            </Link>

            {/* Apply Button */}
            <Link href="/apply">
              <Button className="btn-brand-primary hidden sm:flex" size="sm">
                Apply Now
              </Button>
            </Link>

            {/* Theme Toggle */}
            <div
              className={cn(
                'transition-opacity duration-300',
                isMenuOpen
                  ? 'max-lg:pointer-events-none max-lg:opacity-0'
                  : 'opacity-100',
              )}
            >
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="hover:text-brain-rot-purple-600 relative flex h-8 w-8 items-center justify-center text-gray-600 transition-colors lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-5">
                <span
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out',
                    isMenuOpen ? 'top-2 rotate-45' : 'top-1',
                  )}
                />
                <span
                  className={cn(
                    'absolute top-2 block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out',
                    isMenuOpen ? 'opacity-0' : 'opacity-100',
                  )}
                />
                <span
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out',
                    isMenuOpen ? 'top-2 -rotate-45' : 'top-3',
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
          'absolute top-full right-0 left-0 border-b border-gray-200/50 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-4 opacity-0',
        )}
      >
        <div className="container mx-auto py-6">
          {/* Mobile CTA */}
          <div className="mb-6 flex flex-col gap-3">
            <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
              <Button className="btn-brand-primary w-full">Apply Now</Button>
            </Link>
            <Link
              href="https://portal.summerbrainrot.camp"
              className="text-brain-rot-purple-600 hover:text-brain-rot-purple-700 text-center text-sm font-medium transition-colors"
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
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                    className="hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 flex w-full items-center justify-between rounded-lg p-3 text-left text-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openDropdown === item.label ? 'rotate-90' : '',
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      'ml-8 space-y-1 overflow-hidden transition-all duration-300',
                      openDropdown === item.label
                        ? 'mt-2 max-h-96 opacity-100'
                        : 'max-h-0 opacity-0',
                    )}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 flex items-start gap-3 rounded-lg p-3 text-gray-600 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        <dropdownItem.icon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium">
                            {dropdownItem.title}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed">
                            {dropdownItem.description}
                          </p>
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
                    'flex items-center gap-3 rounded-lg p-3 font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-brain-rot-purple-100 text-brain-rot-purple-700'
                      : 'hover:bg-brain-rot-purple-50 hover:text-brain-rot-purple-700 text-gray-700',
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
