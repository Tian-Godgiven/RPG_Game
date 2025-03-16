import type { Entity } from "../../../../interface/entity/Entity";
import { printEntity, printLog } from "../../../information/logs";
import { changeScene } from "../scene";

//背包对象，以id:obj形式保存背包内的物品与道具
const packages:Record<string,Entity> = {}
//默认的Money对象，结构与Obj类似但是少了许多不必要的内容
const idleMoney = {
    id: "money_00001",
    name: "G",
    num:0,
    type:"货币",
    description: "用于衡量价值的东西，最好多来点"
};

packages[idleMoney.id] = idleMoney;


//切换到背包界面
export function changeToPackage(){
	//显示侧边栏
	$("#movement_right_right").show();
	//显示筛选栏
	$("#select_ability").show()

    //切换到界面
    changeScene("package","背包")

    //显示相应的部分，由于camera也是.movement，所以先隐藏其他的page
    $(".movement").children().hide()
    $(".movement").show()
    //显示package相关的所有内容
    $(".package").show()

    package_list(package)
    return_focusing_table($("#package_all_table"))//背包界面只有这一个表
    //默认选中“全部”一栏
    focusing_type = "all";
    change_package_table(focusing_type)
    printLog("你翻看背包……")
}

//生成背包的page,每次点进来就生成一下
//替换掉旧的,由于是替换，所以不能直接搞append，只好修改表的html了
function package_list(package){

	var table = document.createElement("table")
	var tbody = document.createElement("tbody")
		$(table).append(tbody)
	var tr_top = document.createElement("tr");
		$(tr_top).html('<td>\
		  				<div class="triangle2"></div>\
		  				<div>物品名</div>\
		  				<div>类型</div>\
		  				<div>数量</div>\
		  				</td>')
		$(table).append(tr_top)

		for(i in package){
		  	var name = package[i].name;
		  	var type = package[i].type;
		  	var num = package[i].num;

		  	//只显示数量大于0的
		  	if(num > 0){
			  	var id = package[i].id;

			  	if(type == "货币"){
			  		var tr = document.createElement("tr");
				  	$(tr).html('<td class="click_black">\
				  				<div class="triangle2"></div>\
				  				<div></div>\
				  				<div></div>\
				  				<div class="object_num">'+ num +'G</div>\
				  				</td>')
				  	tr.id=id;
				  	tr.type=type;
				  	tr.className="entity object";

				  	$(table).append(tr)

			  	}
			  	else{
				  	var tr = document.createElement("tr");
				  	$(tr).html('<td  class="click_black">\
				  				<div class="triangle2"></div>\
				  				<div class="object_name">'+ name +'</div>\
				  				<div class="object_type">'+ type +'</div>\
				  				<div class="object_num">x'+ num +'</div>\
				  				</td>')
				  	tr.id=id;
				  	tr.type=type;
				  	tr.className="entity object";

				  	$(table).append(tr)
			  	}
			}
		}
	$("#package_all_table").html($(table).html())
}


//点击背包的不同left_block,修改显示的信息,把不符合当前block对应的tr隐藏起来
var focusing_type//由于只有一个all表，那么在切换left_block时，按照对应的type进行操作
$("#movement_left").on("mousedown mouseenter",".package",function(){
	focusing_type = this.id.split("_")[1];
  	if(!change_package_table(focusing_type)){
  		return false
  	}
})

//用于package的select中
function return_package_focusing_type(){
	return focusing_type;
}
//同上，package_doms是当前选中的left_block所对应的entity种类，也就是当前left_block中的所有可显示元素
function return_package_doms(){
	var package_doms = $("#package_all_table").children().children().filter(function(){
		dom_type = this.id.split("_")[0];
		if(dom_type == focusing_type){
			return this;
		}
		else if(dom_type == ""){
			return this;
		}
	})
	return package_doms
}

