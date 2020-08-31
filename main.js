
$(function(){

  $('#about-text').hide();
  
  $("#about-button").click(function(e){
    e.preventDefault();
      $("#about-text").toggle();
  });
  
  $('#impact-text').hide();
  
  $("#impact-button").click(function(e){
    e.preventDefault();
      $("#impact-text").toggle();
  });  
  
  
});
