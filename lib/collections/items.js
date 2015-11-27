itemsCollection = new Mongo.Collection('items');

if (Meteor.isServer) {
  Meteor.publish("items", function () {
    return itemsCollection.find();
  });
}

//before inserting the item, set these values on the document
itemsCollection.before.insert(function (userId, doc) {

});

itemsCollection.attachSchema(new SimpleSchema({
  image: {
    type: String,
    max: 100,
    optional: true
  },
  title: {
    type: String,
    max: 100
  },
  body: {
    type: String,
    max: 1000
  },
  score: {
    type: Number,
    max: 100
  }
}));


Meteor.methods({
  'deleteItem': function(itemId) {

    check(itemId, String);

    var deleted = itemsCollection.remove({
        _id: itemId
    });

    if( !deleted){
      if(Meteor.isClient)
        Materialize.toast('Whoops! Not deleted', 4000, 'red');

      throw new Meteor.Error('invalid', "You weren't able to delete this item.");

    } else {
      if(Meteor.isClient)
        Materialize.toast('Awesome! You deleted that item!', 4000, 'light-green');
    }

  },
});
