
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
      

// 			function myFunction() {
// 	          		let copytext = $("#copytext")
// 				let holdtext = $("#holdtext")
// 				holdtext.innerText = hold.innerText;
// 				Copied = holdtext.createTextRange();
// 				Copied.execCommand("Copy");
// 			}
  
	const myFunction() {
		  
		  const el = document.createElement('textarea');
		  el.value = 'https://deannalampley.github.io/card';
		  document.body.appendChild(el);
		  el.select();
		  document.execCommand('copy');
		  document.body.removeChild(el);
	};
	
	
});
