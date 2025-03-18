function start_newgame(){
	$(".camera").hide()
	$("#movement").children().children().children().hide()

	$("#camera_newgame").show()

	$("#camera_top").html("？？？")
	print_log("你醒了……")
	next_newgame_character_page()
}

var YOU = {
	id:"character_000000",
	name:"你",
	race:"",
	price:"无",
	gender:"",
	level:"1",
	exp:"0/5",
	status:{
			力量:0,
			体质:0,
			耐力:0,
			敏捷:0,
			巧手:0,
			智慧:0,
			魔力:0,
			通灵:0
		},
	coefficient:{
		生命:"5/5",
		攻击:"0-1",
		防御:"0-1",
		法术量:0,
		法术强度:"0-0",
		咏唱时间:0,
		活性:0,
		乱舞:0,
		匠艺:0,
		灵知:0,
	},
	hand:2,
	proficiency:"",
	effect:"",
	profession:"你",
	physicalSkill:"",
	magicalSkill:"",
	weapon:"",
	armer:"",
	characteristic:"",
	description:"你就是你，你还能是什么？"
}

var page_counter=0;

//下一页
function next_newgame_character_page(returned){

	$("#newgame_character").children().hide()
	$($("#newgame_character").children()[page_counter]).show()
	$("#newgame_character .newgame_character_choice").show()

	if(returned == true){
		return false
	}
	switch (page_counter) {
	    case 1:
	    	print_log("你是你。");
	    	show_jianjie(All_entity["race_00001"])
	      	break;
	    case 2:
	    	YOU["race"] = All_entity[$("#newgame_race_select").val()]["name"]
	      	print_log("你的种族是"+All_entity[$("#newgame_race_select").val()]["name"]+"。");
	      	break;  
	    case 3:
	    	YOU["gender"] = $('input:radio[name=gender]').filter(':checked').val()
	    	print_log("你是"+$('input:radio[name=gender]').filter(':checked').val()+"。")
	    	make_coefficient(YOU)
	    	break;  
	    case 4:

	    	var logs = "你"
	    	if(status_text.length >= 2){
	    		for(i = 0; i < status_text.length ; i++){
	    			if(i == status_text.length - 2){
	    				logs = logs + status_text[i] +"并且"
	    			}
	    			else if( i == status_text.length -1){
	    				logs = logs + status_text[i] + "。"
	    			}
	    			else{
	    				logs = logs + status_text[i] +"、"
	    			}
	    		}
	    	}
	    	else if(status_text.length == 0){
	    		return false
	    	}
	    	else{
	    		logs += status_text
	    	}
	    	print_log(logs)
	    	break;
	   	case 5:
	   		if(parseInt($("#what_you_had_balance #balance_num").html()) == 10){
	   			print_log("你一无所有。")
	   		}
	   		else{
	   			print_log("你随身携带着一些物品。")
	   		}
	   		break;
	   	case 6:
	   		var des = $("#description_of_you").val()
	   		if(des != ""){
		   		YOU["description"] = des
		   	}
	   		print_log("你的身世……这不重要。")
	   		All_entity[YOU.id] = YOU
	   		break;
	   	case 7:
	   		print_log("那就走吧……")
	   		//将选择的物品加入背包
	   		for(i in the_had){
	   			if(i.includes("money")){
	   				get_money(All_entity[i],the_had[i])
	   			}
	   			else{
	   				get_into_package(All_entity[i],the_had[i])
	   			}
	   		}
	   		//将YOU加入队伍
	   		join_team(YOU)
	   		//将Newgame_character隐藏并显示【移动】键
	   		$("#newgame_character").children().hide()
	   		$("#movement_move").show()
	    default:
	      	break;
	}
}

//确认键
var status_lock = 0
var balance_lock = false
$("#newgame_character_confirm").on("mousedown",function(){
	if(page_counter == 3){
		if(status_lock < 3){
		   	if(parseInt($("#status_of_you_inner #all_status_point").html()) > 0){
				print_log("你的能力不足，这会使你寸步难行……")
				status_lock += 1
				return false
			}
		}
		else if(status_lock == 3){
			print_log("骄兵必败……")
			status_lock = 0;
		}
	}
	if(page_counter == 4){
		if(balance_lock < 3){
		   	if(parseInt($("#what_you_had_balance #balance_num").html()) > 0){
				print_log("你仍有余裕，或许你该物尽其用……")
				balance_lock += 1
				return false
			}
		}
		else　if(balance_lock == 3){
			print_log("希望你不会后悔……")
			balance_lock = 0
		}
	}
	page_counter+=1;
	next_newgame_character_page(false)
})

