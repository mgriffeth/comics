
//console.log('here');
(function () {
//console.log('here2');
  App.Views.ComicsView = Backbone.View.extend({


    tagName: 'ul',
    className: 'comicsList',

    events:{
      'click button': 'deleteComic'
    },

    initialize: function () {

      console.log('View Initialized');

      this.render();

      App.comics_list.on('sync', this.render, this);
      App.comics_list.on('destroy', this.render, this);
    },

    render: function () {

      var self = this;
    //  console.log('here in render');
      var template = $('#comic').html();
      var rendered = _.template(template);

      this.$el.empty();

      _.each(App.comics_list.models,function(x){
       //console.log(x.get('title'));
      self.$el.append(rendered(x.attributes));

      });
      console.log(this.el);

      $('#comics').html(this.el);

      return this;

    },

    deleteComic: function (e) {
      e.preventDefault();
      console.log('delete '+ e.target.id);
      var deleteId = $(e.target).attr('id');
      //console.log(deleteId);
      var toDelete = App.comics_list.get(deleteId);
    //  console.log(deleteId + "and again");
      toDelete.destroy();


    }
  });
}());
