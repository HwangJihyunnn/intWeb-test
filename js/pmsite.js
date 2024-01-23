var w_w, w_h, re_resize_timer, scheight;

function resize(){
  clearTimeout(re_resize_timer);
  re_resize_timer = setTimeout(function(){ 
    w_w = $(window).width();
    w_h = $(window).height();
    if(w_w < 1000){
      $("#header .gnb").height(w_h);
    }else{
      $("#header .gnb").attr("style","");
      $("html").removeClass("open-menu");
    }
    if(w_w <= 720){
      $('#merit .pr-inner .pc .side-text:nth-child(2) p').html('체계적인 솔루션 시스템과<br>정돈된 UI로 원하는 모든<br>데이터를 한눈에 파악');
      $('#merit .pr-inner .pc .side-text:nth-child(3) p').html('취약점 진단/조치 포탈 서비스와<br>이력 관리를 통한 현행화 활동 및<br>보고서 생성 비용 절감');
      $('#merit .pr-inner .pc .side-text:nth-child(4) p').html('수많은 특허, 인증 보유.<br>GS 1등급 취득과 나라장터<br>등록으로 보증된 프로그램');
    }else{
      $('#merit .pr-inner .pc .side-text:nth-child(2) p').html('체계적인 솔루션 시스템과 정돈된 UI로<br>원하는 모든 데이터를 한눈에 파악');
      $('#merit .pr-inner .pc .side-text:nth-child(3) p').html('취약점 진단/조치 포탈 서비스와 이력 관리를 통한<br>현행화 활동 및 보고서 생성 비용 절감');
      $('#merit .pr-inner .pc .side-text:nth-child(4) p').html('수많은 특허, 인증 보유. GS 1등급 취득과<br>나라장터 등록으로 보증된 프로그램');
    }
    if(w_h > 945){
      $('.fullsections.full2 .full-inner .v-con').css('margin-top', '3%');
    }else{
      $('.fullsections.full2 .full-inner .v-con').css('margin-top', '0');
    }
  }, 100);
}

function scroll_height(){
  $(window).scroll(function(){
    var scheight = $(document).scrollTop();
    var endwait = $('#merit .pr-inner .pc').offset().top;
    
    parallax(window.scrollY);
    if(scheight > endwait - w_h){
      $("#merit .pr-inner .pc").removeClass('wait');
    }
  });
}

function parallax(scheight){
	var $front = $("#visual .front"),
      $mid = $("#visual img.mid"),
      $back = $("#visual img.back"),
      front_move_value_top,
      mid_move_value_top,
      back_move_value_top;

	front_move_value_top = scheight * 0.03;
	mid_move_value_top = scheight * 0.02;
	back_move_value_top = scheight * 0.05;
    
  $front.css({"transform": "translateY(-" + front_move_value_top + "%)"});
	$mid.css({"transform": "translateY(-" + mid_move_value_top + "%)"});
	$back.css({"transform": "translateY(" + back_move_value_top + "%)"});

}

$(function(){
  resize();
  scroll_height();

  $("#header .open-btn").click(function(){
    if(w_w < 1000){
      resize();
      $("html").toggleClass("open-menu");
    }
  });

  $("#header ul.nav .main-menu").each(function(){
    $(this).click(function(){
      if($(this).hasClass("open")){
        $(this).removeClass("open");
      }else{
        $("#header ul.nav .main-menu").removeClass("open");
        $(this).addClass("open");
      }
    });
  });

});

$(window).load(function(){
  resize();
});

$(window).resize(function(){
  resize();
});