
(function(){
  App.Models.Comic = Backbone.Model.extend({
  defaults:{
    title:'',
    issue:'',
    publisher:'',
    hero:'',
    description:'',
    rating:'',
    image:'http://www.comicbooktidbits.com/Generic%20Site%20Enty_files/image037.jpg'
  },

  idAttribute:'_id',

  initialize:function(){
    var c = this.get('title');
    //console.log(c + " was added.");
  }

});
}());
