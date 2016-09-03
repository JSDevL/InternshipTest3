$( document ).ready( function(){
    
    var $scroller = $("body");
    var $nav = $("#nav-container");
    
    $( document ).on( "scroll", function(){
        var percentage =  $scroller.scrollTop() / ( $scroller[0].scrollHeight - $nav[0].clientHeight );
        $nav[0].scrollTop = percentage * ( $nav[0].scrollHeight - $nav[0].clientHeight );
    });
    
});

var toggleMenu = function(){
    $('#nav-container li').each( function(index){
        if( $(this).attr('id') != "menu-toggle" )
        {
            if( $(this).hasClass("open") ) {
                $(this).removeClass("open");
            } else {
                $(this).addClass("open");
            }
        } 
    });
}