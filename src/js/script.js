$(window).on('load', function () {
  gsap.to('#loader', 1, { y: '-100%' });
  gsap.to('#loader', 1, { opacity: 0 });
  gsap.to('#loader', 0, { display: 'none', delay: 1 });
  gsap.to('#header', 0, { display: 'block', delay: 1 });
  gsap.to('#navigation-content', 0, { display: 'none' });
  gsap.to('#navigation-content', 0, { display: 'flex', delay: 1 });
});
$(function () {
  $('.color-panel').on('click', function (e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
  });
  $('.colors a').on('click', function (e) {
    e.preventDefault();
    var attr = $(this).attr('title');
    console.log(attr);
    $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });
});
$(function () {
  $('.menubar').on('click', function () {
    gsap.to('#navigation-content', 0.6, { y: 0 });
  });
  $('.navigation-close').on('click', function () {
    gsap.to('#navigation-content', 0.6, { y: '-100%' });
  });
});

$(function () {
  $('#about-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
    gsap.to('#header', 0, { display: 'none' });
    gsap.to('#blog', 0, { display: 'none' });
    gsap.to('#portfolio', 0, { display: 'none' });
    gsap.to('#breaker', 0, { display: 'block' });
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 });
    gsap.to('#contact', 0, { display: 'none' });
    gsap.to('#breaker', 0, { display: 'none', delay: 2 });
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 });
    gsap.to('#about', 0, { display: 'block', delay: 0.7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
  $('#contact-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
    gsap.to('#header', 0, { display: 'none' });
    gsap.to('#about', 0, { display: 'none' });
    gsap.to('#blog', 0, { display: 'none' });
    gsap.to('#portfolio', 0, { display: 'none' });
    gsap.to('#breaker', 0, { display: 'block' });
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 });
    gsap.to('#breaker', 0, { display: 'none', delay: 2 });
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 });
    gsap.to('#contact', 0, { display: 'block', delay: 0.7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
  $('#portfolio-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
    gsap.to('#header', 0, { display: 'none' });
    gsap.to('#about', 0, { display: 'none' });
    gsap.to('#contact', 0, { display: 'none' });
    gsap.to('#blog', 0, { display: 'none' });
    gsap.to('#breaker', 0, { display: 'block' });
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 });
    gsap.to('#breaker', 0, { display: 'none', delay: 2 });
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 });
    gsap.to('#portfolio', 0, { display: 'block', delay: 0.7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
  $('#blog-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
    gsap.to('#header', 0, { display: 'none' });
    gsap.to('#about', 0, { display: 'none' });
    gsap.to('#portfolio', 0, { display: 'none' });
    gsap.to('#contact', 0, { display: 'none' });
    gsap.to('#breaker', 0, { display: 'block' });
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 });
    gsap.to('#breaker', 0, { display: 'none', delay: 2 });
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 });
    gsap.to('#blog', 0, { display: 'block', delay: 0.7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
  $('#home-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 });
    gsap.to('#header', 0, { display: 'none' });
    gsap.to('#about', 0, { display: 'none' });
    gsap.to('#portfolio', 0, { display: 'none' });
    gsap.to('#contact', 0, { display: 'none' });
    gsap.to('#blog', 0, { display: 'none' });
    gsap.to('#breaker', 0, { display: 'block' });
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 });
    gsap.to('#breaker', 0, { display: 'none', delay: 2 });
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 });
    gsap.to('#header', 0, { display: 'block', delay: 0.7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
});
$(function () {
  var body = document.querySelector('body');
  var $cursor = $('.cursor');
  function cursormover(e) {
    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.002,
    });
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1,
    });
  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: 0.6,
    });
  }
  $(window).on('mousemove', cursormover);
  $('.menubar').hover(cursorhover, cursor);
  $('a').hover(cursorhover, cursor);
  $('.navigation-close').hover(cursorhover, cursor);
});
