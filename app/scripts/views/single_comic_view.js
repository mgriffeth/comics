(function(){

  App.Views.SingleComic = Backbone.View.extend({

    tagName: 'ul',
    className: 'singleComic',

    events:{
      'click #updateBtn' : 'updateComic',
      'click #deleteBtn': 'deleteComic'
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
      issue: $('#updateIssue').val(),
      publisher: $('#updatePublisher').val(),
      image:$('#updateImage').val(),
      hero: $('#updateHero').val(),
      description: $('#updateDescription').val()
    })
    this.options.comic.save()
    App.Router.navigate( " ", {trigger: true});





  },

  deleteComic: function(e){
    e.preventDefault();
    this.options.comic.destroy()

    App.Router.navigate( '', {trigger: true});


    // this.options.comic.save();

  }



  });


}());
