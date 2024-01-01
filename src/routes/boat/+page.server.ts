import { Actions } from './../../../.svelte-kit/types/src/routes/boat/$types.d';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ cookies }) => {
  const boatName = cookies.get('boatName', { path: '/boat' });

  return {
    boatName
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  rename: async ({ request, cookies }) => {
    const formData = await request.formData();
    const boatName = formData.get('boatName') as string;

    cookies.set('boatName', boatName, { path: '/boat' });
  },
  capitalize: async ({ request, cookies }) => {
    const formData = await request.formData();
    const boatName = formData.get('boatName') as string;

    cookies.set('boatName', boatName.toUpperCase(), { path: '/boat' });
  }
};
