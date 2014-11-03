var Comics = Backbone.Collection.extend({
  model: Comic,
  url:'http://tiy-atl-fe-server.herokuapp.com/collections/mcgComics'
});
