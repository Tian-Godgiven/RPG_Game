function print_log(text){
	var log = $("<div></div>")
	log.html(text)
	$("#logs").append(log)
	$("#logs").scrollTop($("#logs")[0].scrollHeight)
}

function make_log_span(target){
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
