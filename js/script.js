
// スティッキーヘッダー
$(function(){
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight();
      fixedClass = 'fixed';
  
      // ★
  $win.on('load scroll', function() {
    var value = $(this).scrollTop();//スクロールした量。
    if ($win.width() > 768) {// 横幅が768px以上の時
      if (value > fvHeight) {// fvの高さを超えたとき。
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
    }
  });
});

// スライダー(slick.js)
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: true,//fadeIn,Outで画像が切り替わる。
  cssEase: 'linear'
});

// ハンバーガーメニュー
$('.burger-btn').on('click', function() {
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
  $('body').toggleClass('noscroll');
})