//返回键
var return_counter=0
var return_logs=["你记错了……","你弄错了……","你没弄对……","你搞错了……","你记混了……","你弄混了……","你后悔了吗……？"]
$("#newgame_character_return").on("mousedown",function(){
	if(page_counter==0){
		return false
	}
	page_counter-=1;
	return_counter+=1
	var log = return_logs[Math.floor(Math.random() * return_logs.length)]
	if(return_counter==9){
		log = "你似乎摇摆不定，或许你该沉下心来思考……"
	}
	else　if(return_counter==19){
		log = "你完全无法做出决定，或许你该听天由命……？"
	}
	print_log(log)
	next_newgame_character_page(true)
})

//种族选项选中时，会在jianjie输出相关信息
$("#newgame_race_select").on("changed.bs.select", function(event) {
	var entity = All_entity[$(this).val()]
	show_jianjie(entity)
});

//输入姓名的小彩蛋
var timer
var input_counter=0
$("#WhoAreYou_input").on("input",function(){
    const inputValue = $(event.target).val();

    if (timer !== null) {
        clearTimeout(timer);
    }

    if(input_counter<5){
	    timer = setTimeout(function() {
	        change_to_you()
	    }, 1000);
	}
	else{
		timer = setTimeout(function() {
	        change_to_you_plus()
	    }, 1000);
	}
})
//配套使用
function change_to_you(){
	input_counter+=1;
	const typed = new Typed("#WhoAreYou_input", {
	  strings: ["你"],
	  typeSpeed: 50,
	  backSpeed: 100,
	});

	typed.start();
}
//同上
function change_to_you_plus(){
	input_counter=0;
	const typed = new Typed("#WhoAreYou_input", {
	  strings: ["你就是你，还能是什么？","你"],
	  typeSpeed: 50,
	  backSpeed: 100,
	});

	typed.start();
}

