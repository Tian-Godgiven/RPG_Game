function move_to_outside(area){
	//将标题修改为该地区名
	$("#camera_top").html(area["name"])
	//将行动栏切换至outside
	change_movement("outside")
	//修改场中为outside类型
	$(".camera").hide()
	$("#camera_outside").show()
	show_team()
}

//在进入区域时，将小队显示在block上
function show_team(){
	for(character in team){
		var div = "<div>"
		character["name"]
	}
}