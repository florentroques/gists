$(document).ready(function () {
  $(".presentation-video-container video").on("ended", function () {
    $(".presentation-video-container .et_pb_video_overlay").css({
      backgroundColor: "rgba(0,0,0,1)",
      backgroundImage: "none",
      display: "block",
      opacity: 1,
      cursor: "default"
    });

    $('.presentation-video-container .et_pb_video_overlay').html(`
        <a
            class="et_pb_video_overlay_link"
            style="
                font-size: 30px;
                color: #fff;
                text-decoration: underline;
                position: absolute;
                left: 50%;
                top: 50%;
                opacity: 0;
            "
            href=""
        >
            ヒーリングセッションを予約する
        </a>
    `);

    // Keep two css calls otherwise the text will not be properly centered
    $('.presentation-video-container .et_pb_video_overlay_link').css({
        'opacity' : '1',
        'margin-left' : function() {return -$(this).outerWidth()/2},
        'margin-top' : function() {return -$(this).outerHeight()/2}
    });
    $('.presentation-video-container .et_pb_video_overlay_link').css({
        'opacity' : '1',
        'margin-left' : function() {return -$(this).outerWidth()/2},
        'margin-top' : function() {return -$(this).outerHeight()/2}
    });
  });
});
