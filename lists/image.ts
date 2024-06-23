import { cloudinaryImage } from '@keystone-6/cloudinary';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { select, text } from '@keystone-6/core/fields';
import 'dotenv/config';

export const cloudinary = {
	cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
	apiKey: process.env.CLOUDINARY_KEY as string,
	apiSecret: process.env.CLOUDINARY_SECRET as string,
	folder: process.env.CLOUDINARY_API_FOLDER as string,
};

export const Image = list({
	access: allowAll,

	fields: {
		image: cloudinaryImage({
			cloudinary,
			label: 'Source',
		}),

		alt: text({
			label: 'Description',
			ui: {
				itemView: { fieldMode: 'edit' },
			},
		}),

		category: select({
			options: [
				{ label: 'Masonry', value: 'masonry' },
				{ label: 'Articles', value: 'articles' },
				{ label: 'Activists', value: 'activists' },
				{ label: 'Podcasts', value: 'podcasts' },
				{ label: 'Books', value: 'books' },
				{ label: 'Videos', value: 'videos' },
				{ label: 'Timeline', value: 'timeline' },
				{ label: 'General', value: 'general' },
			],
			defaultValue: 'background',
			ui: {
				itemView: { fieldMode: 'edit' },
			},
		}),
	},

	ui: {
		listView: {
			initialColumns: ['image', 'alt'],
		},
	},
});
