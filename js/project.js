// Generated by CoffeeScript 1.6.3
(function() {
  var images;

  images = $("#post-container img");

  images.each(function() {
    var img, style;
    img = $(this);
    if (img.attr("nobox") !== "") {
      img.wrap("<div class='image-box'></div>");
      if (img.attr("alt")) {
        img.parent().append("<div class='caption'>" + (img.attr('alt')) + "</div>");
      }
      style = img.attr("box-style");
      if (style) {
        return img.parent().attr("style", style);
      }
    }
  });

}).call(this);
