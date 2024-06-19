import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { calendarDay, checkbox, text, timestamp } from '@keystone-6/core/fields';

export const Event = list({
	access: allowAll,

	fields: {
		title: text({ validation: { isRequired: true }, label: 'Event title' }),
		date: calendarDay({ label: 'Date' }),
		pastEvent: checkbox({ label: 'Is this a past event?' }),
		location: text({ label: 'Location', ui: { itemView: { fieldMode: 'edit' } } }),
		content: text({
			label: 'Content',
			ui: {
				itemView: { fieldMode: 'edit' },
			},
		}),
		timestamp: timestamp({ defaultValue: { kind: 'now' } }),
	},

	ui: {
		listView: {
			initialColumns: ['title', 'date', 'pastEvent'],
		},
	},
});
