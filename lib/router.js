Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.onBeforeAction('loading');

Router.route('/', function () {
    this.render('home');
}, {name: 'home'});

Router.route('/not-found', function () {
    this.render('notFound');
}, {name: 'notFound'});

Router.route('/posts/:_id', {
    data: function() { return Posts.findOne(this.params._id); },
    name: 'post'
});
