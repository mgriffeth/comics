
//console.log('here');
(function () {
//console.log('here2');
  App.Views.ComicsView = Backbone.View.extend({


    tagName: 'ul',
    className: 'comicsList',

    initialize: function () {

      //console.log('View Initialized');

      this.render();

      //App.comics_list.on('sync', this.render, this);
      //App.comics_list.on('destroy', this.render, this);
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
      console.log('here3');
    }
  });
}());
