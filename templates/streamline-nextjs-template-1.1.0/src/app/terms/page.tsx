'use client';

import Privacy from './terms.mdx';

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-28 lg:py-32">
      <article className="prose prose-lg dark:prose-invert">
        <Privacy />
      </article>
    </section>
  );
};

export default Page;
