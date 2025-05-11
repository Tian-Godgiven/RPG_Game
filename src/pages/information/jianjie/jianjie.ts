import type { Area } from "../../../interface/entity/Area"
import type { Armer } from "../../../interface/entity/Armer"
import type { Character } from "../../../interface/entity/Character"
import type { Entity } from "../../../interface/entity/Entity"
import type { Item } from "../../../interface/entity/Item"
import type { Money } from "../../../interface/entity/Money"
import type { Race } from "../../../interface/entity/Race"
import type { Weapon } from "../../../interface/entity/Weapon"

//存放被可回溯的jianjie的id
export const undoList:string[] =[]
export let undoDisable:boolean = false
//存放可以重做的jianjie的id
export const redoList:string[]=[]
export let redoDisable:boolean = false

//将entity对象的信息显示在简介栏中
export const nowJianjie:{
    name:string,
    inner:({label:string,value:string}[])[]
} = {name:"",inner:[]} //当前显示的简介内容
export function showJianjie(entity:Entity|null){
    //清空简介内容
    if(entity == null){
        nowJianjie.inner=[];
        nowJianjie.name=""
        return;
    }

	const id = entity.id;
    //去除其在undo中的记录
	if(undoList.includes(id)){
		const index = undoList.indexOf(id);
		undoList.splice(index,1)
	}
    //先添加到撤销中
	undoList.push(id)
    undoDisable = undoList.length <= 1
    redoDisable = redoList.length <= 0

    //根据对象的类型获取对应的inner
    const type = entity.id
    // switch(type) {
    //     case "weapon":
    //         showWeapon(entity);break;
    //     case "armer":
    //         showArmer(entity);break;
    //     case "item":
    //         showItem(entity);break;
    //     case "money":
    //         showMoney(entity);break;
    //     case "character":
    //         showCharacter(entity);break;
    //     case "race":
    //         showRace(entity);break;	
    //     case "area":
    //         showArea(entity);break;	    
    //     default:
    //     break;
    // }
}

//获取简介内容
function getJianjieInner<T>(list:(keyof T)[][],dic:Record<keyof T,string>,obj:T){
    return list.flatMap(part=>{
        return part.map(item=>{
            return {
                label:dic[item],
                value:obj[item]
            }
        })
    })
}

// function showWeapon(obj:Weapon){
//     const list:(keyof Weapon)[][] = [
//         ["type","handed","price"],
//         ["weapon_bonus","defend_bonus","impact","requirement"],
//         ["entry","effect"],
//         ["description"]
//     ]
//     return getJianjieInner<Weapon>(list,weaponDic,obj)
// }

// function showArmer(obj:Armer){
//     const list:Record<string,(keyof Armer)[]> = {
//         type:["type","price"],
//         bonus:["bonus","impact","requirement"],
//         effect:["entry","effect"],
//         description:["description"]
//     }
// }

// function showItem(obj:Item){
//     const list:Record<string,(keyof Item)[]> = {
//         type:["type","price"],
//         bonus:["bonus","requirement"],
//         effect:["entry","effect"],
//         description:["description"]
//     }
// }

// function showMoney(obj:Money){
//     const list:Record<string,(keyof Money)[]> = {
//         type:["type"],
//         description:["description"]
//     }
// }

// function showRace(obj:Race){
//     const list:Record<string,(keyof Race)[]> = {
//         bonus:["bonus","limit"],
//         description:["description"]
//     }
// }

// function showArea(obj:Area){
//     const list:Record<string,(keyof Area)[]> = {
//         type:["type","state"],
//         description:["description","information"]
//     }

//     //地点有一个“进入”按钮
//     const a = `<div data-id="'+obj["id"]+'" class="map_enter hover_black">进入\
// 							</div>'`
// }


// function showCharacter(character:Character){
//     const list = [
//         ["race","gender","profession","level"],
//         ["status"],
//         ["weapon","armer"],
//         {技能:["physicalSkill","magicalSkill"]},

//     ]

//     //1.等级要加上"Lv." 2.属性+武器+防具要用multi_line_container,

// 	// const status=set_multiline_dom(character.status,2)
// 	// const weapon=set_entity_dom(character["weapon"],1)
// 	// const armer =set_entity_dom(character["armer"],1)
// }

//num指的是这个data要以多少列为一行
//用于生成数个列组成一行的dom，例如:"力量：2    体质：1"
// function set_multiline_dom(datas,num){
// 	const setted = ""
// 	const i = 0;
// 	//遍历datas中的每一个值
// 	for(p in datas){
// 		i+=1
// 		//i作为指示器，生成Num列
// 		if(i<num){
// 				const the_data = p+"："+datas[p]+"&nbsp&nbsp"
// 		}
// 		//一行的最后一列，换行了
// 		else{
// 				const the_data = p+"："+datas[p]+"<br>"
// 			//换行
// 			i=0;
// 		}
// 		//把对象加入结果中
// 		setted += the_data
// 	}
// 	return setted;
// }

// //生成含有entity对象的dom元素
// function set_entity_dom(data,num){
// 	let div = "<div>"
// 	for(let i in data){
// 		if(i == "0"){
// 			return false
// 		}
// 		const id = i;
// 		const name = AllEntity[i]["name"]
// 		const inner_div = '<div id="'+id+'" class="entity">'+name+'</div>'
// 		div+=inner_div
// 	}
// 	div+="</div>"
// 	return div
// }

