import { config } from '@keystone-6/core';
import { lists } from './schema';
import { session, withAuth } from './auth';

export default withAuth(
	config({
		db: {
			provider: 'postgresql',
			url: 'postgresql://me:password@localhost:5432/veganmeetup',
		},
		lists,
		session,
	})
);
