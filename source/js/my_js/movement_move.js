//点击【移动】切换至move界面
$("#movement_container").on("mousedown","#movement_move",function(){
	movement("move")
})

function movement_to_move(){
	//修改title
	$("#camera_top").html("移动");
	//仅显示显示相应的div
	$(".movement").children().hide()
	$(".movement").show()

	$(".move").show()

	print_log("你寻觅前方……")

}


//点击【进入】键
$("#jianjie").on("mousedown",".map_enter",function(){
	var id = $(this).data("id")
	move_to_area(All_entity[id])
})
//前往某一地点
function move_to_area(area){
	print_log("你来到了" + make_log_span(area))
	if(area["name"] == "城镇"){
		move_to_city()
	}
	if(area["type"] == "野外"){
		move_to_outside(area)
	}
}





//生成地图
var map
function make_map(areaData) {
	//将已有的地图清空
	$("#world_map").html("")
	if(areaData != null){
		map = areaData;
	}
	for(i in map){
		var area = map[i]
		//只显示已经解锁的地图
		if(area["locked"] == "false"){
			//如果这是起点,那么前面就不加箭头，并且从新的一行开始
			if(area["before"] == ""){
				$("#world_map").append('<div class="map_line">\
						<div id="'+area["id"]+'" class="map_div hover_black">'+area["name"]+'</div>\
					   </div>')
			}
			//否则就在前面加上箭头，并加入到before的后方
			else{
				var div = '<img src="./img/right_white.png">\
					   <div id="'+area["id"]+'" class="map_div hover_black">'+area["name"]+'</div>'
				var before = Object.keys(area["before"])
				//只有一个前置点
				if(before.length == 1){
					//加入对应的before后面
					$("#"+ before[0]).after(div)
				}
				else{
					console.log("多前置点还没有做捏。")
				}
			}
		}
	}
	
}

//解锁地图
function unlock_after(area){
	//将地图对应的下一张地图解锁
	after = Object.keys(area["after"])
	map[after]["locked"] = "false"
	make_map()
}
//地图信息展示
$("#world_map").on("mousedown",".map_div",function(){
	show_jianjie(All_entity[this.id])
})


//地图拖拽
$("#world_map").draggable({
	drag: function(event, ui) {
	    if (ui.position.left > 0 ){
	      	ui.position.left = 0;
	    }
	    if (ui.position.top >0){
	    	ui.position.top = 0
	    }
	}
})
