(function(){

  App.Views.SingleComic = Backbone.View.extend({

    tagName: 'ul',
    className: 'singleComic',

    events:{
      'submit #updateForm' : 'updateComic'
    },
    template: _.template($('#singleComic').html()),

    initialize: function(options){
        this.options=options;
        this.render();

        $('#comicsForm').empty();

        $('#comics').html(this.$el);
    },
    render: function(){
      console.log('single render');

      this.$el.empty();
      this.$el.html(this.template(this.options.comic.toJSON()));
  },

  updateComic: function(e){
    e.preventDefault();

    this.options.comic.set({
      title: $('#updateTitle').val(),
      publisher: $('#updatePublisher').val(),
      hero: $('#updateHero').val()
    })
    this.options.comic.save();

    App.router.navigate('', {trigger: true});

  }



  });


}());
