function goToByScroll(id){
    var scrollY = $(id).offset().top;
    $('html,body').animate({scrollTop: scrollY},'slow');
}

$(document).ready(function() {
    console.log('ready');
    $('.navbar-nav a').click(function(){
        console.log("works!");
        goToByScroll($(this).attr('href'));
        return false;
    });
});
