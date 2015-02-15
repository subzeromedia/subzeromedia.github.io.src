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
      items : 2,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
      navigation : false,
      navigationText : ["prev","next"],
      rewindNav : true,
      scrollPerPage : false,
      //Pagination
    pagination : true,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    }
   );
});