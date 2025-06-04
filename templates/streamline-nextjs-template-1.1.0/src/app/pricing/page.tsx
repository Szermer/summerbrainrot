import React from 'react';

import { FAQ } from '@/components/sections/faq';
import Pricing from '@/components/sections/pricing';
import Pricing2 from '@/components/sections/pricing2';

const page = () => {
  return (
    <>
      <Pricing headerTag="h1" />
      <Pricing2 />
      <FAQ />
    </>
  );
};

export default page;
