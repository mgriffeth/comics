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
