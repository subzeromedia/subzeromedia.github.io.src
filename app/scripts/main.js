$('#previewModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var imgUrl = button.data('image-url')
  var title = button.data('title')
  var modal = $(this)
  modal.find('.modal-image').attr("src", imgUrl);
  modal.find('.modal-title').text(title);
})