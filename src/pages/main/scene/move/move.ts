import type { Area } from "../../../../interface/entity/Area";
import { getFocusingArea } from "../../../../lib/hooks/ability_function";
import { printLog } from "../../../information/logs/logs";
import { moveToCity } from "../city/city";
import { moveToOutside } from "../outside/outside";
import { changeScene } from "../scene";

//点击【移动】切换至move界面
export function changeToMove(){

    changeScene("move","移动")
	printLog("你寻觅前方……")

}

//点击【进入】键
// $("#jianjie_inner").on("mousedown",".map_enter",function(){
// 	var id = $(this).data("id")
// 	moveToArea(AllEntity[id])
// })

//前往某一地点
export function moveToArea(area?:Area){
    if(!area){
        area = getFocusingArea()
    }
	printLog("你来到了" , area)

    //前往城镇
	if(area["name"] == "城镇"){
		moveToCity()
	}
	if(area["type"] == "野外"){
		moveToOutside(area)
	}
}





//生成地图
let map:Area[] = []
function make_map(areaData:Area[]) {
	//将已有的地图清空
    map = []
	// $("#world_map").html("")
	if(areaData != null){
		map = areaData;
	}
	for(let area of map){
		//只显示已经解锁的地图
		if(area["locked"] === false){
			//如果这是起点,那么前面就不加箭头，并且从新的一行开始
			if(area["before"] == null){
				// $("#world_map").append('<div class="map_line">\
				// 		<div id="'+area["id"]+'" class="map_div hover_black">'+area["name"]+'</div>\
				// 	   </div>')
			}
			//否则就在前面加上箭头，并加入到before的后方
			else{
				var div = '<img src="./img/right_white.png">\
					   <div id="'+area["id"]+'" class="map_div hover_black">'+area["name"]+'</div>'
				var before = Object.keys(area["before"])
				//只有一个前置点
				if(before.length == 1){
					//加入对应的before后面
					// $("#"+ before[0]).after(div)
				}
				else{
					console.log("多前置点还没有做捏。")
				}
			}
		}
	}
	
}

//解锁地图
// function unlock_after(area:Area){
// 	//将地图对应的下一张地图解锁
// 	after = Object.keys(area["after"])
// 	map[after]["locked"] = "false"
// 	make_map()
// }
//地图信息展示
// $("#world_map").on("mousedown",".map_div",function(){
// 	showJianjie(AllEntity[this.id])
// })


//地图拖拽
// $("#world_map").draggable({
// 	drag: function(event, ui) {
// 	    if (ui.position.left > 0 ){
// 	      	ui.position.left = 0;
// 	    }
// 	    if (ui.position.top >0){
// 	    	ui.position.top = 0
// 	    }
// 	}
// })
