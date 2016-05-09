
// On Client
Template.search.helpers({
  usersIndex: () => UsersIndex
});


Template.chat.events({
	'click .message': function(event){
		Router.go('/chatarea');
	}
});


Template.chat.events({
	'click .newUser': function(event){
		Router.go('/chatarea');
	}
});

