
//console.log('here');
(function () {
//console.log('here2');
  App.Views.ComicsView = Backbone.View.extend({

    tagName: 'ul',
    className: 'comicsList',

    events:{
      //'click li': 'deleteComic'
    },

    template: _.template($('#comic').html()),

    initialize: function () {

      this.render();

      this.collection.off();
      console.log();
      App.comics_list.on('sync', this.render, this);
      //App.comics_list.on('destroy', this.render, this);

      $('#comics').html(this.$el);

    },

    render: function () {

      var self = this;
    //  console.log('here in render');
       this.$el.empty();

      this.collection.forEach(function (c) {
        console.log(c);
        self.$el.append(self.template(c.toJSON()));
      });

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
