App = Ember.Application.create();

// define your URLs here:
App.Router.map(function(){
  this.resource('about');
  this.resource('posts', function() {
      this.resource('post', { path: ':post_id' });
  });
});



// specifies which MODEL a TEMPLATE is backed by here:
App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});


// Posts model here:
var posts = [{
  id: '1',
  title: 'First Post',
  author: { name: 'Bobby'},
  date: new Date('04-29-2014'),
  excerpt: 'blah blah blah',
  body: 'Here is the FIRST post, WOOHOO, yeah!'
}, {
  id: '2',
  title: 'Second Post',
  author: { name: 'Susie'},
  date: new Date('04-29-2014'),
  excerpt: 'bloo bloo bloo',
  body: 'Here is the SECOND post, WOOHOO, yeah!'
}];
