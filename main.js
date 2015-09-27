$(document).ready(function(){


//using enter key
  $('#chatTest').keypress(function (e) {
   var key = e.which;
   if(key == 13)  // the enter key code
    {
        var chatName = $("#chatTest").val();
        $("#test").show();
        $('#chatInput').html(chatName);
        $('#pastIdeas').append('<li>' + chatName + '<br>');
      return false;
    }
  });

//if user clicks on button with moouse
  $("button").click(function() {
    var chatName = $("#chatTest").val();
    $('#test').show();
    $('#chatInput').html(chatName);
    $('#pastIdeas').append('<li>' + chatName +'<br>');
  });

//delete past list items
  $( '#pastIdeas' ).click( 'li' , function(event){
    $(event.target).hide(250);
  });

});
