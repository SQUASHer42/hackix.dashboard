
$(document).ready(function(){
  $(".choicebtn").on("click", function(){
    var text = $(this).text();
    $("#charts").text(text);
  });

  $(".xbtn").on("click", function(){
    var text = $(this).text();
    $("#x-axis").text(text);
  });

  $(".ybtn").on("click", function(){
    var text = $(this).text();
    $("#y-axis").text(text);
  });

  $(".submit").on("click", function(){
    //Not implemented
  });
});

function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
