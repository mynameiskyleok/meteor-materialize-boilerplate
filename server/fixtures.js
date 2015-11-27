if(itemsCollection.find().count() === 0){

  var now = new Date().getTime();

  itemsCollection.insert({
    image: 'images/yuna.jpg',
    title: 'Item 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.',
    score: _.random(0,100)
  });

  itemsCollection.insert({
    image: 'images/yuna.jpg',
    title: 'Item 2',
    body: 'Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.',
    score: _.random(0,100)
  });

  itemsCollection.insert({
    title: 'Item 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.',
    score: _.random(0,100)
  });

  itemsCollection.insert({
    title: 'Item 4',
    body: 'Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet.',
    score: _.random(0,100)
  });

}
