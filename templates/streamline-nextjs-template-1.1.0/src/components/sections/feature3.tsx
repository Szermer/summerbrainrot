import Image from 'next/image';

import { CircleDot, Diamond, Blend, ChartNoAxesColumn } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    title: 'Tailored workflows',
    description: 'Track progress across custom issue flows for your team.',
    content: {
      title: 'Issue tracking with more noise.',
      description: `Simple, robust, and blazingly fast. Mainline is designed with developer ergonomics in mind. It's the first issue tracker your team will actually enjoy using.`,
      image: '/images/homepage/features-tabs/1.webp',
      className: 'md:[&_img]:translate-x-20 [&_img]:translate-x-5 ',
    },
    icon: CircleDot,
  },
  {
    title: 'Cross-team projects',
    description: 'Collaborate across teams and departments.',
    content: {
      title: 'Issue tracking with more noise.',
      description:
        'Simple, robust, and blazingly fast. Mainline is designed with developer ergonomics in mind. It’s the first issue tracker your team will actually enjoy using.',
      image: '/images/homepage/features-tabs/2.webp',
    },
    icon: Blend,
  },
  {
    title: 'Milestones',
    description: 'Break projects down into concrete phases.',
    content: {
      title: 'Issue tracking with more noise.',
      description:
        'Simple, robust, and blazingly fast. Mainline is designed with developer ergonomics in mind. It’s the first issue tracker your team will actually enjoy using.',
      image: '/images/homepage/features-tabs/3.webp',
    },
    icon: Diamond,
  },
  {
    title: 'Progress insights',
    description: 'Track scope, velocity, and progress over time.',
    content: {
      title: 'Issue tracking with more noise.',
      description:
        'Simple, robust, and blazingly fast. Mainline is designed with developer ergonomics in mind. It’s the first issue tracker your team will actually enjoy using.',
      image: '/images/homepage/features-tabs/4.webp',
    },
    icon: ChartNoAxesColumn,
  },
];

export const Feature3 = () => {
  return (
    <section id="feature3" className="bg-mint-50 py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Streamline your resource allocation and execution
          </h2>
          <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
            Streamline is built on the habits that make the best product teams
            successful: staying focused, moving quickly, and always aiming for
            high-quality work.
          </p>
        </div>

        <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 flex gap-4 max-lg:flex-col-reverse md:mt-12 lg:mt-20"
        >
          <TabsList className="flex h-auto justify-start overflow-x-auto rounded-xl bg-black/[0.03] p-1.5 lg:basis-1/4 lg:flex-col">
            {FEATURES.map((feature) => (
              <TabsTrigger
                key={feature.title}
                value={feature.title}
                className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
              >
                <div>
                  <feature.icon className="size-7 md:size-8 lg:size-9" />
                  <h3 className="mt-3 font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {feature.description}
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {FEATURES.map((feature) => (
            <TabsContent
              className={cn(
                'bg-background m-0 flex-1 overflow-hidden rounded-xl',
                feature.content.className,
              )}
              key={feature.title}
              value={feature.title}
            >
              <div className="max-w-2xl p-5 text-lg text-balance lg:p-7">
                <h4 className="inline font-semibold">
                  {feature.content.title}{' '}
                </h4>
                <span className="text-muted-foreground mt-2 font-medium text-pretty">
                  {feature.content.description}
                </span>
              </div>
              <div className="relative h-[420px] rounded-lg lg:h-[500px] lg:flex-1">
                <Image
                  src={feature.content.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-left-top"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
