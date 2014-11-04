
(function(){
  App.Models.Comic = Backbone.Model.extend({
  defaults:{
    title:'',
    publisher:'',
    hero:''
  },

  idAttribute:'_id',

  initialize:function(){
    console.log('Comic instance created.');
  }

});
}());
