
(function(){
  App.Models.Comic = Backbone.Model.extend({
  defaults:{
    title:'',
    publisher:'',
    hero:'',
    description:'',
    rating:''
  },

  idAttribute:'_id',

  initialize:function(){
    var c = this.get('title');
    //console.log(c + " was added.");
  }

});
}());
