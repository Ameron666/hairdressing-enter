$(".filter-box ul").on("click", "li", function () {
  $(".filter-box ul li").each(function () {
    $(this).removeClass("activeListCheck");
  });

  $(this).addClass("activeListCheck");

  let blockName = $(this).text();

  $(".galery_imgs__img").each(function () {
    if (blockName == "Все") {
      $(this).show();
    } else if ($(this).attr("data_tag") == blockName) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
