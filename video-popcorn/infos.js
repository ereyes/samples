// JavaScript Document
 // ensure the web page (DOM) has loaded
      document.addEventListener("DOMContentLoaded", function () {

         // Create a popcorn instance by calling Popcorn("#id-of-my-video")
         var pop = Popcorn("#cev")
		         	
		 // play the video
  		pop.play();
	 
		 // add a Timeline
		pop.timeline({ pauseOnLinkClicked: true,
        start: 0,
		end:6,
        target: "timeline",
        title: "Happy test",
        text: " ",
        innerHTML: "Un test pour Valentine."
      })
	  .timeline ({
		start: 7,
		end:27,
        target: "timeline",
        title: "Ajoutez des photos",
        text: " ",
        innerHTML: "<div id='mesPhotosFragment1'></div>"
	  })
		.timeline ({
		start: 28,
		end:37,
        target: "timeline",
        title: "Ajoutez des photos",
        text: "",
        innerHTML: "<div id='mesPhotosFragment2'></div>"
      })
	  
	  
	  ;
	  
	  
      }, false);