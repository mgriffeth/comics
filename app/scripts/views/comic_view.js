var ComicsView = Backbone.View.extend({


  tagName: 'ul',
  className: 'comicsList',

  initialize: function(options){
    console.log('View Initialized');
    this.render(options.collection);
  },

  render: function(collection){
    var template = $('#comic').html();
    var rendered = _.template(template);

    var self = this;


    _.each(collection.models,function(x){
    //  console.log(x.get('title'));
    self.$el.append(rendered(x.attributes));

    });
    console.log(this.el);
    $('#comics').html(this.el);

    return this;
  }
});
