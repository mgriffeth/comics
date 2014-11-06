(function(){

App.Views.ComicAdd = Backbone.View.extend({
    el: '#comicsForm',
    events:{
      'submit #comicInput': 'addComic'
    },

    initialize: function(){
      this.render();
    },

    render: function(){
    //  console.log('3');
      var form_html = $('#inputScript').html();
      this.$el.html(form_html);

    },
    addComic:function(event){
      event.preventDefault();
      title = $('#comicTitle').val();
      publisher = $('#comicPublisher').val();

      comic = new App.Models.Comic({
        title: title,
        publisher:publisher
      });

      App.comics_list.add(comic).save();

      $('#comicInput')[0].reset();


    }
});

}());
