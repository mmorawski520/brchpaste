
         // Get the modal
         var modal = document.getElementById("modal");
         
         
         var span = document.getElementsByClassName("close")[0];
         
         function display_modal() {
         $("#modal").show()
         }
         // When the user clicks on <span> (x), close the modal
         function hide_modal() {
         $("#modal").hide()
         }
         // When the user clicks anywhere outside of the modal, close it
         window.onclick = function(event) {
         if (event.target != modal) {
         $("#modal").hide()
         }
         } 