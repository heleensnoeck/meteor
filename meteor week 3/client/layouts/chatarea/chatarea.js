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


Meteor.setTimeout(function(){ // om page refresh te voorkomen. 
	$('#send').bind('submit', function(event) {
		event.preventDefault();
	  var msgText = $('#msgInput').val();
	  $('#msgInput').val('');
	  
	  if (msgText != '') addMsg(1, msgText);
	  
	  $('#phone').animate({ scrollTop:  $('#phone').height() }, 600);
	  
	  return false;
	})

	function addMsg(people, msg) {
	  var side = 'right';
	  var $_phone = $('#phone');
	  var $_lastMessage = $('#phone .message:last');
	  
	  if (people == 1) side = 'right';
	  if (people == 2) side = 'left';
	  
	  if ($_lastMessage.hasClass(side)) {
	    
	    $_lastMessage.append(
	      $('<div>').addClass('message-text').text(msg)
	    )
	    
	  } else {
	    
	    $_phone.append(
	      $('<div>').addClass('message '+side).append(
	        $('<div>').addClass('message-text').text(msg)
	      )
	    )
	  }
    }
  Test("10");}, 1000);
