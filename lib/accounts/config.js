//AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'mainLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'mainLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'mainLayout'});

AccountsTemplates.configureRoute('signIn', {
    //name: 'signIn',
    path: '/sign-in',
    //template: 'myLogin',
    layoutTemplate: 'mainLayout',
    redirect: '/list',
});
