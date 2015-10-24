Router.route('/', {
  name: 'home'
});

Router.route('/list', {
  name: 'list'
});

Router.plugin('ensureSignedIn', {
    only: [ 'list' ]
});