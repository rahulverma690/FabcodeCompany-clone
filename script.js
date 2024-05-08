function moveVideo(position) {
  position >= 100 && (position = 99);
  let video = document.getElementById("home-pricing-calc-video"),
    duration = video.duration;
  (videoPosition = (duration / 100) * position),
    videoPosition > duration && (videoPosition = duration),
    $.isNumeric(videoPosition) || (videoPosition = 0),
    videoPosition > duration && (videoPosition = duration),
    (video.currentTime = videoPosition);
}
function pauseVideo() {
  let video = document.getElementById("home-pricing-calc-video");
  video != null && (video.pause(), (video.currentTime = 0));
}
pauseVideo();
function setHomePrice(position) {
  let price = 1;
  position >= 25 && position < 75 ? (price = 2) : position >= 75 && (price = 3);
  let monthly = $(".home-pricing-calc-monthly-amount").data("level-" + price);
  $(".home-pricing-calc-monthly-amount").html(monthly);
  let oneTime = $(".home-pricing-calc-one-time-amount").data("level-" + price);
  $(".home-pricing-calc-one-time-amount").html(oneTime);
}

$(".home-pricing-slider").slider(),
  $(".home-pricing-slider").on("slide", function () {
    moveVideo($(this).slider("option", "value")),
      setHomePrice($(this).slider("option", "value"));
  }),
  $(".home-benefits-carousel").owlCarousel({
    items: 1,
    loop: !0,
    nav: !0,
    dots: !1,
    autoplayTimeout: 7e3,
    margin: 50,
    lazyLoad: !0,
    navText: [
      '<i class="las la-chevron-circle-left"></i>',
      '<i class="las la-chevron-circle-right"></i>',
    ],
  }),
  $(".home-media-carousel").owlCarousel({
    items: 1,
    loop: !0,
    nav: !1,
    dots: !0,
    autoplayTimeout: 7e3,
    margin: 50,
    lazyLoad: !0,
    navText: [
      '<i class="las la-chevron-circle-left"></i>',
      '<i class="las la-chevron-circle-right"></i>',
    ],
  }),
  $(".toggle-faq-answer").on("click", function (e) {
    e.preventDefault(),
      $(this).toggleClass("question-open"),
      $(this).siblings(".faq-answer").slideToggle();
  }),
  $(".reviews-carousel").owlCarousel({
    items: 1,
    loop: !0,
    nav: !1,
    dots: !0,
    autoplayTimeout: 7e3,
    margin: 50,
    lazyLoad: !0,
    navText: [
      '<i class="las la-chevron-circle-left"></i>',
      '<i class="las la-chevron-circle-right"></i>',
    ],
  }),
  $(".box-material-video").on("click", function (e) {
    let id = $(this).attr("href");
    $(id + " video")
      .get(0)
      .play();
  }),
  $(document).on("click", ".lity-close", function (e) {
    $(".box-material-video-player video").each(function () {
      $(this).get(0).pause();
    });
  });
let result = null,
  showSection5 = !0,
  showSection6 = !0,
  sendEmail = !1;
function goToSection(section = 1) {
  if ((section == null && (section = 1), section == 5 && !showSection5))
    return goToSection(6), !1;
  if (section == 6 && !showSection6) return goToSection(7), !1;
  $(".assessment-section").hide(), $("#assessment-section-" + section).fadeIn();
}
