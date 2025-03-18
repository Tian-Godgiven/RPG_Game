
Read_entity()

change_movement("city")

$("body").on("mousedown",".entity",function(){
	var obj = All_entity[this.id]
	show_jianjie(obj)
})



