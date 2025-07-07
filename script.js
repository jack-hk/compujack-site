$(document).ready(function () {
  $('.main-content__list li').each(function () {
    var delay = ($(this).index() / 4) + 's';
    $(this).css({
      WebkitAnimationDelay: delay,
      MozAnimationDelay: delay,
      animationDelay: delay
    });
  });
});
