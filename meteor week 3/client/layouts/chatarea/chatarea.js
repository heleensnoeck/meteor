Template.chatarea.events({
	'click .arrow-left': function(event){
		Router.go('/chat');
	}
});

Template.chatarea.events({
	'click .img_logout': function(event){
		Router.go('/');
	}
});

