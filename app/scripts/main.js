//console.log('EXCELSIOR!!!');
//new App.Views.ComicAdd();
 App.comics_list = new App.Collections.Comics();

 

  App.comics_list.fetch().done(function(){
    //console.log(App.comics_list);
    App.Router = new App.Routers.AppRouter();
  });
