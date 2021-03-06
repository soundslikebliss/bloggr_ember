App = Ember.Application.create();

// routER
// define your urls here:
App.Router.map(function(){
  this.resource('about');
  this.resource('posts', function() {
      this.resource('post', { path: ':post_id' });
  });
});



// specify which model a template is backed by here:
// posts ROUTE
App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});
// post ROUTE
App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});




// CONTROLLER
App.PostController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
      edit: function() {
        this.set('isEditing', true);
      },
      doneEditing: function() {
        this.set('isEditing', false);
      }
    }
});




// helper to format date, using momentjs library
Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});
// helper to convert markdown to valid html
var showdown = new Showdown.converter();
Ember.Handlebars.helper('format-markdown', function(input){
  return new  Handlebars.SafeString(showdown.makeHtml(input));
});




// posts MODEL here:
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
