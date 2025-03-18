
//切换行动框，在场景变换时调用，暂时分为两种：城镇，野外
function change_movement(area){
	if(area == "city"){
		$("#movement_container").html('\
				<div><div id="movement_move" 	class="movement_box">\
				<div class="movement_box_white">移动</div></div></div>\
				<div><div id="movement_team" 	class="movement_box">\
				<div class="movement_box_white">小队</div></div></div>\
				<div><div id="movement_package"  class="movement_box">\
				<div class="movement_box_white">背包</div></div></div>\
				<div><div id="movement_handbook" class="movement_box">\
				<div class="movement_box_white">图鉴</div></div></div>\
				<div><div id="movemet_setting"   class="movement_box">\
				<div class="movement_box_white">设置</div></div></div>\
				<div><div id="movement_return"   class="movement_box">\
				<div class="movement_box_white">返回</div></div></div>')
	}
	else if(area == "fight"){
		$("#movement_container").html('\
				<div id="fight_attack" class="movement_box">\
				<div class="movement_box_white">攻击</div></div>\
				<div id="fight_defend" class="movement_box">\
				<div class="movement_box_white">防御</div></div>\
				<div id="fight_skill"  class="movement_box">\
				<div class="movement_box_white">技能</div></div>\
				<div id="fight_item"   class="movement_box">\
				<div class="movement_box_white">道具</div></div>\
				<div id="fight_tactic" class="movement_box">\
				<div class="movement_box_white">战术</div></div>\
				<div id="fight_escape" class="movement_box">\
				<div class="movement_box_white">逃跑</div></div>')
	}
	else if(area == "outside"){
		$("#movement_container").html('\
				<div id="movement_fight" class="movement_box">\
				<div class="movement_box_white">战斗</div></div>\
				<div id="movement_escape" class="movement_box">\
				<div class="movement_box_white">探索</div></div>\
				<div id="movement_rest"  class="movement_box">\
				<div class="movement_box_white">休息</div></div>\
				<div id="movement_item"   class="movement_box">\
				<div class="movement_box_white">道具</div></div>\
				<div id="movement_tactic" class="movement_box">\
				<div class="movement_box_white">战术</div></div>\
				<div id="movement_move" class="movement_box">\
				<div class="movement_box_white">离开</div></div>')
	}
}



//切换各个界面的函数，根据调用对象的不同，调用不同的子函数
function movement(movement){

	var event = new Event('cityChanged');
	document.dispatchEvent(event);

	$(".camera").hide()

	switch(movement) {
		case "move":
			movement_to_move()
			break
	    case "package":
	      	movement_to_package();
	      	break;
	  	case "team":
	   		movement_to_team();
	    	break;
	    case "return":
	    	area = return_focusing_area()
	    	move_to_area(area)
	    	break;
	  	default:
	    // 如果 movement 的值不匹配，则执行此代码块。
	}
}










//movement的样式

//移动上去时，将白色的部分高度减小
$("#movement_container").on("mouseenter", ".movement_box", function() {
  var white_div = $(this).find(".movement_box_white");

  if ($(white_div).data("has-clone") != true) {
    var white_Offset = $(this).offset();
    var black_div = white_div.clone()
    $(black_div).attr("class","movement_box_black")
    $(black_div).appendTo(this);
    white_div.data("has-clone",true)
  }

  var Height = white_div.height();

		if (Height > 0) {
				white_div.stop(true,false).animate({height: 0}, 250, "swing",function() {
			});
		}
});

//移动出来时，将白色部分高度变大
$("#movement_container").on("mouseleave", ".movement_box", function() {

  var white_div = $(this).find(".movement_box_white");
  var Height = white_div.height();


      if (Height <= 128) {
        white_div.stop(true,false).animate({height: 128}, 250, "swing",function() {
        });
      
    }
  

});

