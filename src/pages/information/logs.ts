import type { Entity } from "../../interface/entity/Entity"
import { AllEntity } from "../../lib/hooks/ability_function"

export const logList:(string|string[])[] = []
//打印日志信息
export function printLog(text:string){
	logList.push(text)
}

//打印事物信息
export function printEntity(target:Entity){
    let id:string|null = null
	if(typeof target == "object"){
		id = target["id"]
	}
	else if(typeof target == "string"){
		id = target
	}
    if(id){
        const name = AllEntity[id]["name"]
        const span = '<span id="' + id + '"class="entity" >'+name+'</span>'
        return span;
    }
}

$("#logs").on("mousedown",".entity",function(){
	var entity = AllEntity[this.id]
	show_jianjie(entity)
})
