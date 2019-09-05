$(window).on("load", function () {
  $(".cup").delay(5000).fadeOut(2000, function () {
    $(".loader").fadeOut(1000);

    window.location.href = "/index";

  });
});