//修改当前背包所聚焦的表，并生成当前表所对应的select_block
function change_package_table(type){

	var clicked = return_clicked()
	if(clicked == 1){
		return false;
	}

	if(type == "all"){
		$("#package_all_table").children().children().show()
		make_select_block("package_all")
			$('#select_block_smallInput').val("0");
			$('#select_block_bigInput').val("0");
	}
	else{
		package_doms = return_package_doms()
		$("#package_all_table").children().children().hide()
		package_doms.show()
		make_select_block("package_all")
			$('#select_block_smallInput').val("0");
			$('#select_block_bigInput').val("0");
	}
}

//点击背包里的物品，同样会在jianjie中显示信息
$(".package_page").on("mousedown",".entity",function(){
	var obj = packages[this.id]
	show_jianjie(obj)
})



//物品进入背包内时，将Obj对象和数量加入背包字典中,
export function getToPackage(obj:Entity,number:number){
	const inPackage =  packages[obj.id]
    //若之前没有这个对象，则要设定一下数量
	if(inPackage["num"] == null){
		packages[obj.id]["num"] = number
	}
	else{
		packages[obj.id]["num"] += number;
	}
	printLog('获得了' + printEntity(obj) + 'x'+ number)
}

//从背包内使用道具时，首先判断使用需求，满足时将obj对象的数量减少，若数量不足，则返回false
function use_from_package(target_id,obj_id,number){
	var obj = package[obj_id]
	var type = $("#package_use_top").html()
	//数量不足
	if(obj["num"] < number){
		printLog(printEntity(obj_id) + "的数量不足")
		return false
	}
	//数量足够则减少并更新数量栏的内容
	else{
		if(type == "装备"){
			var result = character_equip(target_id,obj_id)//令target装备obj
		}
		else if(type == "使用"){
			var result = item_effect(null,target_id,obj_id)//在背包内没有使用者，只有被使用者
		}

		//使用成功
		if(result == true){
			obj["num"] -= number
			$('#package_tables #'+obj_id+' .object_num').html("x"+obj["num"])
			return true;
		}
		//使用失败
		else{
			return false
		}
	}
}

