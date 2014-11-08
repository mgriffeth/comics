(function(){

App.Views.ComicAdd = Backbone.View.extend({
    //el: '#comicsForm',
    events:{
      'submit #comicInput': 'addComic'
    },

    initialize: function(){
      this.render();
      $('#comics').html(this.$el);

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
      issue = $('#comicIssue').val();
      image = $('#comicImage').val();

      comic = new App.Models.Comic({
        title: title,
        publisher:publisher,
        issue:issue,
        image:image,

      });

      App.comics_list.add(comic).save(null,{
        success: function(){
            App.Router.navigate('',{ trigger : true });
        }
      })





      //$('#comicInput')[0].reset();




    }
});

}());
