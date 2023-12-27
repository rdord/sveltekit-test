import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const POST: RequestHandler = async () => {
  let user = { admin: true };

  if (!user.admin) {
    error(401, 'Unauthorized');
  }

  return json({ message: 'Hello, world!' });
};
