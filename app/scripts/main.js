$('#previewModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var imgUrl = button.data('image-url')
  var title = button.data('title')
  var modal = $(this)
  modal.find('.modal-image').attr("src", imgUrl);
  modal.find('.modal-title').text(title);
})

// own carousel 2
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel(
//     {
//       items : 1,
//       nav: true,
//       loop: true,
//       dots: true
//     }
//    );
// });

// own carousel 1
$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      items : 1,
      navigation: true,
      dots: true,
      responsive: false
    }
   );
});

$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});