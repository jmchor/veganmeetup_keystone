import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';

export const Podcast = list({
	access: allowAll,
	fields: {
		name: text({
			ui: {
				listView: { fieldMode: 'read' },
			},
		}),
		thumbnail: relationship({
			ref: 'Image',
			many: false,
			ui: {
				displayMode: 'cards',
				cardFields: ['alt'],
				inlineEdit: { fields: ['alt'] },
				inlineCreate: { fields: ['alt'] },
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
