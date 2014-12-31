/* 20100624 star */
//页眉部分快速导航
function showQuick(aid,did){
    var obj = document.getElementById(aid);
    var divotherChannel=document.getElementById(did);
    obj.className = "menu_btn hover";
    divotherChannel.style.display = "block";
}
function hideQuick(aid,did){
    var divotherChannel=document.getElementById(did);
    var mydd=document.getElementById(aid);
    if(divotherChannel.style.display!="none"){
        divotherChannel.style.display="none";
        mydd.className="menu_btn";
    }
}



//切换城市
$(function(){
	$('.floating').children('a').click(function(){ if(!$(this).hasClass('go_top')){var id= $(this).attr('href');$(id)[0].scrollIntoView(); return false}})
	$(".item_cityArea em").click(function(){
        if(!$(this).parent().find(".cityArea_k").is(":animated")){//判断是否处于动画
            $(this).parent().find(".cityArea_k").fadeIn();
            $(this).parent().children("i").fadeIn();


            var $cityscroll = $(".cityArea_k .bot");
            var $cityAE_h = $("#cityAE").height();
            var $cityFJ_h = $("#cityFJ").height();
            var $cityKP_h = $("#cityKP").height();
            var $cityQW_h = $("#cityQW").height();
            var $cityXZ_h = $("#cityXZ").height();

            $('.city_a,.city_b,.city_c,.city_d,.city_e').click(function(){ //向上按钮绑定单击事件
                if(!$cityscroll.is(":animated")){//判断是否处于动画
                    $cityscroll.animate({ scrollTop  : 0} , 400);
                }
            })

            $('.city_f,.city_g,.city_h,.city_i,.city_j').click(function(){
                if(!$cityscroll.is(":animated")){
                    $cityscroll.animate({ scrollTop  : ($cityAE_h)} , 400);
                }
            })

            $('.city_k,.city_l,.city_m,.city_n,.city_p').click(function(){
                if(!$cityscroll.is(":animated")){
                    $cityscroll.animate({ scrollTop  : ($cityAE_h+$cityFJ_h)} , 400);
                }
            })

            $('.city_q,.city_r,.city_s,.city_t,.city_w').click(function(){
                if(!$cityscroll.is(":animated")){
                    $cityscroll.animate({ scrollTop  : ($cityAE_h+$cityFJ_h+$cityQW_h)} , 400);
                }
            })

            $('.city_x,.city_y,.city_z').click(function(){
                if(!$cityscroll.is(":animated")){
                    $cityscroll.animate({ scrollTop  : ($cityAE_h+$cityFJ_h+$cityKP_h+$cityQW_h)} , 400);
                }
            })


            return false;

        }
    })
//    $(".cityArea_k .tt a).click(function(){
//        $(".item_cityArea .selectCity").html($(this).html());
//        $(".cityArea_k").fadeOut();
//        $(".item_cityArea i").fadeOut();
//	return false;
//    })
$(".cityAreaBoxCen ul li a,.cityArea_k .tt a").click(function(){
	$(".item_cityArea .selectCity").html($(this).html());
	$(".cityArea_k").fadeOut();
	$(".item_cityArea i").fadeOut();
//	return false;
})
    $(".cityArea_k .tt span").click(function(){
        $(".cityArea_k").fadeOut();
        $(".item_cityArea i").fadeOut();
        return false;
    })

    $(".cityAreaBox:last").css("border-bottom","none");
})


