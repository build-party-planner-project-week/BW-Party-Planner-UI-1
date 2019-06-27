window.addEventListener('load', function(){
        console.log('Added EventListener! This notifies me that the page is loaded')
});

let navLink = document.querySelectorAll('.linkedInLeft').forEach(node => {
    node.addEventListener("mouseover", function( event ) { 
        console.log('hello')  
        event.target.style.color = "orange";
        setTimeout(function() {
          event.target.style.color = "";
        }, 500);
      }, false);
});



