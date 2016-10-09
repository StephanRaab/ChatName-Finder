$(document).ready(function(){


//using enter key
  $('#chatTest').keypress(function(e) {
   if(e.which === 13)  // the enter key code
    {
      var chatName = $(this).val();

      //empty inputfield
      $(this).val("");

      $("#sentence").show();
      $('#chatInput').html(chatName);
      $('#pastIdeas').append('<li>' + chatName + '<br>');
      return false;
    }
  });

//if user clicks on button with mouse
  $("button").click(function() {
    var chatName = $("#chatTest").val();
    $('#sentence').show();
    $('#chatInput').html(chatName);
    $('#pastIdeas').append('<li>' + chatName +'<br>');
  });

//delete past list items
  $( '#pastIdeas' ).click( 'li' , function(event){
    $(event.target).hide(250);
  });

});
