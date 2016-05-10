
// On Client
Template.search.helpers({
  usersIndex: () => UsersIndex
});


Template.chat.events({
	'click .search_chats': function(event){
		Router.go('/chatarea');
	}
});


Template.chat.events({
	'click .newUser': function(event){
		Router.go('/chatarea');
	}
});

