export const logList:(string|string[])[] = []
//打印日志信息
export function printLog(text:string){
	logList.push(text)
}

//打印事物信息
export function make_log_span(target){
	if(typeof target == "object"){
		id = target["id"]
	}
	else if(typeof target == "string"){
		id = target
	}

	var name = All_entity[id]["name"]
	var span = '<span id="' + id + '"class="entity" >'+name+'</span>'
	return span;
}

$("#logs").on("mousedown",".entity",function(){
	var entity = All_entity[this.id]
	show_jianjie(entity)
})
