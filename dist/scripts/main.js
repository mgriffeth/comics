
(function(){
  App.Models.Comic = Backbone.Model.extend({
  defaults:{
    title:'',
    issue:'',
    publisher:'',
    hero:'',
    description:'',
    rating:'',
    image:'http://www.comicbooktidbits.com/Generic%20Site%20Enty_files/image037.jpg'
  },

  idAttribute:'_id',

  initialize:function(){
    var c = this.get('title');
    //console.log(c + " was added.");
  }

});
}());

(function(){
App.Collections.Comics = Backbone.Collection.extend({
  model: App.Models.Comic,
  url:'http://tiy-atl-fe-server.herokuapp.com/collections/mcgComics'
});
}());


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

(function(){
    App.Routers.AppRouter = Backbone.Router.extend({


        initialize: function(){
            Backbone.history.start();
        },
        routes:{
            '':'home',
            'edit/:id': 'editComic',
            'add': 'addComic'
        },

        home: function(){
            //console.log('heeellloooo');
          //  new App.Views.ComicAdd();
            new App.Views.ComicsView({ collection: App.comics_list });
        },
        editComic:function(id){

            var c = App.comics_list.get(id);
            new App.Views.SingleComic({ comic: c });


        },
        addComic: function(){
          new App.Views.ComicAdd();
        }

    });
}());

//console.log('EXCELSIOR!!!');
//new App.Views.ComicAdd();
 App.comics_list = new App.Collections.Comics();

 

  App.comics_list.fetch().done(function(){
    //console.log(App.comics_list);
    App.Router = new App.Routers.AppRouter();
  });
