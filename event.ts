import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { calendarDay, checkbox, text, timestamp } from '@keystone-6/core/fields';

export const Event = list({
	access: allowAll,

	fields: {
		title: text({ validation: { isRequired: true }, label: 'Event title' }),
		date: calendarDay({ label: 'Date' }),
		pastEvent: checkbox({ label: 'Is this a past event?' }),
		location: text({ label: 'Location', ui: { itemView: { fieldMode: 'read' } } }),
		content: text({
			label: 'Content',
			ui: {
				itemView: { fieldMode: 'read' },
			},
		}),
		timestamp: timestamp({ defaultValue: { kind: 'now' } }),
	},
});
