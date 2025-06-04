'use client';

import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  {
    name: 'Mercury',
    src: '/images/logos/mercury.svg',
    width: 143,
    height: 26,
    href: 'https://mercury.com',
  },
  {
    name: 'Watershed',
    src: '/images/logos/watershed.svg',
    width: 154,
    height: 31,
    href: 'https://watershed.com',
  },
  {
    name: 'Retool',
    src: '/images/logos/retool.svg',
    width: 113,
    height: 22,
    href: 'https://retool.com',
  },
  {
    name: 'Descript',
    src: '/images/logos/descript.svg',
    width: 112,
    height: 27,
    href: 'https://descript.com',
  },
  {
    name: 'Perplexity',
    src: '/images/logos/perplexity.svg',
    width: 141,
    height: 32,
    href: 'https://perplexity.ai',
  },
  {
    name: 'Monzo',
    src: '/images/logos/monzo.svg',
    width: 104,
    height: 18,
    href: 'https://monzo.com',
  },
  {
    name: 'Ramp',
    src: '/images/logos/ramp.svg',
    width: 105,
    height: 28,
    href: 'https://ramp.com',
  },
  {
    name: 'Raycast',
    src: '/images/logos/raycast.svg',
    width: 128,
    height: 33,
    href: 'https://raycast.com',
  },
  {
    name: 'Arc',
    src: '/images/logos/arc.svg',
    width: 90,
    height: 28,
    href: 'https://arc.com',
  },
];

export default function Logos() {
  return (
    <section className="bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container text-center">
        <h2 className="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
          Powering the world&apos;s best product teams.
          <br />
          <span className="text-muted-foreground">
            From next-gen startups to established enterprises.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          {/* First marquee group */}
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {ITEMS.map((logo, index) => (
              <Link
                href={logo.href}
                target="_blank"
                key={index}
                className="p-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </Link>
            ))}
          </div>
          {/* Second marquee group */}
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {ITEMS.map((logo, index) => (
              <Link
                href={logo.href}
                target="_blank"
                key={index}
                className="p-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
