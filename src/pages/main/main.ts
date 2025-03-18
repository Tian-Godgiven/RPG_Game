import { AllEntity, readEntity } from "../../lib/hooks/ability_function"
import { showJianjie } from "../information/jianjie/jianjie"
import { changeMovement } from "./movement/movement"

//读取对象
readEntity()

//切换行动模式
changeMovement("city")

//点击任意一个实体块显示对应的简介
$("body").on("mousedown",".entity",function(){
	const obj = AllEntity[this.id]
    showJianjie(obj)
})

//切换到主界面
export function changeToMain(){

}


