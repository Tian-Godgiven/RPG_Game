import type { Character } from "../../../../interface/entity/Character"
import type { Entity } from "../../../../interface/entity/Entity"
import { getFocusingTable } from "../../../../lib/hooks/ability_function"
import { printLog } from "../../../information/logs/logs"
import { changeScene } from "../scene"

//当前小队对象，里面存储着当前小队人物，id:character的形式
export const nowTeam:Record<string,Character> = {}

//显示小队界面
export function changeToTeam(){
    if(Object.keys(nowTeam).length>1){
		printLog("你与队友交谈……")
	}
	else if(Object.keys(nowTeam).length>2){
		printLog("你与队友们交谈……")
	}
	else{
		printLog("你独自歇息……")
	}

	getFocusingTable(null)
    
    //切换到相应的界面
    changeScene("team","小队")
}



// //显示小队人员详情界面
// export let nowCharater:Character
export function showTeamMember(character:Character){
    // //称号
    //     var title
    //     if(character["title"] != ""){
    //         title = "&lt;"+character["title"]+"&gt;"
    //     }
    //     else{
    //         title = "无称号"
    //     }
    //     title.className="team_page_title"
    // //状态效果
    //     var effects = character["effect"]
    //     var effects_div = ""
    //     for(let i in effects){
    //         if(i==0){
    //             effects_div = "无"
    //             break;
    //         }
    //         var effect = i;
    //         var stack = character["effect"][i]
    //         if(stack != undefined){
    //             effects_div += "<div>『"+effect+stack+"』</div>"
    //         }
    //         else{
    //             effects_div += "<div>『"+effect+"』</div>"
    //         }
    //     }
    // //武器和防具
    //     var weapons = character["weapon"]
    //     var weapons_div=""
    //     if(typeof weapons === "object"){
    //         for(let i in weapons){
    //             weapons_div += '<div id='+i+' class="entity">'+weapons[i]["name"]+'</div>'
    //         }
    //     }

    //     var armers = character["armer"]
    //     var armers_div=""
    //     if(typeof armers === "object"){
    //         for(let i in armers){
    //             armers_div += '<div id='+i+' class="entity">'+armers[i]["name"]+'</div>'
    //         }	
    //     }
    // //武器熟练度
    //     var proficiencies = character["proficiency"]
    //     var proficiencies_div = ""
    //     for(let i in proficiencies){
    //         if(i==0){
    //             proficiencies_div = "无"
    //             break;
    //         }
    //         var proficiency = i;
    //         var num = character["proficiency"][i]
    //         if(num != undefined){
    //             proficiencies_div += "<div>["+proficiency+"："+num+"]</div>"
    //         }
    //         else{
    //             proficiencies_div += "<div>『"+proficiency+"』</div>"
    //         }
    //     }
    // //技能
	// var physical = character["physicalSkill"]
	// var physical_div = ""
	// if(typeof physical === "object"){
	// 	for(i=0;i<physical.length;i++){
	// 		physical_div += "<div>"+physical[i]+"</div>"
	// 	}
	// }
	// else if(physical == ""){
	// 	physcal_div = "<div>无</div>"
	// }
	// else{
	// 	physical_div += "<div>"+physical+"</div>"
	// }

	// var magical = character["magicalSkill"]
	// var magical_div = ""
	// if(typeof magical === "object"){
	// 	for(i=0;i<magical.length;i++){
	// 		magical_div += "<div>"+magical[i]+"</div>"
	// 	} 
	// }
	// else if(magical == ""){
	// 	magical_div = "<div>无</div>"
	// }
	// else{
	// 	magical_div += "<div>"+magical+"</div>"
	// }

}

// var character_id
// //点击冒险者工会的人物，弹出是否招募
// $("#adventurers_table").on('mousedown',".character",function(){
// 	character_id = this.id
// 	$("#adventurer_recruit").offset({top: $(this).offset().top + 1.6});
// 	$("#recruit_recruit").css({
// 		"color":"black",
// 		"background-color":"white",
// 		"display":"block"
// 	})
// 	$("#recruit_confirm").hide()
// })

// //点击别处隐藏【招募】按钮
// $(document).on("mousedown", function(event) {
//   if(!$(event.target).closest("#adventurer_recruit").length && !$(event.target).closest(".character").length) {
//     $("#recruit_confirm").hide()
//     $("#recruit_recruit").hide()
//   }
// });
// 	//点击【招募】按钮，显示【确认】按钮，修改【招募】按钮为黑底白字，【确认】按钮为白底黑字
// 	$("body").on('mousedown',"#recruit_recruit",function(event){
// 		$("#recruit_confirm").css({
// 			"color":"black",
// 			"background-color":"white"
// 		})
// 		$("#recruit_confirm").show()
// 		$("#recruit_recruit").css({
// 			"color":"white",
// 			"background-color":"black"
// 		})
// 	})
// 	//点击【确认】按钮，计算当前剩余金额与酬金，成功则显示“招募成功”，否则显示“招募失败”
// 	//另外，修改【确认】按钮为
// 	$("body").on('mousedown',"#recruit_confirm",function(event){
// 		var the_character = character_id
// 		$("#recruit_confirm").css({
// 			"color":"white",
// 			"background-color":"black"
// 		})
// 		var price = parseInt(AllEntity[the_character]["price"])
// 		if(use_money(price)){
// 			$("#recruit_confirm").hide()
// 			$("#recruit_recruit").html("招募成功")
// 			joinTeam(AllEntity[the_character])
// 			setTimeout(function(){
// 				$("#adventurers_table #"+the_character).remove()
// 			},500)
// 		}
// 		else{
// 			$("#recruit_confirm").hide()
// 			$("#recruit_recruit").html("余额不足")
// 		}
// 		setTimeout(function(){
// 			$("#recruit_recruit").hide()
// 			$("#recruit_recruit").html("招募")
// 		},500)
// 	})

//加入小队，把这个对象加入team，放入小队的left_block中
export function joinTeam(character:Character){
	const id = character["id"];
    //该对象必须不在小队内
	if(!(id in nowTeam)){
		nowTeam[id]=character

		if(Object.keys(nowTeam).length>1){
			printLog(character,"成为了队友")
		}
		else{
			printLog(character,"组建了队伍")
		}
	}
}

// //移出小队



