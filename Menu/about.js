window.addEventListener('load', function(){
        console.log('Added EventListener! This notifies me that the page is loaded')
});


//used forEach

let navLink = Array.from(document.querySelectorAll('.linkedInLeft')).map(node => {
    node.addEventListener("mouseover", function( event ) { 
        console.log('hello')  
        event.target.style.color = "orange";
        setTimeout(function() {
          event.target.style.color = "";
        }, 500);
      }, false);
});



//used .map
let gitLink = document.querySelectorAll('.gitHub').forEach(node => {
  node.addEventListener("mouseover", function( event ) { 
      console.log('hello')  
      event.target.style.color = "green";
      setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
});

