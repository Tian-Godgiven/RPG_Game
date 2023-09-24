var clicked = 0;
function return_clicked(set){
	if(set == "1" || set == "0"){
		clicked = set
	}
	else{
		return clicked
	}
}

//city_left通用特效
	$(".left").on("mousedown",".city_left_block", function (){
		if(clicked == 1){
			$(".city_left_block .triangle").css("border-left-color","transparent");
			clicked = 0;
		}
		else{
			$(".city_left_block .triangle").css("border-left-color","white");
			clicked =1;
		}
		$(".city_left_block").css({
			"color":"black",
			"background-color":"white",
		})

		$(this).css({
			"color":"white",
			"background-color":"black",
		})
	})

	//鼠标滑动到block，也会显示商店内容
	$(".left").on("mouseenter",".city_left_block",function (){
		if(clicked == 1){
			return false;
		}

		$(".city_left_block").css({
			"color":"black",
			"background-color":"white",
		})

		$(this).css({
			"color":"white",
			"background-color":"black",
		})
	})

	$("body").on("mousedown mouseenter",".click_black",function (){

		$(".right .click_black").css({
			"color":"black",
			"background-color":"white",
		})

		$(this).css({
			"color":"white",
			"background-color":"black",
		})
	})


