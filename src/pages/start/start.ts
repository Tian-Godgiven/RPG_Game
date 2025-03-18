import { moveToCity } from "../main/scene/city/city"
import { getMoney } from "../main/scene/package/package"

//开始旧游戏 
export function startOldgame(){	
	moveToCity()
	getMoney(null,10000)
}