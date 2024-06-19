import type { Lists } from '.keystone/types';
import { User } from './user';
import { Post } from './post';
import { Tag } from './tag';
import { Image } from './image';
import { Event } from './event';

export const lists = {
	User: User,
	Post: Post,
	Tag: Tag,
	Image: Image,
	Event: Event,
};
