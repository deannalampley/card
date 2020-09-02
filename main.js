
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

					const span = $("#copytext");
					const copy_btn = $(".copy_btn")
					span.onclick = function() {
					  document.execCommand("copy");
					}

					span.addEventListener("copy", function(event) {
					  event.preventDefault();
					  if (event.clipboardData) {
					    event.clipboardData.setData("text/plain", copy_btn.textContent);
					    console.log(event.clipboardData.getData("text"))
					  }
					});
	
	
});
