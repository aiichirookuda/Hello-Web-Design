$(function () {
  // スライドショー
  const count = $('#slide li').length;
  let current = 1;
  let next = 2;
  const interval = 6000;
  const duration = 2000;
  let timer;

  const slideTimer = () => {
    $(`#slide li:nth-child(${current}`).fadeOut(duration);
    $(`#slide li:nth-child(${next})`).fadeIn(duration);

    current = next;
    next = ++next;

    if (next > count) {
      next = 1;
    }

    $('#button li a').removeClass('target');
    $(`#button li:nth-child(${current}) a`).addClass('target');
  };

  $('#slide li:not(:first-child)').hide();

  timer = setInterval(slideTimer, interval);

  $('#button li a').click((e) => {
    next = $(e.currentTarget).html();

    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();

    return false;
  });

  // ナビ開閉
  $('.menu-trigger').click((e) => {
    $(e.currentTarget).toggleClass('active');
    $('.mainNav').slideToggle();
  });

  // フェードイン
  $('.fadeIn').hide().slideDown(8000);
});
