	  // Get the modal
	  var modal = document.getElementById(&#39;myModal&#39;);
	  // Get the button that opens the modal
	  var btn = document.getElementById(&quot;myBtn&quot;);
	  // Get the <span/> element that closes the modal
	  var span = document.getElementsByClassName(&quot;closebtn&quot;)[0];
	  // When the user clicks the button, open the modal 
	  btn.onclick = function() {
	      modal.style.display = &quot;block&quot;;
	  }
	  // When the user clicks on <span/> (x), close the modal
	  span.onclick = function() {
	      modal.style.display = &quot;none&quot;;
	  }
	  // When the user clicks anywhere outside of the modal, close it	  
	  window.onclick = function(event) {
	      if (event.target == modal) {
	          modal.style.display = &quot;none&quot;;
	      }
	  }
