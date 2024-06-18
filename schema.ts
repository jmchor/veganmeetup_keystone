import type { Lists } from '.keystone/types';
import { User } from './user';
import { Post } from './post';
import { Tag } from './tag';

export const lists = {
	User: User,
	Post: Post,
	Tag: Tag,
};
