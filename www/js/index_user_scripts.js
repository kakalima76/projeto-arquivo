/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn-go-desarquivar */
    
    
        /* button  #btn-go-arquivar */
    
    
        /* button  #btn-login */
    
    
        /* button  #btn-login */
    
    
        /* button  #btn-login */
    $(document).on("click", "#btn-login", function(evt)
    {
         /*global activate_page */
         activate_page("#page-arquivar"); 
         return false;
    });
    
        /* button  #btn-go-desarquivar */
    $(document).on("click", "#btn-go-desarquivar", function(evt)
    {
         /*global activate_page */
         activate_page("#page-desarquivar"); 
         return false;
    });
    
        /* button  #btn-go-arquivar */
    $(document).on("click", "#btn-go-arquivar", function(evt)
    {
         /*global activate_page */
         activate_page("#page-arquivar"); 
         return false;
    });
    
        /* button  #btn-exit-app */
    $(document).on("click", "#btn-exit-app", function(evt)
    {
        navigator.app.exitApp();
         return false;
    });
    
        /* button  #btn-fechar-app */
    $(document).on("click", "#btn-fechar-app", function(evt)
    {
        navigator.app.exitApp();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
