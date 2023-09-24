//存放被可回溯的jianjie的id
var undo_list =[]
//存放可以重做的jianjie的id
var redo_list=[]

//简介栏中的entity可以被进一步点击并生成覆盖的jianjie
$("#jianjie").on('mousedown',".entity",function(){
	var entity = All_entity[this.id]
	show_jianjie(entity)
})

//jianjie回溯
$("#jianjie_container").on("mousedown","#jianjie_undo",function(){
	if(undo_list.length==1){
		return false
	}
	if(undo_list.length>21){
		undo_list.shift()
	}
	//回溯时，将当前这个页面的id给redo_list
	redo_list.push(undo_list.pop())
	//Pop出来的第二个才是上一个页面的id
	var id = undo_list.pop()
	var entity = All_entity[id]
	show_jianjie(entity)
})

//jianjie重做
$("#jianjie_container").on("mousedown","#jianjie_redo",function(){
	if(redo_list.length==0){
		return false
	}
	if(redo_list.length>20){
		redo_list.shift()
	}
	//重做时，当前这个页面的Id其实已经在undo_list里面了，所以直接把redo的id给undo
	var id = redo_list.pop()
	var entity = All_entity[id]
	show_jianjie(entity)
})


//将entity对象的信息显示在简介栏中
function show_jianjie(entity){

	var id = entity.id;
	if(undo_list.includes(id)){
		index = undo_list.indexOf(id);
		undo_list.splice(index,1)
	}
	undo_list.push(id)

	if(undo_list.length <= 1){
		$("#jianjie_undo").css("background-color","white")
		$("#jianjie_undo img").attr("src","./img/back.png")
	}
	else{
		$("#jianjie_undo").css("background-color","black")
		$("#jianjie_undo img").attr("src","./img/back_white.png")
	}

	if(redo_list.length <= 0){
		$("#jianjie_redo").css("background-color","white")
		$("#jianjie_redo img").attr("src","./img/forward.png")
	}
	else{
		$("#jianjie_redo").css("background-color","black")
		$("#jianjie_redo img").attr("src","./img/forward_white.png")
	}

	if(entity != null){
		var type = id.match(/(\w+)_\w+/)[1];

		//如果名字太长了，就缩短一点
		if(entity.name.length>6){
			$("#entity_name").css("transform","scaleX(0.8)");
		}
		else{
			$("#entity_name").css("transform","scaleX(1)");
		}

		$("#entity_name").html("【"+entity.name+"】");
		switch(type) {
		  case "weapon":
		    show_jianjie_weapon(entity);break;
		  case "armer":
		    show_jianjie_armer(entity);break;
		  case "item":
		    show_jianjie_item(entity);break;
		  case "money":
		    show_jianjie_money(entity);break;
		  case "character":
		    show_jianjie_character(entity);break;
		  case "race":
		    show_jianjie_race(entity);break;	
		  case "area":
		    show_jianjie_area(entity);break;	    
		  default:
		    break;
		}
	}
	else{
		$("#entity_name").html(" ")
		$("#jianjie").html(' ')
	}
}

function show_jianjie_weapon(obj){
	$("#jianjie").html('\
						 <div class="entity_type">\
							类型：'+obj.type+'</br>\
							穿持：'+obj.handed+'<br>\
							价值：'+obj.price+'\
						</div>\
						<div class="dashed_line"></div>\
						<div class="entity_bonus">\
							武器性能：'+obj.weapon_bonus+'<br>\
							防御性能：'+obj.defend_bonus+'<br>\
							装备影响：'+obj.impact+'<br>\
							装备需求：'+obj.requirement+'\
						</div>\
						<div class="dashed_line"></div>\
						<div class="entity_effect">\
							词条：'+obj.entry+'<br>\
							效果：'+obj.effect+'</div>\
							<div class="dashed_line"></div>\
							<div class="entity_description">\
							介绍：'+obj.description+'\
							</div>')
}

function show_jianjie_armer(obj){
	$("#jianjie").html('\
						 <div class="entity_type">\
							类型：'+obj.type+'</br>\
							价值：'+obj.price+'\
						</div>\
						<div class="dashed_line"></div>\
						<div class="entity_bonus">\
							装备性能：'+obj.bonus+'<br>\
							装备影响：'+obj.impact+'<br>\
							装备需求：'+obj.requirement+'\
						</div>\
						<div class="dashed_line"></div>\
						<div class="entity_effect">\
							词条：'+obj.entry+'<br>\
							效果：'+obj.effect+'</div>\
							<div class="dashed_line"></div>\
							<div class="entity_description">\
							介绍：'+obj.description+'\
							</div>')
}

