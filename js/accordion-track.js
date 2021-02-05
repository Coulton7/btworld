$('.collapse').on('show.bs.collapse', function(e) {
  var $card = $(this).closest('.panel');
  var $open = $($(this).data('parent')).find('.collapse.in');

  var additionalOffset = 0;
  if($card.prevAll().filter($open.closest('.panel')).length !== 0)
  {
		additionalOffset =  $open.height();
  }
  $('html,body').animate({
    scrollTop: $card.offset().top - additionalOffset
  }, 500);
});
