Template.header.rendered = function() {
  
  //
  Meteor.setTimeout(function() {

    this.$('.button-collapse').sideNav({
      closeOnClick: true
    });

  }.bind(this), 200);

};