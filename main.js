// $('.header-right a i').click(function(){
//     $('.hamburger-menu').show(2000);
// });
//
// $('.hamburger-menu a i').click(function(){
//     $('.hamburger-menu').hide(1000);
// });


$('.header-right a i').click(function(){
    $('.hamburger-menu').addClass('active');
});

$('.hamburger-menu a i').click(function(){
  $('.hamburger-menu').removeClass('active');
});
