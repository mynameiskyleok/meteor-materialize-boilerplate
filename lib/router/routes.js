Router.route('/', {
  name: 'home'
});

Router.route('/list', {
  name: 'list',
  controller: 'listController'
});

// plugin from useraccounts:iron-routing
Router.plugin('ensureSignedIn', {
    only: [ 'list' ]
});
