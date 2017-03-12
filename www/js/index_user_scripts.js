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
    
        /* button  #btn-return-movimentar */
    $(document).on("click", "#btn-return-movimentar", function(evt)
    {
         /*global activate_page */
         activate_page("#page-desarquivar"); 
         return false;
    });
    
        /* button  #btn-pesquisa-tempo-arquivado */
    $(document).on("click", "#btn-pesquisa-tempo-arquivado", function(evt)
    {
         /*global activate_page */
         activate_page("#page-consultar-tempo-arquivo"); 
         return false;
    });
    
        /* button  #btn-consultar-tempo-arquivado */
    $(document).on("click", "#btn-consultar-tempo-arquivado", function(evt)
    {
         /*global activate_page */
         activate_page("#page-consultar-tempo-arquivo"); 
         return false;
    });
    
        /* button  #btn-data-arquivo */
    $(document).on("click", "#btn-data-arquivo", function(evt)
    {
         /*global activate_page */
         activate_page("#page-consultar-tempo-arquivo"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
