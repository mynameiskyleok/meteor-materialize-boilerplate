Router.route('/', {
  name: 'home'
});

Router.route('/list', {
  name: 'list'
});

// plugin from useraccounts:iron-routing
Router.plugin('ensureSignedIn', {
    only: [ 'list' ]
});