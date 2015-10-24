Template.header.rendered = function() {
  
  //pause after render and then initialize materialize functions
  Meteor.setTimeout(function() {

    this.$('.button-collapse').sideNav({
      closeOnClick: true
    });

  }.bind(this), 200);

};

Template.header.events({
	'click [data-action=logout]': function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  }
});