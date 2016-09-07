export const PostSchema = new SimpleSchema({
    comments: {
        optional: true,
        type: Array
    },
    'comments.$': {
        type: String
    },
    message: {
        type: String
    },
    title: {
        type: String
    }
});
