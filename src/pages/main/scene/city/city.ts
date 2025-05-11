import { getFocusingArea, getFocusingTable } from "../../../../lib/hooks/ability_function";
import { showJianjie } from "../../../information/jianjie/jianjie";
import { printLog } from "../../../information/logs/logs";
import { changeScene } from "../scene";

//在切换不同的city页面后，把锁定清空和简介栏清空
// document.addEventListener("cityChanged",function(){
// 	clicked = 0;
// 	$("#entity_name").html("")
// 	$("#jianjie_inner").html('')
// })

//切换到city界面,修改当前聚焦位置
export function moveToCity(){
    changeScene("city","城镇")
	getFocusingArea({
        id:"area_00001",
        name:"city",
        "num":1
    })
}

//city内的返回功能，点击返回shop页面
// $("#movement_container").on("mousedown","#movement_return",function(){
// 	if($("#camera_top").html() == "城镇"){
// 		return false
// 	}
// 	movement("return")
// 	printLog("你返回了城镇……")
// })

//点击商店界面的具体对象，使得information栏显示该物品的简介，并加入购物篮
// $(".shop_page").on("mousedown",".object",function(){
// 	var obj = AllEntity[this.id]
// 	showJianjie(obj)
// 	unfold_buy_block()
// 	add_into_buyBlock(obj)
// })

//针对有购物篮需求的商店
	// $("#city_shops").on("mousedown",".buyBlock",function(){
	// 	if($("#buy_block_ability").attr('folded') != "false"){
	// 		$("#buy_block_folded").show()
	// 	}
	// 	else{
	// 		$("#buy_block").show()
	// 	}
	// })
	// //针对有筛选需求的商店
	// $("#city_shops").on("mousedown",".selectBlock",function(){
	// 	if($("#select_ability").attr('folded') != "false"){
	// 		$("#select_block_folded").show()
	// 	}
	// 	else{
	// 		$("#select_block").show()
	// 	}
	// })

	// //没有这些需求的商店就隐藏
	// $("#city_shops").on("mousedown",".unbuyBlock",function(){
	// 	$("#buy_block").hide()
	// 	$("#buy_block_folded").hide()
	// })
	// $("#city_shops").on("mousedown",".unselectBlock",function(){
	// 	$("#select_block").hide()
	// 	$("#select_block_folded").hide()
	// })



//针对冒险者工会的功能
// $(".shop_page").on("mousedown",".character",function(){
// 	var character = AllEntity[this.id]
// 	showJianjie(character)
// })


//将csv的内容生成到不同的商店列表中
// function shop_list(shopName,ObjectDatas,num){
// 	for(i=0;i<ObjectDatas.length;i++){
// 		var fileData = ObjectDatas[i]
// 		for(j in fileData){
// 			if(fileData[j]["shop"] != num)
// 				{continue}
// 		  	var name = fileData[j].name;
// 		  	var type = fileData[j].type;
// 		  	var price = fileData[j].price;

// 		  	var id = fileData[j].id;

// 		  	var tr = document.createElement("tr");
// 		  	$(tr).html('<td class="click_black">\
// 		  				<div class="triangle2"></div>\
// 		  				<div>'+ name +'</div>\
// 		  				<div>'+ type +'</div>\
// 		  				<div>'+ price +'</div>\
// 		  				</td>')
// 		  	tr.id=id;
// 		  	$(tr).attr("class","entity object")
// 		  	$("#"+shopName+"_table").append(tr)
// 		  	$("#"+shopName+"_table").obj = fileData;
// 		}
// 	}
// }

//冒险者工会的商店栏
// function adventurer_list(CharacterDatas){
// 	for(i=0;i<CharacterDatas.length;i++){
// 		var fileData = CharacterDatas[i]
// 		for(j in fileData){

// 		  	var name = fileData[j].name;
// 		  	var profession = fileData[j].profession;
// 		  	var price = fileData[j].price;

// 		  	var id = fileData[j].id;

// 		  	var tr = document.createElement("tr");
// 		  	$(tr).html('<td class="click_black">\
// 		  				<div class="triangle2"></div>\
// 		  				<div>'+ name +'</div>\
// 		  				<div>'+ profession +'</div>\
// 		  				<div>'+ price +'</div>\
// 		  				</td>')
// 		  	tr.id=id;
// 		  	$(tr).attr("class","entity character")
// 		  	$("#adventurers_table").append(tr)
// 		  	$("#adventurers_table").obj = fileData;
// 		}
// 	}
// }


// //点击左侧商店会显示该商店相关的内容，并锁定当前block，防止误触
// 	$("#city_left").on("mousedown",".city_left_block",function (){

// 		clicked = return_clicked();
// 		if(clicked == 1){
// 			return false;
// 		}

// 			var shop_id = this.id;
// 			var table = $("#" + shop_id + "_table");

// 			$(".city_right_page").hide()
// 			table.show()

// 			getFocusingTable(table)
// 			clear_select()
// 			make_select_block(shop_id)
		
		
// 	})

// 	//鼠标滑动到block，也会显示商店内容
// 	$("#city_left").on("mouseenter",".shop",function (){

// 		clicked = return_clicked();

// 		if(clicked == 1){
// 			return false;
// 		}
// 		var shop_id = this.id;
// 		var table = $("#" + shop_id + "_table");

// 		$(".city_right_page").hide()
// 		table.show()
		
// 		getFocusingTable(table)
// 		clear_select()
// 		make_select_block(shop_id)
// 	})

//商店可拖动
var sortableEl = document.querySelector('#city_shops tbody');

// new Sortable(sortableEl, {
//     animation: 500,
//     ghostClass: 'blue-background-class',
//     onStart:function (){
//     	return_clicked("1")
// 	}
// });
