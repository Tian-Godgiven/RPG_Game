import type { Character } from "../../../../interface/entity/Character"
import type { Entity } from "../../../../interface/entity/Entity"
import { printLog } from "../../../information/logs/logs"
import { changeScene } from "../scene"

//小队对象，里面存储着当前小队人物，id:character的形式
const team:Record<string,Character> = {}

//显示到小队界面
export function changeToTeam(){
    if(Object.keys(team).length>1){
		printLog("你与队友交谈……")
	}
	else if(Object.keys(team).length>2){
		printLog("你与队友们交谈……")
	}
	else{
		printLog("你独自歇息……")
	}

	return_focusing_table()
    
    //切换到相应的界面
    changeScene("team","小队")

	//修改title
	$("#camera_top").html("小队");
	//显示相应的部分
	$(".movement").children().hide()
	$(".movement").show()

	$(".team").show()
}

//点击小队界面的left_block，显示对应人物的信息
$("#camera_movement #team").on("mousedown",".teamMember",function(){
	var talktexts = ["聊了一会儿","相谈甚欢","深入交流","聊着天","玩得很开心","吵了一架"
		,"争辩着话题","尴尬地聊了会儿天气","聊起了梦想","谈到家乡","说起习俗","聊了聊爱好"
		,"寒暄着近况","商议了工作","分析了敌人","整理了经验","善意地相互调侃","亲切地交流"
		,"共享情报","相互鼓励","谈论起最近的新闻","讨论着队伍","聊到家人","聊了聊羞羞的话题"]
	var theText = talktexts[Math.floor(Math.random() * talktexts.length)]
	printLog("你与"+printEntity(this.id)+ theText)

	show_jianjie_teamMember(character[this.id])
})

//小队人员详情界面
function show_jianjie_teamMember(character){
    //称号
        var title
        if(character["title"] != ""){
            title = "&lt;"+character["title"]+"&gt;"
        }
        else{
            title = "无称号"
        }
        title.className="team_page_title"
    //状态效果
        var effects = character["effect"]
        var effects_div = ""
        for(i in effects){
            if(i==0){
                effects_div = "无"
                break;
            }
            var effect = i;
            var stack = character["effect"][i]
            if(stack != undefined){
                effects_div += "<div>『"+effect+stack+"』</div>"
            }
            else{
                effects_div += "<div>『"+effect+"』</div>"
            }
        }
    //武器和防具
        var weapons = character["weapon"]
        var weapons_div=""
        if(typeof weapons === "object"){
            for(i in weapons){
                weapons_div += '<div id='+i+' class="entity">'+weapons[i]["name"]+'</div>'
            }
        }

        var armers = character["armer"]
        var armers_div=""
        if(typeof armers === "object"){
            for(i in armers){
                armers_div += '<div id='+i+' class="entity">'+armers[i]["name"]+'</div>'
            }	
        }
    //武器熟练度
        var proficiencies = character["proficiency"]
        var proficiencies_div = ""
        for(i in proficiencies){
            if(i==0){
                proficiencies_div = "无"
                break;
            }
            var proficiency = i;
            var num = character["proficiency"][i]
            if(num != undefined){
                proficiencies_div += "<div>["+proficiency+"："+num+"]</div>"
            }
            else{
                proficiencies_div += "<div>『"+proficiency+"』</div>"
            }
        }
    //技能
	var physical = character["physicalSkill"]
	var physical_div = ""
	if(typeof physical === "object"){
		for(i=0;i<physical.length;i++){
			physical_div += "<div>"+physical[i]+"</div>"
		}
	}
	else if(physical == ""){
		physcal_div = "<div>无</div>"
	}
	else{
		physical_div += "<div>"+physical+"</div>"
	}

	var magical = character["magicalSkill"]
	var magical_div = ""
	if(typeof magical === "object"){
		for(i=0;i<magical.length;i++){
			magical_div += "<div>"+magical[i]+"</div>"
		} 
	}
	else if(magical == ""){
		magical_div = "<div>无</div>"
	}
	else{
		magical_div += "<div>"+magical+"</div>"
	}
    //生成page
    makePage()

}

