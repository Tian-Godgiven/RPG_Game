import { readEntity } from "../../lib/hooks/ability_function"

readEntity()

//切换行动模式
change_movement("city")

$("body").on("mousedown",".entity",function(){
	var obj = All_entity[this.id]
	show_jianjie(obj)
})



