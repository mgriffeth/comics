var Comic = Backbone.Model.extend({
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

var Comics = Backbone.Collection.extend({
  model: Comic,
  url:'http://tiy-atl-fe-server.herokuapp.com/collections/mcgComics'
});

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

console.log('EXCELSIOR!!!');

var comics_list = new Comics(),
  comic
  // title,
  // publisher,
  // hero;

  comics_list.fetch().done(function(){
    console.log(comics_list);
    new ComicsView({
      collection: comics_list
    });
  });

  $('#comic-form').submit(function(event){
    event.preventDefault();
    title = $('#titleInput').val();
    publisher = $('#publisherInput').val();
    hero = $('#heroInput').val();
    console.log(title + ' , ' + publisher + ' , '+ hero);


    comic = new Comic({
      title: title,
      publisher: publisher,
      hero: hero
    });

    comics_list.add(comic).save();
    $(this)[0].reset();
  })