//生成page
function makePage(){
    $("#team_pages").html('\
		<div class="team_page_title"><div>'+title+'</div></div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_top">\
			<div  class="team_page">\
				<div>姓名：'+character["name"]+'</div><div>种族：'+character["race"]+'</div><div>性别：'+character["gender"]+'</div>\
			</div>\
			<div class="team_page">\
				<div>职业：'+character["profession"]+'</div><div>等级：lv.'+character["level"]+'</div><div>经验：'+character["exp"]+'</div>\
			</div>\
			<div class="team_page_effect team_page">\
				<div>状态：</div>\
				<div class="team_page">'+effects_div+'\
				</div>\
			</div>\
		</div>\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_status team_page">\
			<div>属性：</div>\
			<div>\
			<div class="team_page"><div>力量：'+character["status"]["力量"]+'</div><div>巧手：'+character["status"]["巧手"]+'</div></div>\
			<div class="team_page"><div>体质：'+character["status"]["体质"]+'</div><div>智慧：'+character["status"]["智慧"]+'</div></div>\
			<div class="team_page"><div>耐力：'+character["status"]["耐力"]+'</div><div>魔力：'+character["status"]["魔力"]+'</div></div>\
			<div class="team_page"><div>敏捷：'+character["status"]["敏捷"]+'</div><div>通灵：'+character["status"]["通灵"]+'</div></div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>	\
		\
		<div class="team_page_equipment">\
			<div class="team_page">\
				<div class="team_page">\
					<div>武器：</div>\
					<div>'+weapons_div+'</div>\
				</div>\
				<div class="team_page">\
					<div>防具：</div>\
					<div>'+armers_div+'</div>\
				</div>\
			</div>\
			<div class="team_page">\
				<div>熟练度：</div>\
				<div class="team_page_wrap">'+proficiencies_div+'</div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_coefficient">\
			<div class="team_page">\
				<div>物理：</div>\
				<div>\
					<div class="team_page">\
						<div>生命：</div><div>'+character["coefficient"]["生命"]+'</div>\
					</div>\
					<div class="team_page">\
						<div>攻击：</div><div>'+character["coefficient"]["攻击"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>防御：</div><div>'+character["coefficient"]["防御"]+'</div>\
					</div>\
				</div>\
			</div>\
			\
			<div class="team_page">\
				<div>魔法：</div>\
				<div>\
					<div class="team_page">\
						<div>法术量：</div><div>1/1</div>\
					</div>\
					<div class="team_page">\
						<div>法术强度：</div><div>'+character["coefficient"]["法术强度"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>咏唱时间：</div><div>'+character["coefficient"]["咏唱时间"]+'</div>\
					</div>\
				</div>\
			</div>\
			\
			<div class="team_page">\
				<div>特殊：</div>\
				<div>\
					<div class="team_page">\
						<div>活性：</div><div>'+character["coefficient"]["活性"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>乱舞：</div><div>'+character["coefficient"]["乱舞"]+'</div></div>\
					<div class="team_page">\
						<div>匠艺：</div><div>'+character["coefficient"]["匠艺"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>灵知：</div><div>'+character["coefficient"]["灵知"]+'</div></div>\
					</div>\
				</div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_skill">\
			<div class="team_page">\
				<div>战技：</div>\
				<div class="team_page_wrap">'+physical_div+'</div>\
			</div>\
			<div class="team_page">\
				<div>法术：</div>\
				<div class="team_page_wrap">'+magical_div+'</div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_description team_page">\
			<div>简介：</div>\
			<div>'+character["description"]+'</div>\
		</div>')
}




var character_id
//点击冒险者工会的人物，弹出是否招募
$("#adventurers_table").on('mousedown',".character",function(){
	character_id = this.id
	$("#adventurer_recruit").offset({top: $(this).offset().top + 1.6});
	$("#recruit_recruit").css({
		"color":"black",
		"background-color":"white",
		"display":"block"
	})
	$("#recruit_confirm").hide()
})

//点击别处隐藏【招募】按钮
$(document).on("mousedown", function(event) {
  if(!$(event.target).closest("#adventurer_recruit").length && !$(event.target).closest(".character").length) {
    $("#recruit_confirm").hide()
    $("#recruit_recruit").hide()
  }
});
	//点击【招募】按钮，显示【确认】按钮，修改【招募】按钮为黑底白字，【确认】按钮为白底黑字
	$("body").on('mousedown',"#recruit_recruit",function(event){
		$("#recruit_confirm").css({
			"color":"black",
			"background-color":"white"
		})
		$("#recruit_confirm").show()
		$("#recruit_recruit").css({
			"color":"white",
			"background-color":"black"
		})
	})
	//点击【确认】按钮，计算当前剩余金额与酬金，成功则显示“招募成功”，否则显示“招募失败”
	//另外，修改【确认】按钮为
	$("body").on('mousedown',"#recruit_confirm",function(event){
		var the_character = character_id
		$("#recruit_confirm").css({
			"color":"white",
			"background-color":"black"
		})
		var price = parseInt(AllEntity[the_character]["price"])
		if(use_money(price)){
			$("#recruit_confirm").hide()
			$("#recruit_recruit").html("招募成功")
			joinTeam(AllEntity[the_character])
			setTimeout(function(){
				$("#adventurers_table #"+the_character).remove()
			},500)
		}
		else{
			$("#recruit_confirm").hide()
			$("#recruit_recruit").html("余额不足")
		}
		setTimeout(function(){
			$("#recruit_recruit").hide()
			$("#recruit_recruit").html("招募")
		},500)
	})

//加入小队，把这个对象加入team，放入小队的left_block中
export function joinTeam(character:Character){
	const id = character["id"];
    //该对象必须不在小队内
	if(!(id in team)){
		team[id]=character
		const name = character["name"];
		const level = character["level"];
        //打印小队列表
		const tr = document.createElement("tr");
			$(tr).html('<td id="'+id+'" class="teamMember city_left_block .sortable_item"> \
							<div class="triangle"></div>'+name+' lv.'+level+'</td>')
			$("#camera_movement #team").append(tr)

		if(Object.keys(team).length>1){
			printLog(printEntity(id)+"成为了队友")
		}
		else{
			printLog(printEntity(id)+"组建了队伍")
		}
	}
}

//移出小队

$("#team_pages").on("mousedown",".entity",function(){
	var entity = AllEntity[this.id]
	show_jianjie(entity)
})

//拖动小队界面left_block来改变他们的相对位置
var sortableEl = document.querySelector('#camera_movement #team tbody');

new Sortable(sortableEl, {
    animation: 500,
    ghostClass: 'blue-background-class',
    onStart:function (){
    	return_clicked("1")
	}
});


