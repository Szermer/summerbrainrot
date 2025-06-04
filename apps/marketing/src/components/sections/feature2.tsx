import Image from 'next/image';

import { Card, CardContent, CardHeader } from '../ui/card';

import { cn } from '@/lib/utils';

type FadeDirection = 'right' | 'bottom' | 'top';

type ItemType = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    className: string;
  };
  fade: FadeDirection[];
};

const ITEMS: ItemType[] = [
  {
    title: 'Reusable templates.',
    description:
      'Draft lightning-fast documents with our Smart Instructions and Templates.',
    image: {
      src: '/images/homepage/resource-allocation/cycle-37.webp',
      alt: 'Cycle 37 graph showing Scope, Started, and Completed metrics',
      className: 'lg:translate-x-20 translate-x-6 md:translate-x-10',
    },
    fade: ['right'],
  },
  {
    title: 'Simplify your stack.',
    description: 'No more Confluence, SharePoint, or Microsoft Word.',
    image: {
      src: '/images/homepage/resource-allocation/triage.webp',
      alt: 'Triage interface showing issue management options',
      className: 'lg:translate-x-20 translate-x-6 md:translate-x-10',
    },
    fade: ['right', 'bottom'],
  },
  {
    title: 'Access controls.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
    image: {
      src: '/images/homepage/resource-allocation/access-controls.webp',
      alt: 'Access controls interface showing People, Compliance, and Security options',
      className: 'translate-x-6 md:translate-x-10 pb-6 object-left-bottom',
    },
    fade: ['right', 'top'],
  },
  {
    title: 'Task chat.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    image: {
      src: '/images/homepage/resource-allocation/task-chat.webp',
      alt: 'Task chat interface showing a conversation',
      className: 'px-6 mt-4 object-contain',
    },
    fade: [],
  },
  {
    title: 'Cycle analysis.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    image: {
      src: '/images/homepage/resource-allocation/cycle-analysis.webp',
      alt: 'Cycle analysis showing backlog priorities and statistics',
      className: 'pb-6 object-center object-contain',
    },
    fade: [],
  },
];

export const Feature2 = () => {
  return (
    <section id="feature2" className="bg-muted py-16 md:py-28 lg:py-32">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Streamline your resource allocation and execution
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-6 md:grid-rows-5 lg:mt-20">
          {ITEMS.map((item, i) => {
            const gridClasses = {
              0: 'md:col-span-3 md:row-span-3',
              1: 'md:col-span-3 md:row-span-3 md:col-start-4',
              2: 'md:col-span-2 md:row-span-2 md:row-start-4',
              3: 'md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4',
              4: 'md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4',
            }[i];
            return <Item key={i} {...item} className={gridClasses} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Item = ({
  title,
  description,
  image,
  fade = [],
  className,
}: ItemType & { className?: string }) => {
  return (
    <Card
      className={cn(
        'relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px]',
        className,
      )}
    >
      <CardHeader className="mb-2">
        <h3 className="inline leading-tight font-semibold text-balance">
          {title}{' '}
          <span className="text-muted-foreground font-medium">
            {description}
          </span>
        </h3>
      </CardHeader>

      <CardContent className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
        {fade.includes('right') && (
          <div className="to-background absolute inset-0 z-10 bg-linear-to-r from-transparent via-transparent" />
        )}
        {fade.includes('bottom') && (
          <div className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent" />
        )}
        {fade.includes('top') && (
          <div className="to-background absolute inset-0 z-10 bg-linear-to-t from-transparent via-transparent" />
        )}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={cn('object-cover object-left-top', image.className)}
        />
      </CardContent>
    </Card>
  );
};
