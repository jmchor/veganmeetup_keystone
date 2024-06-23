import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { calendarDay, checkbox, text, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export const Event = list({
	access: allowAll,

	fields: {
		title: text({ validation: { isRequired: true }, label: 'Event title' }),
		date: calendarDay({ label: 'Date' }),
		pastEvent: checkbox({ label: 'Is this a past event?' }),
		location: text({ label: 'Location', ui: { itemView: { fieldMode: 'edit' } } }),
		content: document({
			formatting: true,
			layouts: [
				[1, 1],
				[1, 1, 1],
				[2, 1],
				[1, 2],
				[1, 2, 1],
			],
			links: true,
			dividers: true,
		}),
		timestamp: timestamp({ defaultValue: { kind: 'now' } }),
	},

	ui: {
		listView: {
			initialColumns: ['title', 'date', 'pastEvent'],
		},
	},
});
