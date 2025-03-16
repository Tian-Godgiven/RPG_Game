import { changeToMove, moveToArea } from "../scene/move/move"
import { changeToPackage } from "../scene/package/package"
import { changeToTeam } from "../scene/team/team"

//切换行动框内容，在场景变换时调用，暂时分为两种：城镇，野外
type AreaName = "city"|"fight"|"outside"
export let nowMovements:{id:string,label:string,show:boolean,click:()=>void}[] = []
export function changeMovement(area:AreaName){
    //城市
	if(area == "city"){
		nowMovements = [
            {id:"move",label:"移动",show:true,click:()=>{changeToMove()}},
            {id:"team",label:"小队",show:true,click:()=>{changeToTeam()}},
            {id:"package",label:"背包",show:true,click:()=>{changeToPackage()}},
            {id:"",label:"图鉴",show:true,click:()=>{}},
            {id:"",label:"设置",show:true,click:()=>{}},
            {id:"return",label:"返回",show:true,click:()=>{moveToArea()}}
        ]
	}
    //战斗
	else if(area == "fight"){
        nowMovements = [
            {id:"",label:"攻击",show:true,click:()=>{}},
            {id:"",label:"防御",show:true,click:()=>{}},
            {id:"",label:"技能",show:true,click:()=>{}},
            {id:"",label:"道具",show:true,click:()=>{}},
            {id:"",label:"战术",show:true,click:()=>{}},
            {id:"",label:"逃跑",show:true,click:()=>{}},
        ]
	}
    //野外
	else if(area == "outside"){
        nowMovements = [
            {id:"",label:"战斗",show:true,click:()=>{}},
            {id:"",label:"探索",show:true,click:()=>{}},
            {id:"",label:"休息",show:true,click:()=>{}},
            {id:"",label:"道具",show:true,click:()=>{}},
            {id:"",label:"战术",show:true,click:()=>{}},
            {id:"",label:"离开",show:true,click:()=>{}},
        ]
	}
}

//隐藏指定的行动框选项
export function hideMovementOption(optionId:string){
    if(optionId=="all"){
        //隐藏所有选项
        nowMovements.forEach(option=>{
            option.show = false
        })
    }
    else{
        const option = nowMovements.find(option=>option.id == optionId)
        if(option)option.show = false
    }
}

//显示指定行动框选项
export function showMovementOption(optionId:string){
    if(optionId=="all"){
        //隐藏所有选项
        nowMovements.forEach(option=>{
            option.show = true
        })
    }
    else{
        const option = nowMovements.find(option=>option.id == optionId)
        if(option)option.show = true
    }
}