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
