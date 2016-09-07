Meteor.publish('comments', function (){
    return Comments.find();
});

Meteor.publish('posts', function (){
    return Posts.find();
});
