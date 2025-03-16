import { AllEntity } from "../../../../lib/hooks/ability_function"
import { showJianjie } from "../../../information/jianjie"
import { printLog } from "../../../information/logs"
import { hideMovementOption } from "../../movement/movement"
import { changeScene } from "../scene"


//开始新游戏
export function startNewgame(){
    //隐藏行动选项
    hideMovementOption("all")
    //显示新游戏界面
    changeScene("newGame","？？？")
	printLog("你醒了……")
}

//初始角色数据
export const idleCharactor = {
    id:"character_000000",
    name:"你",
    num:1,
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

//当前的步骤计数
export let stepIndex = 0
//当前所持有的物品
export const hadList = [
    {id:"money_00001",num:50,worth:1},
    {id:"armer_000001",num:1,worth:1},
    {id:"weapon_010001",num:1,worth:1},
    {id:"weapon_010006",num:1,worth:1},
    {id:"item_00001",num:1,worth:1}
]
	
//下一页
export function nextPage(){
    stepIndex += 1;
}

//返回键
let return_counter = 0 //返回计数
const return_logs=["你记错了……","你弄错了……","你没弄对……","你搞错了……","你记混了……","你弄混了……","你后悔了吗……？"]
export function onReturn(){
    if(stepIndex==0){
        return false
    }
    //返回上一页
    stepIndex-=1;
    return_counter+=1

    //随机logs信息
    let log
    if(return_counter==9){
        log = "你似乎摇摆不定，或许你该沉下心来思考……"
    }
    else if(return_counter==19){
        log = "你完全无法做出决定，或许你该听天由命……？"
    }
    else{
        log = return_logs[Math.floor(Math.random() * return_logs.length)]
    }

    printLog(log)
}


/*printLog("你来到一座城镇。")
printLog("这儿看上去繁华而安宁。")
printLog("你的冒险将从此处开始。")
printLog("最终，你会到达……")*/
