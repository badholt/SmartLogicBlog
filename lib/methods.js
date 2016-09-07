Meteor.methods({
    'addPost' (author, content, title) {
        Posts.insert({
            author: author,
            comments: [],
            createdAt: new Date(),
            message: content,
            title: title
        });
    }
});