var object
//点击背包内的block弹出【使用】框
	$("#package_all_table").on('mousedown',".object",function(){
		fold_select_block()
		//判断使用的object是什么类型，如果是装备则修改为【装备】，道具→【使用】，食品→【食用】
		if(this.id.split("_")[0] == "weapon" || this.id.split("_")[0] == "armer"){
			$("#package_use_top").html("装备")
		}
		else if(this.id.split("_")[0] == "item" ){
			$("#package_use_top").html("使用")
		}
		//使得这个使用框显示，并重置maxHeight，和clicked
		object = this
		$("#package_use").data("clicked","false")
		$("#package_use").css({
			display:"block",
			maxHeight:"24px",
			"bottom":"auto",
			"top":"auto"
		})
	    $("#package_use_targetsContainer").remove()
		//获取道具框的高度，并赋值给使用框
		$("#package_use").css("bottom",$("#movement_right").height()-$(this).offset().top+144-19.5)
		//令使用框的top颜色重置
		$("#package_use_top").css({
			"color":"black",
			"background-color":"white",
		})
	})
	//点击其他地方隐藏【使用框】
	$(document).on("mousedown", function(event) {
	  if(!$(event.target).closest("#package_use").length && !$(event.target).closest(".object").length) {
	    $("#package_use").css({
	    	display:"none",
			maxHeight:"28px",
	    })
	    $("#package_use").data("clicked","false")
	    $("#package_use_targetsContainer").remove()
	  }
	});

	//【使用】框被点击后向下展开使用对象，使用对象不会超出屏幕
	$("body").on('mousedown',"#package_use_top",function(){
		fold_select_block()
		var obj = object
		var useBlock = $("#package_use")
		if($(useBlock).data("clicked") == "true"){
			//使用框已经被点击时再进行点击，会收起目标框，并将top颜色变白底黑字
			$(useBlock).data("clicked","false");
			$("#package_use_targetsContainer").animate({ "height": 0}, 500,function(){
				$("#package_use_top").css({
					"color":"black",
					"background-color":"white"
				})
				$("#package_use_targetsContainer").remove()
			})
		}
		else{
			//使用框没有被点击，则生成并展开目标框，如果使用框位置过低，则向上展开(向上append目标框)
			//如果使用框位置足够高，则向下展开
			$(useBlock).data("clicked","true")
			$("#package_use_top").css({
				"color":"white",
				"background-color":"black"
			})
			//生成目标框
			var targetsContainer = $("<div></div>")
			targetsContainer.attr("id","package_use_targetsContainer")
			var targetsBlock = $("<div></div>")
			targetsBlock.attr("id","package_use_targets")

			//如果【使用框】在总框的上侧，则令目标框向下扩展,但是总高度不超过最下方
			if($("#package_use").offset().top <= 318){

				var targetsHeight = 0;
				var targets = ""
				for(i in team){
					targetsHeight +=26;
					var name = team[i]["name"];
					var id = i ;
					var target ='<div data-id="'+id+'" class="package_target"><div class="hover_black">\
										<div class="dashed_line"></div>\
										<div class="triangle2"></div>'+name+'\
									  </div></div>'
					targets += target
				}

				targetsBlock.html(targets)
				targetsContainer.html(targetsBlock)


				var Maxheight = $("#movement_right").offset().top + $("#movement_right").height() - $("#package_use").offset().top
				$("#package_use").css({
					"bottom":"auto",
					"top":$(obj).offset().top - 144 -9.5,
					"max-height":Maxheight - 3
				})
				$("#package_use").append(targetsContainer)
				$("#package_use_top").css("top","0px")
				$("#package_use_targetsContainer").animate({ "height": targetsHeight}, 500)

			}
			//否则，令目标框向上侧拓展，总高度也不会超过最上方
			else{

				var targetsHeight = 0;
				var targets = ""
				for(i in team){
					targetsHeight +=26;
					var name = team[i]["name"];
					var id = i ;
					var target ='<div data-id="'+id+'" class="package_target"><div class="hover_black package_target">\
										<div class="triangle2"></div>'+name+'\
										<div class="dashed_line"></div>\
									  </div></div>'
					targets += target
				}

				targetsBlock.html(targets)
				targetsContainer.html(targetsBlock)

				var Maxheight = $("#package_use").offset().top - $("#movement_right").offset().top -24
				$("#package_use").css({
					"bottom":$("#movement_right").height()-$(obj).offset().top+144-19.5,
					"top":"auto",
					"max-height":Maxheight - 5 
				})
				$("#package_use").prepend(targetsContainer)
				$("#package_use_top").css("bottom","0px")
				$("#package_use_targetsContainer").animate({ "height": targetsHeight}, 500)
			}

		}
	})

//点击使用按钮
	//1.对指定的目标装备对应武器or防具
	//2.对指定的目标使用对应道具，将对应的效果附加给对象
//但是都要先过一次use_from_package看看数量够不够
$("#package_use").on("mousedown",".package_target",function(){
	var obj_id = object.id
	var target_id = $(this).data("id")

	var type = $("#package_use_top").html()

	if(use_from_package(target_id,obj_id,1)){
		printLog(printEntity(target_id) + type + "了"+ printEntity(obj_id) +"x1")
	}

})

//把货币对象和物品对象拆开来调用
//获取到货币时，货币数量上升
export function getMoney(money:Entity|null,number:number){
    //没有指定货币对象时，获取默认的货币对象
	if(money == null){
		packages[idleMoney.id]["num"] += number;
		printLog("获得了"+number+printEntity(idleMoney))
	}
	else{
		packages[money.id]["num"] += number;
		printLog("获得了"+number+printEntity(money))		
	}
}
export function useMoney(number:number){
	if(number <= packages[idleMoney.id]["num"]){
		packages[idleMoney.id]["num"] -= number;
		printLog("消费了"+number+printEntity(idleMoney))
		return true;
	}
	else{
		printLog("余额不足")
		return false;
	}
}

//返回当前背包中的货币数量
function return_package_money(){
	return package[idleMoney.id]["num"];
}


var sortableEl = document.querySelector('#package tbody');

new Sortable(sortableEl, {
    animation: 500,
    ghostClass: 'blue-background-class',
    onStart:function (){
    	return_clicked("1")
	}
});



