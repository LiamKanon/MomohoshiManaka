window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fadein').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 150){
     $(this).addClass('scrollin');
    }
   });
  }
};
function youtube_defer() {
  var iframes = document.querySelectorAll('.youtuber');
  iframes.forEach(function(iframe){
    if(iframe.getAttribute('data-src')) {
      iframe.setAttribute('src',iframe.getAttribute('data-src'));
    }
  });
}
window.addEventListener('load', youtube_defer);
