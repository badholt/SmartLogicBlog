Template.postForm.events({
    'click #submit-post-button' (event, template) {
        const values = $('#post-form').form('get values');console.log(values);
        Meteor.call('addPost', values.author, values.content, values.title);
    }
});

Template.home.helpers({
    'posts' () {
        return Posts.find();
    }
});

Template.postForm.onRendered(function () {
   $('#post-form').form({
       author: {
           identifier: 'author',
           rules: [
               {
                   type: 'empty',
                   prompt: 'Please enter your name'
               }
           ]
       },
       title: {
           identifier: 'title',
           rules: [
               {
                   type: 'empty',
                   prompt: 'Please enter the title of the post'
               }
           ]
       },
       content: {
           identifier: 'content',
           rules: [
               {
                   type: 'empty',
                   prompt: 'Please add content'
               }
           ]
       },

   });
});
