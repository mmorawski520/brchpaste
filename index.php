<!DOCTYPE html>
<html>
   <head>
      <title>brchpaste</title>
      <link rel="stylesheet" href="style/style.css">
      <script src="js/jquery-3.6.0.min.js"></script>
      <script src="js/JsClass.js"></script>
      <script src="js/ui/modal.js"></script>
      <script src="js/ui/nav.js"></script>

      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   </head>
   <body>
      <!-- modal box-->
      <div id="modal" class="modalc">
         <div class="modal-c">
            <p class='modal_p'></p>
         </div>
      </div>
      <!--Normal side content-->
      <nav class="topnav" id="myTopnav">
         <a href="index.php" class="active">Stwórz notatkę</a>
         <a href="rules.html">Regulamin</a>
         <a href="contact.html">Kontakt</a>
         <a href="javascript:void(0);" class="icon" onclick="expandNav()">
         <i class="fa fa-bars"></i>
         </a>
      </nav>
      <section class='main'>
      </section>
   </body>
   <script>hide_modal()</script>
  <script src="js/AjaxNote.js"></script>
   
</html>

