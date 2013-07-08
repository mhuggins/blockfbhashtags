jQuery(function ($) {
  removeHashtags(document.body);

  document.body.addEventListener('DOMNodeInserted', function (event) {
    removeHashtags(event.target);
  }, false);

  function removeHashtags(selector) {
    $(selector).find('a[href^="/hashtag/"]').remove();
  }
});
