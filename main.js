$(document).ready(function(){

    $("button").click(function(){
        var chatName = $("#chatTest").val();
        $('#test').show();
        $('#chatInput').html(chatName);
        $('#pastIdeas').append('<li>' + chatName +'<br>');
    });

    var closeButton = <i class="fa fa-times"></i>

    $(closeButton).click(function(){
      $('<li>').toggleClass("fade");
    });
    
});
