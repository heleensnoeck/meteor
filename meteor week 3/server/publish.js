Meteor.publish('user', function(){ // naam van mongocollection
	return Users.find({}); // naam van schema
});



// Meteor.publish('user', function(){ // naam van mongocollection
// 	return Users.find({Author: this.userId}); // naam van schema
// });


// Meteor.publish('userList', function (){ 
//   return Meteor.users.find({});
// });


// Router.route('/users', {
//     name: 'usersTemplate',
//     waitOn: function() {
//         return Meteor.subscribe('userList');
//     },
//     data: function() {
//         return Meteor.users.find({});       
//     }
//  });