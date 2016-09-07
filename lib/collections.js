import {CommentSchema} from './schema/posts'
import {PostSchema} from './schema/posts'
import {UserSchema} from "./schema//users";

Comments = new Mongo.Collection('comments');
Posts = new Mongo.Collection('posts');

Comments.attachSchema(CommentSchema);
Posts.attachSchema(PostSchema);
// Meteor.users.attachSchema(UserSchema);
