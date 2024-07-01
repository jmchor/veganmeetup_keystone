import { cloudinaryImage } from '@keystone-6/cloudinary';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { calendarDay, checkbox, relationship, text, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export const Event = list({
	access: allowAll,

	fields: {
		title: text({ validation: { isRequired: true }, label: 'Event title' }),
		headerImage: relationship({
			ref: 'Image',
			many: false,
			ui: {
				displayMode: 'cards',
				cardFields: ['alt', 'image'],
				inlineEdit: { fields: ['alt', 'image'] },
				inlineCreate: { fields: ['alt', 'image'] },
				linkToItem: true,
				inlineConnect: true,
			},
		}),
		date: calendarDay({ label: 'Date' }),
		from: text({ label: 'From', ui: { itemView: { fieldMode: 'edit' } } }),
		until: text({ label: 'Until', ui: { itemView: { fieldMode: 'edit' } } }),
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
