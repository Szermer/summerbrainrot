'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';

import { cn } from '@/lib/utils';

type Category = 'Support' | 'Account' | 'Features' | 'Security' | 'Other';

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

const faqItems: FAQItem[] = [
  // Support Questions
  {
    category: 'Support',
    question: 'Is there a free version?',
    answer:
      'Yes! We offer a generous free plan with just enough features except that one feature you really want! Our strategy is to get your credit card details on file then steadily double our prices against inflation rates.',
  },
  {
    category: 'Support',
    question: 'Is support free, or do I need to Perplexity everything?',
    answer:
      'We pride ourselves on our comprehensive support system. Our chatbot will happily redirect you to our documentation, which will then redirect you back to the chatbot.',
  },
  {
    category: 'Support',
    question: 'What if I need immediate assistance?',
    answer:
      'Our AI support team will get back to you in approximately 3-5 business years.',
  },
  // Account Questions
  {
    category: 'Account',
    question: 'How do I update my account without breaking my laptop?',
    answer:
      'Our platform is designed to be extremely user-friendly. Just follow our simple 47-step process, and you should be fine!',
  },
  {
    category: 'Account',
    question: 'How do I update my account without breaking the universe?',
    answer: 'Just be very careful not to press any buttons too hard.',
  },
  {
    category: 'Account',
    question: 'What happens if I forget my password?',
    answer: "You'll need to solve three riddles and defeat a dragon.",
  },
  // Features Questions
  {
    category: 'Features',
    question: 'Are you going to be subsumed by AI?',
    answer:
      "Probably! But until then, we'll keep pretending we're irreplaceable.",
  },
  {
    category: 'Features',
    question: 'What makes your platform unique?',
    answer:
      'We use at least 7 different types of AI, and none of them work together!',
  },
  {
    category: 'Features',
    question: 'Do you support integration with other tools?',
    answer: 'We integrate with everything except the tools you actually use.',
  },
  // Security Questions
  {
    category: 'Security',
    question: 'How secure is my data?',
    answer:
      'We use military-grade encryption, but our password is "password123".',
  },
  {
    category: 'Security',
    question: 'What happens in case of a data breach?',
    answer:
      "We'll send you a very apologetic email with a $5 gift card to your local coffee shop.",
  },
  {
    category: 'Security',
    question: 'Do you have a backup system?',
    answer:
      'Yes, we back up everything to a USB stick that we keep in a very safe place... somewhere.',
  },
  // Other Questions
  {
    category: 'Other',
    question: 'Why is your pricing so complicated?',
    answer:
      "Because simple pricing would make it too easy for you to understand what you're paying for.",
  },
  {
    category: 'Other',
    question: 'Do you offer refunds?',
    answer:
      "Yes, but only if you can prove you're from an alternate dimension.",
  },
  {
    category: 'Other',
    question: "What's your roadmap look like?",
    answer: "It's more of a road-squiggle, really. We're agile!",
  },
];

const categories: Category[] = [
  'Support',
  'Account',
  'Features',
  'Security',
  'Other',
];

const TOP_PADDING = 300;

export const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Support');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);
  const categoryRefs = useRef<Record<Category, HTMLDivElement | null>>({
    Support: null,
    Account: null,
    Features: null,
    Security: null,
    Other: null,
  });

  const setupObserver = useCallback(() => {
    observerRef.current?.disconnect();

    let debounceTimeout: NodeJS.Timeout;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Skip if we're programmatically scrolling
        if (isScrollingRef.current) return;

        // Clear any pending timeout
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }

        // Debounce the category update
        debounceTimeout = setTimeout(() => {
          const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting,
          );

          // Find the entry that's closest to being 100px from the top
          const entry = intersectingEntries.reduce(
            (closest, current) => {
              const rect = current.boundingClientRect;
              const distanceFromThreshold = Math.abs(rect.top - TOP_PADDING);
              const closestDistance = closest
                ? Math.abs(closest.boundingClientRect.top - TOP_PADDING)
                : Infinity;

              return distanceFromThreshold < closestDistance
                ? current
                : closest;
            },
            null as IntersectionObserverEntry | null,
          );

          if (entry) {
            const category = entry.target.getAttribute(
              'data-category',
            ) as Category;
            if (category) {
              setActiveCategory(category);
            }
          }
        }, 150);
      },
      {
        root: null,
        rootMargin: `-${TOP_PADDING}px 0px -100% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    Object.entries(categoryRefs.current).forEach(([category, element]) => {
      if (element) {
        element.setAttribute('data-category', category);
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = setupObserver();
    return () => {
      cleanup();
      observerRef.current?.disconnect();
    };
  }, [setupObserver]);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    isScrollingRef.current = true;

    const element = document.getElementById(`faq-${category.toLowerCase()}`);
    if (element) {
      element.style.scrollMargin = `${TOP_PADDING}px`;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <section className="bg-sand-100 min-h-screen py-16 md:py-28 lg:py-32">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            We've got answers
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-center text-balance">
            This really should be an LLM but we're waiting for RAG to truly
            reach commodity stage before we touch it.
          </p>
        </div>

        <div className="mt-8 grid max-w-5xl gap-8 md:mt-12 md:grid-cols-[200px_1fr] md:gap-12 lg:mt-16">
          {/* Sidebar */}
          <div className="sticky top-24 flex h-fit flex-col gap-4 max-md:hidden">
            {categories.map((category) => (
              <Button
                variant="ghost"
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`justify-start text-left text-xl transition-colors ${
                  activeCategory === category
                    ? 'font-semibold'
                    : 'font-normal hover:opacity-75'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items by Category */}
          <div className="space-y-6">
            {categories.map((category) => {
              const categoryItems = faqItems.filter(
                (item) => item.category === category,
              );

              return (
                <div
                  key={category}
                  id={`faq-${category.toLowerCase()}`}
                  ref={(el) => {
                    categoryRefs.current[category] = el;
                  }}
                  className={cn(
                    `rounded-xl`,
                    activeCategory === category
                      ? 'bg-background'
                      : 'bg-background/40',
                    'px-6',
                  )}
                  style={{
                    scrollMargin: `${TOP_PADDING}px`,
                  }}
                >
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={`${categories[0]}-0`}
                    className="w-full"
                  >
                    {categoryItems.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`${category}-${i}`}
                        className="border-muted border-b last:border-0"
                      >
                        <AccordionTrigger className="text-base font-medium hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base font-medium">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
