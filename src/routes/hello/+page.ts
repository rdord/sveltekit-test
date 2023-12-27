import type { PageLoad } from './$types';

export const load = (async () => {
  return {
    greeting: 'Hello',
    name: 'Guest'
  };
}) satisfies PageLoad;