$(function(){
	var oFLoating = $('.floating'),
		 oBackTop = $('.go_top'),
		 xuanjing_sw,
		 browserScrollTop = $(window).scrollTop();
		 
	/*
	适配pad新加初始化判断
	
	if($(window).width() >= 1024){
		$('.floating').show();	
	}else{
		$('.floating').hide();
	}*/
	
	oBackTop.bind('click', function(){
		$("html, body").animate({
            scrollTop : 0
        }, 10);
        return false;
	})
	
	function xuanJing(){
		if ($('#XUANJINGTl').length>0 || $('#GUANCHUANTl').length>0 || $('#pf_banner').length>0) {
		//当有炫景广告的时候
			xuanjing_sw = 1;
		} else{
		//当没有炫景广告的时候	
			xuanjing_sw = 0;
		}
		//初始加载
		if(xuanjing_sw){
			//alert(3)
			oFLoating.css({ 
				top: "545px" 
			});
		} else{	
			//alert(4)
			oFLoating.css({ 
				top: "45px" 
			});
		}
	}
	
	clearTimeout(timerXuanJing);
	var timerXuanJing = setTimeout(xuanJing,2000);
	
	//浏览器宽度变化
	$(window).bind('resize', function(){
		var bowserWidth = $(window).width();
		if(bowserWidth >= '1024')	{
			$('.floating').show();	
		} else {
			$('.floating').hide();
		}
	});
	
	//滚动之后
	$(window).bind('scroll', function fnFloat(){
		var IE6 = $.browser.msie && ($.browser.version == '6.0');
		var	 browserScrollTop = $(window).scrollTop();
		if(xuanjing_sw){
			//ie6
			if(IE6){
				if(browserScrollTop >= 545){
					oFLoating.css({ 
						top: browserScrollTop + 5,
						position: "absolute" 
					});
				} else {
					oFLoating.css({ 
						top: "545px",
						position: "absolute" 
					});
				}
			} else {
				if(browserScrollTop >= 545){
					
					oFLoating.css({ 
						top: "5px",
						position: "fixed" 
					});
				} else {
					oFLoating.css({ 
						top: "545px",
						position: "absolute" 
					});
				}	
			}
			
		} else {
			//ie6
			if(IE6){
				
				if(browserScrollTop >= 45){
					oFLoating.css({ 
						top: browserScrollTop + 5,
						position: "absolute" 
					});
				}
			} else {
				if(browserScrollTop >= 45){
					
					oFLoating.css({ 
						top: "5px",
						position: "fixed" 
					});
				} else {
					oFLoating.css({ 
						top: "45px",
						position: "fixed" 
					});	
				}
			}	
		}
		
	});
	
	
})
/* 20100624 end */

