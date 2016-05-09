// Accounts.onLogin(function(){
// 	if  ('click .button'){
// 	Router.go('/dashboard');
// 	}
// });

// Template.login.events({ 
//   'click .button': function () {
//    Router.go('/dashboard');
// 	}
// });


// Router.route('dashboard', {
//   path: '/dashboard',
//   onBeforeAction: function () {
//     if (! Meteor.user()) {
//       if (Meteor.loggingIn()) {
//       }
//       else{
//         Router.go('login');
//       }
//     }
//   }
// }


Router.route('/', function () {
  this.render('home');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});


