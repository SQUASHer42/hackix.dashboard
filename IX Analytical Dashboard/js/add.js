$(document).ready(function(){
  $(".dropbtn").hover(function(){
    $(this).css("background-color", "#3e8e41");
  });

  $(".dropbtn").click(function(){
    $(".dropdown-content p").css("display", "none");
  });

});
