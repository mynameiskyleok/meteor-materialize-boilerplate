//Extends MainController which extends the main RouteController.
listController = MainController.extend({
  //loadingTemplate in Router.config() is automatically until waitOn returns.
  waitOn: function() {
    //wait until the subscription is ready.
    return this.subscribe('items');
  },
  //set the data context for IdeaList Route / Template
  data: function() {
    return {
      //sort by score in decending order
      items: itemsCollection.find({}, {sort: {score: -1}})
    }
  },
  onAfterAction: function() {
    //do something cool
  }
});
