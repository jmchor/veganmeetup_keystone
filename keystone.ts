import { config } from '@keystone-6/core';
import 'dotenv/config';
import { session, withAuth } from './auth';
import { lists } from './schema';

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

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
			url: `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`,
		},
		lists,
		session,
	})
);
