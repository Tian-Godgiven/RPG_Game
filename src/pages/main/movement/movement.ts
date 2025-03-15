import { changeToMove, moveToArea } from "../../scene/move/move"
import { changeToPackage } from "../../scene/package/package"
import { changeToTeam } from "../../scene/team/team"

//切换行动框内容，在场景变换时调用，暂时分为两种：城镇，野外
type AreaName = "city"|"fight"|"outside"
export let nowMovements:{text:string,click:()=>void}[] = []
export function changeMovement(area:AreaName){
    //城市
	if(area == "city"){
		nowMovements = [
            {text:"移动",click:()=>{changeToMove()}},
            {text:"小队",click:()=>{changeToTeam()}},
            {text:"背包",click:()=>{changeToPackage()}},
            {text:"图鉴",click:()=>{}},
            {text:"设置",click:()=>{}},
            {text:"返回",click:()=>{moveToArea()}}
        ]
	}
    //战斗
	else if(area == "fight"){
        nowMovements = [
            {text:"攻击",click:()=>{}},
            {text:"防御",click:()=>{}},
            {text:"技能",click:()=>{}},
            {text:"道具",click:()=>{}},
            {text:"战术",click:()=>{}},
            {text:"逃跑",click:()=>{}},
        ]
	}
    //野外
	else if(area == "outside"){
        nowMovements = [
            {text:"战斗",click:()=>{}},
            {text:"探索",click:()=>{}},
            {text:"休息",click:()=>{}},
            {text:"道具",click:()=>{}},
            {text:"战术",click:()=>{}},
            {text:"离开",click:()=>{}},
        ]
	}
}
