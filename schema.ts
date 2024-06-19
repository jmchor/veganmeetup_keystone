import type { Lists } from '.keystone/types';
import { User } from './lists/user';
import { Post } from './lists/post';
import { Tag } from './lists/tag';
import { Image } from './lists/image';
import { Event } from './lists/event';
import { Activist } from './lists/activist';

export const lists = {
	User: User,
	Post: Post,
	Tag: Tag,
	Image: Image,
	Event: Event,
	Activist: Activist,
};