function show_jianjie_item(obj){
	$("#jianjie").html('\
						 <div class="entity_type">\
							类型：'+obj.type+'</br>\
							价值：'+obj.price+'\
						</div>\
						<div class="dashed_line"></div>\
						<div class="entity_bonus">\
							道具性能：'+obj.bonus+'<br>\
							使用需求：'+obj.requirement+'\
						</div>\
						<div class="dashed_line"></div>\
						<div class="entity_effect">\
							词条：'+obj.entry+'<br>\
							效果：'+obj.effect+'</div>\
							<div class="dashed_line"></div>\
							<div class="entity_description">\
							介绍：'+obj.description+'\
							</div>')
}

function show_jianjie_money(obj){
	$("#jianjie").html('\
						 <div class="entity_type">\
							类型：'+obj.type+'</br>\
						</div>\
							<div class="dashed_line"></div>\
							<div class="entity_description">\
							介绍：'+obj.description+'\
							</div>')
}

function show_jianjie_race(obj){
	$("#jianjie").html('\
						<div class="entity_bonus">\
							加成：'+obj.bonus+'<br>\
							限制：'+obj.limit+'\
						</div>\
						<div class="dashed_line"></div>\
						<div class="entity_description">\
						介绍：'+obj.description+'\
						</div>')
}

function show_jianjie_area(obj){
	$("#jianjie").html('\
						 <div class="entity_type">\
							类型：'+obj.type+'</br>\
							状态：</br>\
						</div>\
							<div class="dashed_line"></div>\
						<div class="entity_description">\
							介绍：'+obj.description+'<br>\
							信息：</br>\
						</div>\
						<div data-id="'+obj["id"]+'" class="map_enter hover_black">进入\
							</div>')
}

//num指的是这个data要以多少列为一行
//用于生成数个列组成一行的dom，例如:"力量：2    体质：1"
function set_multiline_dom(datas,num){
	var setted = ""
	var i = 0;
	//遍历datas中的每一个值
	for(p in datas){
		i+=1
		//i作为指示器，生成Num列
		if(i<num){
				var the_data = p+"："+datas[p]+"&nbsp&nbsp"
		}
		//一行的最后一列，换行了
		else{
				var the_data = p+"："+datas[p]+"<br>"
			//换行
			i=0;
		}
		//把对象加入结果中
		setted += the_data
	}
	return setted;
}

//生成含有entity对象的dom元素
function set_entity_dom(data,num){
	var div = "<div>"
	for(i in data){
		if(i == "0"){
			return false
		}
		var id = i;
		var name = All_entity[i]["name"]
		var inner_div = '<div id="'+id+'" class="entity">'+name+'</div>'
		div+=inner_div
	}
	div+="</div>"
	return div
}

function show_jianjie_character(character){

	var status=set_multiline_dom(character.status,2)
	var weapon=set_entity_dom(character["weapon"],1)
	var armer =set_entity_dom(character["armer"],1)

	$("#jianjie").html('\
						 <div>\
						 	种族：'+character.race+'</br>\
						 	性别：'+character.gender+'</br>\
							职业：'+character.profession+'</br>\
							等级：Lv.'+character.level+'\
						</div>\
						<div class="dashed_line"></div>\
						<div>\
							<div class="multi_line_container"><div>属性：</div><div>'+status+'</div></div>\
						</div>\
						<div class="dashed_line"></div>\
						<div>\
							<div class="multi_line_container"><div>武器：</div><div>'+weapon+'</div></div>\
							<div class="multi_line_container"><div>防具：</div><div>'+armer+'</div></div>\
						</div>\
						<div class="dashed_line"></div>\
						<div>\
							<div class="team_page">\
								<div>技能：</div>\
								<div class="team_page_wrap">'+character.physicalSkill+character.magicalSkill+'</div>\
							</div>\
							<div class="team_page_wrap">\
								<div>特性：</div>\
								<div>'+character.characteristic+'</div>\
							</div>\
						</div>\
							<div class="dashed_line"></div>\
							<div class="team_page">\
							<div>介绍：</div><div>'+character.description+'</div>\
							</div>')
}
