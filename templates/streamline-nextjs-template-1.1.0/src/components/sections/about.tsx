import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { Button } from '../ui/button';

const About = () => {
  return (
    <section className="bg-mint-50 py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl lg:translate-x-24">
          <h2 className="text-muted-foreground mb-4 text-2xl font-semibold md:text-3xl">
            About Us
          </h2>

          <h1 className="max-w-[600px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            We&apos;re Streamline. We&apos;re a different kind of planning tool
            that enables builders to create the future now.
          </h1>
        </div>

        {/* Large Image Below */}
        <div className="relative mt-12 flex items-start gap-4">
          <div className="max-lg:-translate-x-20">
            <Image
              src="/images/about/1.webp"
              alt="Modern workspace with an iMac displaying 'DO MORE'"
              width={770}
              height={444}
              className="aspect-video object-cover"
            />
          </div>
          {/* Right Column - Image */}
          <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
            <Image
              src="/images/about/2.webp"
              alt="Person working on a laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Below Image */}
        <div className="mt-28 max-w-xl lg:mt-10 lg:translate-x-24">
          <p className="text-lg leading-6">
            Tasks have changed, are changing, and will continue to change — for
            the better. Now is the time for productivity to be user-first and
            internet-first. But in order to do this — it needs a new foundation.
          </p>
        </div>

        <div className="mt-6 space-y-6 md:mt-8 md:space-y-8 lg:mt-10 lg:space-y-10">
          {/* Dynamic System Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24">
            We were always told that to-do apps can&apos;t be dynamic systems.
          </h2>
          <p className="max-w-xl text-lg lg:translate-x-24">
            Everyone tried fixing the problem by adding features, integrations,
            and layers of complexity. We have spent our careers using,
            designing, and rethinking tools like Trello, Notion, and Asana,
            encountering this problem firsthand. The existing solutions
            don&apos;t work. We believe a to-do app needs to be a dynamic
            system. But we had to start from ground zero.
          </p>
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:py-10">
            <Image
              src="/images/about/3.webp"
              alt="Team members collaborating"
              width={600}
              height={400}
            />
            <Image
              src="/images/about/4.webp"
              alt="Team meeting in a conference room"
              width={600}
              height={400}
            />
          </div>

          {/* Timeline Section */}
          <p className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24">
            We started building Streamline in 2019 and launched in 2022. Every
            single feature has been built from scratch — with no unnecessary
            complexity or outdated tools. We are purpose-built to redefine
            productivity for the next hundred years.
          </p>

          {/* Team Section */}
          <h2 className="ml-auto max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:-translate-x-24">
            We are a bit of an unusual team — not your standard tech startup.
          </h2>
          <div className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24">
            <p>
              We are 100% founder and team-owned, sustainable, and we keep our
              team small. Over time, we&apos;ll make this page more polished,
              but right now we&apos;re focused on delivering for our users. If
              you&apos;d
              <br />
              like to collaborate, check out our open roles:
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 mt-6 rounded-sm border md:mt-8 lg:mt-10"
            >
              <Link href="#" className="">
                <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                  View Open roles
                  <ArrowRight className="size-4 stroke-3" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
