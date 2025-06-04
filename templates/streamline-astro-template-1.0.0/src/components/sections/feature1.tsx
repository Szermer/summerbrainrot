import { Bug, Bell, Sparkles } from 'lucide-react';

export const Feature1 = () => {
  const ITEMS = [
    {
      value: '100%',
      label: 'More bugs',
      icon: Bug,
    },
    {
      value: '121%',
      label: 'More notifications',
      icon: Bell,
    },
    {
      value: '2x',
      label: 'More chaotic',
      icon: Sparkles,
    },
  ];

  return (
    <section id="feature1" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Tailor made for post-modern product teams
          </h2>
          <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
            Streamline is built on the habits that make the best product teams
            successful: staying focused, moving quickly, and always aiming for
            high-quality work.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {ITEMS.map((metric, i) => (
            <div
              key={i}
              className="from-muted to-mint relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-linear-to-b md:[aspect-ratio:3.8/4]"
            >
              <div className="p-8 pb-2">
                <metric.icon className="fill-primary size-10" />
              </div>
              <div className="p-6">
                <div className="text-6xl font-semibold tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold tracking-tight">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground mt-6 text-end text-sm">
          *average increase in comparison to Jira
        </div>
      </div>
    </section>
  );
};
