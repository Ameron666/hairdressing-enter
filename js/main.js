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

$(document).ready(function () {
  $(".tabs a").click(function (e) {
      e.preventDefault();
      $(".tabs a").removeClass("active");
      $(this).addClass("active");
      $(".tab-content").removeClass("active");
      let tabId = $(this).attr("href");
      $(tabId).addClass("active");
  });
});


$(document).ready(function () {
  $(".galery_imgs").on("click", ".galery_imgs__img img", function (e) {
    e.stopPropagation();
    showModal();
  });

  $(".modal").click(function (e) {
    const modalWidth = $(this).width();
    const clickX = e.clientX - $(this).offset().left;

    if (clickX < modalWidth / 2) {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
        $("#modalImage").attr("src", $(lists[lists.length - 1]).find('img').attr("src"));
    } else {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
        $("#modalImage").attr("src", $(lists[1]).find('img').attr("src"));
    }
  });

  $(".close").click(function () {
    $(".modal").hide();
  });

  function showModal() {
    const imageUrl = $(".galery_imgs__img img").attr("src");
    $("#modalImage").attr("src", imageUrl);
    $(".modal").show();
  }
});