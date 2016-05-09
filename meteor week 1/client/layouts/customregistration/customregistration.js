//Bron https://www.youtube.com/watch?v=sdJDzfHvHPI
if(Meteor.isClient){
	Template.register.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#register-email').value;
			var passwordVar = template.find('#register-password').value;
			Accounts.createUser({
				email: emailVar,
				password: passwordVar // enqrips password ivm geinstalleerde packets zie documentatie
			});
		}
	});
	Template.login.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#login-email').value;
			var passwordVar = template.find('#login-password').value;
			Meteor.loginWithPassword(emailVar, passwordVar); // zonder deze twee velden kan je niet inloggen
		}
	});
	Template.dashboard.events({
		'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
		}
	});
}