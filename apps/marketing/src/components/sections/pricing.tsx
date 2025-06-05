'use client';

import { useState } from 'react';

import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Pricing({
  headerTag = 'h2',
}: {
  headerTag?: 'h1' | 'h2';
}) {
  const [isAnnually, setIsAnnually] = useState(false);
  const HeaderTag = headerTag;

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <HeaderTag className="text-4xl font-bold text-pretty lg:text-6xl">
            Summer Brain Rot Pricing
          </HeaderTag>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="text-muted-foreground max-w-3xl lg:text-xl">
              Join the premier entrepreneurship program designed to combat the
              summer brain drain. Choose the plan that fits your ambitions.
            </p>
            <div className="bg-muted flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg">
              <RadioGroup
                defaultValue="monthly"
                className="h-full grid-cols-2"
                onValueChange={(value) => {
                  setIsAnnually(value === 'annually');
                }}
              >
                <div className='has-[button[data-state="checked"]]:bg-card h-full rounded-md transition-all'>
                  <RadioGroupItem
                    value="monthly"
                    id="monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="monthly"
                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center px-7 font-semibold"
                  >
                    Monthly
                  </Label>
                </div>
                <div className='has-[button[data-state="checked"]]:bg-card h-full rounded-md transition-all'>
                  <RadioGroupItem
                    value="annually"
                    id="annually"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="annually"
                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
                  >
                    Yearly
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">Explorer</Badge>
              <span className="text-4xl font-medium">$0</span>
              <p className="text-muted-foreground invisible">Per month</p>
              <hr className="border-border my-6" />
              <div className="flex flex-col justify-between gap-20">
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Access to learning resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Community Discord access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Weekly virtual events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Basic project templates</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">Innovator</Badge>
              {isAnnually ? (
                <>
                  <span className="text-4xl font-medium">$499</span>
                  <p className="text-muted-foreground">Per year</p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-medium">$49</span>
                  <p className="text-muted-foreground">Per month</p>
                </>
              )}
              <hr className="border-border my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Everything in Explorer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>1-on-1 mentorship sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Advanced workshops & labs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Project collaboration tools</span>
                  </li>
                </ul>
                <Button className="w-full">Purchase</Button>
              </div>
            </div>
            <div className="bg-muted flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit">Founder</Badge>
              {isAnnually ? (
                <>
                  <span className="text-4xl font-medium">$2,499</span>
                  <p className="text-muted-foreground">Per year</p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-medium">$249</span>
                  <p className="text-muted-foreground">Per month</p>
                </>
              )}
              <hr className="border-border my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Everything in Innovator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Incubator program access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Investor connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary size-4" />
                    <span>Priority support & resources</span>
                  </li>
                </ul>
                <Button className="w-full">Purchase</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
