function character_equip(character_id,equipment_id){
	var character = team[character_id];
	var equipment = AllEntity[equipment_id];
	//判断是否满足requirment
	var result = status_requirement(character_id,equipment_id)
	if(result == true){
		//如果是武器
		if(equipment_id.split("_")[0] == "weapon"){
			//首先判断单位能否继续装备（判断单位的handed和武器的handed）
			var handed = equipment["handed"]
			var hand = character["hand"]
			//如果不能，则提示替换
			if(hand < handed){
				printLog(printEntity(character_id)+"的武器数量已达上限，无法装备"+printEntity(equipment_id))
			}
			//否则修改单位的handed与武器
			else{
				character["hand"] -= handed;
				character["weapon"][equipment_id] = equipment;
			}
		}
		//如果是防具
		else if(equipment_id.split("_")[0] == "armer"){
		}
	}
	else{
		printLog("无法满足"+printEntity(equipment_id)+"的装备需求")
		return false
	}
}
//角色装备武器

//角色装备防具

//判断角色是否满足装备或者使用条件
//使用条件分为属性条件和特殊条件

//属性条件
function status_requirement(character_id,entity_id){
	var requirments = AllEntity[entity_id]["requirement"]
	if(requirments == "无"){
		return true;
	}
	//复数条件
	if(typeof requirments == "object"){
		for(i in requirments){
			var a = requirments[i];
			var a_name = a.replace(/\d+/g, '')
			var a_num = a.match(/\d+/g)
			//检索角色的属性是否能够满足这个需求,只要有一个不满足就false
			if(team[character_id]["status"][a_name] < a_num){
				printLog(printEntity(character_id)+"的"+a_name+"属性不足")
				return false
			} 
		}
		return true
	}
	else{
		var a = requirment
		var a_name = a.replace(/\d+/g, '')
		var a_num = a.match(/\d+/g)
		if(team[character_id]["status"][a_name] < a_num){
			printLog(printEntity(character_id)+"的"+a_name+"属性不足")
			return false
		} 
		else{
			return true
		}
	}
}

//修改角色属性

//修改角色系数

//武器绑定到角色身上，绑定的是id

//武器占据角色的1 handed 属性

//装备效果和装备词条

//防具不能重复