(function(){
App.Collections.Comics = Backbone.Collection.extend({
  model: App.Models.Comic,
  url:'http://tiy-atl-fe-server.herokuapp.com/collections/mcgComics'
});
}())
