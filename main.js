
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
  
  
  
  $('#services-text').hide();
  
  $("#services-button").click(function(e){
    e.preventDefault();
      $("#services-text").toggle();
  });  
    
  
  
  $('#carriers-text').hide();
  
  $("#carriers-button").click(function(e){
    e.preventDefault();
      $("#carriers-text").toggle();
  });  
      
  
  
  function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("copy_it");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
  
  
  
});