//属性点对应的描述词，由于分配数量多，可能有复数的描述词，所以用列表
var status_text = []
//加属性点，原理是点击plus和reduce修改属性点，并修改总属性点，同时，某个属性超过2后，增加对应的能力系数
$(".statu_up").on("mousedown",function(){
	var parent = $(this).parent()
	var statuName = parent.children().eq(0).html().slice(0,-1)

	var old = parseInt(parent.children(".statu_point").html())
	var old_all = parseInt($("#status_of_you_inner #all_status_point").html())

	if(old < 3 && old_all > 0){
		parent.children(".statu_point").html(old + 1)
		$("#status_of_you_inner #all_status_point").html(old_all - 1)
		change_statu(YOU,statuName,"+",1)

		//属性超过2后，修改能力系数
		if(old+1 == 2){
			var coeName
			var coeNum = 1;
			switch(statuName){
				case "力量":
					coeName = "攻击"
					coeNum = "+0/+1"
					status_text.push("强而有力")
					break;
				case "体质":
					coeName = "生命"
					coeNum = "+2/+2"
					status_text.push("体格壮魄")
					break;
				case "耐力":
					coeName = "活性"
					status_text.push("坚韧不屈")
					break;
				case "敏捷":
					coeName = "乱舞"
					status_text.push("精准灵敏")
					break;
				case "巧手":
					coeName = "匠艺"
					status_text.push("心灵手巧")
					break;
				case "智慧":
					coeName = "法术强度"
					status_text.push("博古通今")
					coeNum = "+0/+1"
					break;
				case "魔力":
					coeName = "法术量"
					status_text.push("深及奥法")
					break;
				case "通灵":
					coeName = "灵知"
					status_text.push("诡秘莫测")
					break;

			}
			change_coefficient(YOU,coeName,"+",coeNum)
			make_coefficient(YOU)
		}
	}
})
//减属性点
$(".statu_down").on("mousedown",function(){
	var parent = $(this).parent()
	var statuName = parent.children().eq(0).html().slice(0,-1)

	var old = parseInt(parent.children(".statu_point").html())
	var old_all = parseInt($("#status_of_you_inner #all_status_point").html())

	if(old > 0){
		parent.children(".statu_point").html(old - 1)
		$("#status_of_you_inner #all_status_point").html(old_all + 1)
		change_statu(YOU,statuName,"+",-1)

		if(old-1 == 1){
			var coeName
			var coeNum = -1;
			switch(statuName){
				case "力量":
					coeName = "攻击"
					coeNum = "+0/-1"
					break;
				case "体质":
					coeName = "生命"
					coeNum = "-2/-2"
					break;
				case "耐力":
					coeName = "活性"
					break;
				case "敏捷":
					coeName = "乱舞"
					break;
				case "巧手":
					coeName = "匠艺"
					break;
				case "智慧":
					coeName = "法术强度"
					coeNum = "+0/-1"
					break;
				case "魔力":
					coeName = "法术量"
					break;
				case "通灵":
					coeName = "灵知"
					break;

			}
			change_coefficient(YOU,coeName,"+",coeNum)
			make_coefficient(YOU)
		}
	}
})
//生成系数栏
function make_coefficient(character){
	var body = ["生命","攻击","防御","活性","乱舞"]
	var soul = ["法术量","法术强度","咏唱时间","匠艺","灵知"]
	var body_div = ""
	var soul_div = ""
	for( i in character["coefficient"]){
		if(body.includes(i)){
			body_div += "<div>" + i + "：" + character["coefficient"][i] + "</div>"
		}
		else if(soul.includes(i)){
			soul_div += "<div>" + i + "：" + character["coefficient"][i] + "</div>"
		}
	}
	$("#coefficient_of_body_inner").html(body_div)
	$("#coefficient_of_soul_inner").html(soul_div)
}	

//初始道具选择，鼠标移入这些物品栏，会显示他们的jianjie，若点击后，则鼠标移动不会显示，直到下次点击
$("#what_you_want , #what_you_lost").on("mouseenter","div",function(){
		var id = this.id
		var obj = All_entity[id]
		show_jianjie(obj)
	})
//had字典，用来存放物品及其数量
var the_had = {
	"money_00001":50,
	"armer_000001":1,
	"weapon_010001":1,
	"weapon_010006":1,
	"item_00001":1
}
//将had的物品移入lost中，同时将计数器增加指定数值
$("#what_you_want").on("mousedown","div",function(){
	var num = parseInt($(this).find("span").html())
	var old_num = parseInt($("#what_you_had_balance #balance_num").html())
	$("#what_you_had_balance #balance_num").html(old_num + num)
	//同时将物品从had字典中移出或减少
	var obj_id = this.id
	var obj_num = parseInt($(this).html().match(/\d+/))
	if(the_had[obj_id] > obj_num){
		the_had[obj_id] -= obj_num
	}
	else{
		delete the_had[obj_id]
	}

	//换个位置
	$("#what_you_want").remove(this)
	$("#what_you_lost").append(this)
})
//将lost中的物品移入had中，同时将计数器减少指定数值，不小于0
//并加入had字典，最后确认时，将had中的物品移入背包
$("#what_you_lost").on("mousedown","div",function(){
	var num = parseInt($(this).find("span").html())
	var old_num = parseInt($("#what_you_had_balance #balance_num").html())
	if(old_num - num < 0 ){
		print_log("切忌贪婪。")
		return false
	}
	$("#what_you_had_balance #balance_num").html(old_num - num)

	//同时将物品加入had
	var obj_id = this.id
	var obj_num = parseInt($(this).html().match(/\d+/))
	if(obj_id in the_had){
		the_had[obj_id] += obj_num
	}
	else{
		the_had[obj_id] = obj_num
	}
	$("#what_you_lost").remove(this)
	$("#what_you_want").append(this)
})






/*print_log("你来到一座城镇。")
print_log("这儿看上去繁华而安宁。")
print_log("你的冒险将从此处开始。")
print_log("最终，你会到达……")*/