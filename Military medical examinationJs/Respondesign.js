





$(document).ready(function () {
  $('#toggle').click(function () { 
    $('#nav').slideToggle();
          
  });
});

window.onresize = function(){
      if(window.innerWidth > 738){
          $("#nav").fadeIn(300);
      }
}