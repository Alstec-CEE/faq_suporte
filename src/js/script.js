$(".feat-btn").click(function () {
  $("nav ul .first ").toggleClass("rotate");
  $("nav ul .feat-show").toggleClass("show");
});

$(".serv-btn").click(function () {
  $("nav ul .second").toggleClass("rotate");
  $("nav ul .serv-show").toggleClass("show1");
});

$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".btn-expandir").click(function () {
  $("nav").toggleClass("exp");
  $("main div").toggleClass("exp");
});
