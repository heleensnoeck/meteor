Meteor.subscribe('user'); // naam collection -> voegt gebruikers (skills, locatie enz.) toe aan de mongodb database

Template.chat.helpers({
	user: ()=> {			// of addUser
		return Users.find({});
	}
});


// Template.chat.events({
// 	'click .message': function(event){
// 		Router.go('/login');
// 	}
// });


// Template.chat.events({
// 	'click .newUser': function(event){
// 		Router.go('/login');
// 	}
// });
