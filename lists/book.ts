import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';

export const Book = list({
	access: allowAll,

	fields: {
		name: text({ label: 'Title' }),
		author: text({ isIndexed: 'unique' }),
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
		url: text({ label: 'URL' }),
		description: text({
			label: 'Description',
			ui: {
				itemView: { fieldMode: 'edit' },
			},
		}),
	},
	ui: {
		listView: {
			initialColumns: ['name', 'author', 'thumbnail'],
		},
	},
});
