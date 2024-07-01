import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';

export const Activist = list({
	access: allowAll,

	fields: {
		name: text({
			label: 'Name',
			ui: {
				listView: { fieldMode: 'read' },
			},
		}),
		url: text({ label: 'URL', ui: { itemView: { fieldMode: 'edit' } } }),
		thumbnail: relationship({
			ref: 'Image',
			many: false,
			ui: {
				displayMode: 'cards',
				cardFields: ['alt', 'image', 'category'],
				inlineEdit: { fields: ['alt', 'image', 'category'] },
				inlineCreate: { fields: ['alt', 'image', 'category'] },
				linkToItem: true,
				inlineConnect: true,
			},
		}),
		description: text({
			label: 'Description',
			ui: {
				itemView: { fieldMode: 'edit' },
			},
		}),
	},
	ui: {
		listView: {
			initialColumns: ['name', 'thumbnail', 'description'],
		},
	},
});
