import type { Area } from "../../../../interface/entity/Area"
import { changeMovement } from "../../movement/movement"
import { changeScene } from "../scene"

export function moveToOutside(area:Area){
	//将行动栏切换至outside
    changeMovement("outside")
	//修改场中为outside类型
    changeScene("outside",area.name)

	showTeam()
}

//在进入野外区域时，将小队显示在block上
function showTeam(){

}