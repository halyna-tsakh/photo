$(function() {
  var resizeTimer;
  var aspectRatio = 218 / 388;
  var $videos = $('#videoGallery .video');

  function updateVideosHeight() {
    resizeTimer = undefined;

    $videos.each(function() {
      var $video = $(this);
      var $inner = $video.find('video');

      $video.height($video.width() * aspectRatio);

      $inner.attr({
        width: $video.width() + 'px',
        height: $video.height() + 'px'
      });
    });
  }

  if (isMobile) {
    $videos.find('video')
      .prop('autoplay', false)
      .prop('preload', 'none')
      .prop('controls', true);
  }

  $(window).on('resize', function() {
    if (!resizeTimer) {
      resizeTimer = setTimeout(updateVideosHeight, 200);
    }
  });

  updateVideosHeight();
});
