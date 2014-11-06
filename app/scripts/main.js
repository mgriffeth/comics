//console.log('EXCELSIOR!!!');
//new App.Views.ComicAdd();
 App.comics_list = new App.Collections.Comics();

 //var comic;
  // title,
  // publisher,
  // hero;

  App.comics_list.fetch().done(function(){
    //console.log(App.comics_list);
    App.Router = new App.Routers.AppRouter();
  });

  // $('#comic-form').submit(function(event){
  //   event.preventDefault();
  //   title = $('#titleInput').val();
  //   publisher = $('#publisherInput').val();
  //   hero = $('#heroInput').val();
  //   console.log(title + ' , ' + publisher + ' , '+ hero);
  //
  //
  //   comic = new App.Models.Comic({
  //     title: title,
  //     publisher: publisher,
  //     hero: hero
  //   });
  //
  //   App.comics_list.add(comic).save();
  //   $(this)[0].reset();
  // })