$(function(){
	

	$(".city_nav em").mouseover(function(){
		$(this).find(".selCity").show();
	})
	$(".city_nav em").mouseout(function(){
		//alert("sdf");
		$(this).find(".selCity").hide();
		
	})
	
	//图片导航
	$(".boxr_2 img").hover(function(){
		$(this).css("opacity","0.8");								
	},function(){
		$(this).css("opacity","1");	
	})
	
	
	
	//tab最新开盘+商铺+写字楼+点击7日排行
	var timer1 =null;
	var timer2_1 = null;
	var timer2_2 = null;
	
	
	$(".tt_D span").mouseover(function(){
										 
			var tmp = $(this).index();
			var thisw = $(this);
			
		timer1 = setTimeout(function(){
			thisw.parent().find("span").removeClass("active");
			thisw.addClass("active");
			thisw.parent().parent().find(".table0").hide();
			thisw.parent().parent().find(".table0").eq(tmp).show();
			if(tmp)
			{
				thisw.parent().find(".more").show();
			}
			else
			{
				thisw.parent().find(".more").hide();
			}
		},300);
		
	})

	
	$(".tt_D span").mouseout(function()
	{
		clearTimeout(timer1);
	})
	
	$(".tt_D0 span").mouseover(function(){
										 
			var tmp = $(this).index();
			var thisw = $(this);
			
		timer1 = setTimeout(function(){
			thisw.parent().find("span").removeClass("active");
			thisw.addClass("active");
			thisw.parent().find(".more").hide();
			thisw.parent().find(".more").eq(tmp).show();
			
			thisw.parent().parent().find(".table0").hide();
			thisw.parent().parent().find(".table0").eq(tmp).show();
			
		},300);
		
	})
	$(".tt_D0 span").mouseout(function()
	{
		clearTimeout(timer1);
	})
	
	
	
	//tab热点资讯+购房资讯
	$(".tt_A span").mouseover(function(){
		var tmp = $(this).index();
		var thisw = $(this);
		timer1 = setTimeout(function(){
			thisw.parent().find("span").removeClass("active");
			thisw.parent().find(".more").hide();
			thisw.parent().find(".more").eq(tmp).show();
			
			thisw.addClass("active");
			thisw.parent().parent().find(".tabp_c").hide();
			thisw.parent().parent().find(".tabp_c").eq(tmp).show();							 
		},300);	
	})
	$(".tt_A span").mouseout(function()
	{
		clearTimeout(timer1);
	})
	
	
	//tab 找二手房
	$(".tt_E span").mouseover(function(){
		var tmp = $(this).index();
		var thisw = $(this);
		timer1 = setTimeout(function(){
			
			thisw.parent().find("span").removeClass("active");
			thisw.addClass("active");
			thisw.parent().parent().find(".esf_bc").hide();
			thisw.parent().parent().find(".esf_bc").eq(tmp).show();
			
		},300)
		
	})
	$(".tt_E span").mouseout(function()
	{
		clearTimeout(timer1);
	})
	
	//tab
	var timer2 =null;

	$(".tt_F span").mouseover(function(){
		var tmp = $(this).index();
		var thisw = $(this);
		timer2 = setTimeout(function(){
			thisw.parent().find("span").removeClass("active");
			thisw.addClass("active");
			thisw.parent().find(".more").hide();
			thisw.parent().parent().find(".luntan_list").hide();
			thisw.parent().parent().find(".luntan_list").eq(tmp).show();
			thisw.parent().find(".more").eq(tmp).show();
		},300);
	})

	
	$(".tt_F span").mouseout(function()
	{
		clearTimeout(timer2);
	})
	
	
	//link tab
	$(".links .hd h4").mouseover(function(){
		var tmp = $(this).index();
		var thisw = $(this);
		timer2 = setTimeout(function(){
			thisw.parent().find("h4").removeClass("active");
			thisw.addClass("active");
			$(".links .bd div").hide();
			$(".links .bd div").eq(tmp).show();
			
		},300)
		
	})
	$(".links .hd h4").mouseout(function(){
		
		clearTimeout(timer2);
	})
	
	//
	$(".pp_C li").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	})
	
	//对对碰tab
	$(".duiduipeng .rec_tt .a_all a").hover(function(){
												   
		var tmp = $(this).index();
		$(this).parent().find("a").removeClass("active");
		$(this).addClass("active");
		$(".pp_C ul").hide();
		$(".pp_C ul").eq(tmp).show();
		
	})
	
	//二手房评估
	$(".search_box em").click(function(){
									   
		if(!$(this).parent().find(".slideList").is(":animated")){//判断是否处于动画
				$(this).parent().find(".slideList").fadeIn();
				return false;
			}
	})
	$(".slideList a").click(function(){
		$(".search_box em").html($(this).html());
		$(this).parent(".slideList").fadeOut();
		return false;
	})
	$(document).click(function(){
		
		$(".slideList").fadeOut();
		
	})
	//搜索框
	$(".box_menu span").click(
		function () {		 
			if(!$(this).parent().find(".hide_box").is(":animated")){//判断是否处于动画
				$(this).parent().parent().find("span").removeClass("active");
				$(this).addClass("active");
				
				$(".hide_box").hide();
				$(this).parent().find(".hide_box").fadeIn();
				//$(".hide_box").not($(this).find(".hide_box")).fadeOut(0);
				return false;
			}			 
		});
	$(".hide_box").click(function(){
		return false;							  
	})
	
	$(".hide_box a").click(function(event){
		var text = $(this).html()
		var svalue = $(this).attr('val')
		$(this).parent().parent().parent().find("span").html(text).removeClass("active");
		//$(this).parent().parent("#select_list").find("input[type=hidden]").val(svalue);
		$(this).parent().parent().children("input[type=hidden]").val(svalue);
		$(this).parent().parent(".hide_box").fadeOut();
		$("input[name='title_addr']").val("请输入楼盘名或地址");
		return false;
	});
	$("#priceset").click(function(event){
		var low_price = $("#low_price").val();
		var top_price = $("#top_price").val();
		if (low_price>0 || top_price>0)
		{
			$(this).parent().parent().parent().find("span").text(low_price+"-"+top_price);
			$(this).parent().parent().children("input[type=hidden]").val(low_price+"－"+top_price);
		} else {
			$(this).parent().parent().parent().find("span").text("不限");
			$(this).parent().parent().children("input[type=hidden]").val("");
		}
		$(this).parent().parent().parent().find("span").removeClass("active");
		$(this).parent().parent(".hide_box").fadeOut();	
		return false;
	});
	
	$(document).click(function(event){
		$(".hide_box").fadeOut(200);
		$(".box_menu.newsbg .news .news_list").fadeOut();
		$(".box_menu span").removeClass("active");
	});
	
	
	$(".box_menu.newsbg .news span").click(function(){
		if(!$(this).parent().find(".hide_box").is(":animated")){
			
			$(this).parent().find(".news_list").fadeIn();
			
		}
	})
	
	$(".news_list a").click(function(){
			$(this).parent().parent().find("span").html($(this).html()).removeClass("active");
			var type = $(this).attr("id");
			if ("news" == type) {
				$("#searchgroup").attr("action", "http://search.focus.cn/search.php");
			} else if ("blog" == type) {
				$("#searchgroup").attr("action", "http://blogsearch.sogou.com/blog");
			}
			
	})
	
	$("#forum_list a").click(function(){
			$(this).parent().parent().find("span").html($(this).html()).removeClass("active");
			var type = $(this).attr("id");
			if ("forum" == type) {
				var action_url = $("#forum_action").val();
				$("#searchyezhugroup").attr("action", action_url);
				$("#query_keyword").attr("name", "title");
				$("#art_type").val("");
			} else if ("article" == type) {
				$("#searchyezhugroup").attr("action", "http://search.focus.cn/search.php");
				$("#query_keyword").attr("name", "query_keyword");
				$("#art_type").val("forum");
			}
			
	})
	
	$("#xinfang").click(function(){
		//alert($(this).position().left)
		var left = $(this).position().left+7;
		$(this).parent().find("a").removeClass("active");
		$(this).addClass("active");
		$(".search_menu").find(".box_menu").eq(0).show();
		$(".search_menu").find(".box_menu").eq(1).hide();
		$(".search_menu").find(".box_menu").eq(2).hide();
		$(".box_menu i").css("left",left);
		$(".search_m_box .box3").hide();
		$(".search_m_box .box3").eq(0).show();
		return false;
	})
	$("#xinwen").click(function(){
		
		var left = $(this).position().left+6;
		$(this).parent().find("a").removeClass("active");
		$(this).addClass("active");
		$(".search_menu").find(".box_menu").eq(0).hide();
		$(".search_menu").find(".box_menu").eq(1).show();
		$(".search_menu").find(".box_menu").eq(2).hide();
		$(".box_menu i").css("left",left);
		$(".search_m_box .box3").hide();
		$(".search_m_box .box3").eq(1).show();
		return false;
	})
	$("#luntan").click(function(){
								
		var left = $(this).position().left+5;
		$(this).parent().find("a").removeClass("active");					
		$(this).addClass("active");
		$(".search_menu").find(".box_menu").eq(0).hide();
		$(".search_menu").find(".box_menu").eq(1).hide();
		$(".search_menu").find(".box_menu").eq(2).show();
		$(".box_menu i").css("left",left);
		$(".search_m_box .box3").hide();
		$(".search_m_box .box3").eq(2).show();
		return false;
	})

//	$(".tabp_cL .list14:gt(6)").css("margin-left","5px")
	
})
//处理所有文本框
$(function(){
	 $(":input[type=text]").focus(function(){
	 $(this).addClass("focus");
	 if($(this).val() ==this.defaultValue){  
                  $(this).val("");
				  $(this).css("color","#333");
 } 
}).blur(function(){
		$(this).removeClass("focus");
		if ($(this).val() == '') {
						$(this).val(this.defaultValue);
						$(this).css("color","#adadad");
		 }
		});
})

//楼盘推荐
$(function(){
	$(".recommend0713 .rec_tt .a_all b").hover(function(){											   
		var tmp = $(this).index();
		$(this).parent().find("b").removeClass("active");
		$(this).addClass("active");
		$(".pp_K ul").hide();
		$(".pp_K ul").eq(tmp).show();
		
	})
});

$("#query").val("请输入关键字");
function newsSearchSubmit() {
	if ($("#query").val() == "请输入关键字") {
		$("#query").val("");
	}
	$("#searchgroup").submit();
}