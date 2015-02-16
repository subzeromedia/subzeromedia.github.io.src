$('#previewModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var imgUrl = button.data('image-url')
  var title = button.data('title')
  var modal = $(this)
  modal.find('.modal-image').attr("src", imgUrl);
  modal.find('.modal-title').text(title);
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      items : 1,
      nav: true,
      // navContainer: ".slides-nav",
      loop: true,
      dots: true,
      // autoplay: true

    }
   );
});