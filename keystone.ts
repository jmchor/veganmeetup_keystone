import { config } from '@keystone-6/core';
import { lists } from './schema';
import { session, withAuth } from './auth';

export default config(
	withAuth({
		server: {
			cors: {
				origin: ['http://localhost:5173'],
				credentials: true,
			},
		},
		db: {
			provider: 'postgresql',
			url: 'postgresql://me:password@localhost:5432/veganmeetup_dev',
		},
		lists,
		session,
	})
);
