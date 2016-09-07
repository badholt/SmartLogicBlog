export const CommentSchema = new SimpleSchema({
    avatar: {
        regEx: SimpleSchema.RegEx.Url,
        type: String
    },
    createdAt: {
        type: Date
    },
    likes: {
        type: Number
    },
    text: {
        type: String
    },
    user: {
        type: String
    }
});
