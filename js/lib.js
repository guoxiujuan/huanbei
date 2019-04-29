
$(document).ready(function($) {
	// 弹出框
	// $('.myfancy').click(function(){
	//     var _id = $(this).attr('href');
	//     $(_id).show();
	// });
	 
	$('.m-check').click(function(){
	    $(this).hide();
	});
	// 返回顶部
	$('.totop').click(function(){
	    $('body,html').animate({
	        scrollTop: 0
	    }, 500);
	    return false;
	});
	// 选项卡 鼠标点击切换
	$(".TAB_CLICK li").click(function(){
	  var tab=$(this).parent(".TAB_CLICK");
	  var con=tab.attr("id");
	  var on=tab.find("li").index(this);
	  $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
	  $(con).eq(on).show().siblings(con).hide();
	});

	$('.js-weixin').click(function(){
		$('body').addClass('open');
		$('.black-bg').addClass('open');
		$('.pop-weixin').addClass('open');
	});
	$('.js-down').click(function(){
		$('body').addClass('open');
		$('.black-bg').addClass('open');
		$('.pop-down').addClass('open');
	});

	$('.black-bg').click(function(){
		$('body').removeClass('open');
		$('.black-bg').removeClass('open');
		$('.pop-weixin').removeClass('open');
		$('.pop-down').removeClass('open');
	});


	
});