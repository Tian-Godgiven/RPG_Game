function item_effect(user,target,item_id){
	console.log(user,target,effect)
}

//造成伤害
//user和target都是id
function damage_current(user,target,damage_type,damage_num){

}

//回复生命

//获得生命

//施加效果

//减少效果

//降低 or 增加属性
function change_statu(target,statuName,how,num){
	//how决定了这个数值是加或者乘
	//num可以是小数（百分比），也可以是具体的数值，更可以是all
	if(num == "all"){
		num = 1
	}
	else if(isNaN(num)){
		return false
	}

	if(how == "+"){
		target["status"][statuName] += num;
	}
	else if(how == "*"){
		target["status"][statuName] *= num
	}
}
//降低 or 增加系数
function change_coefficient(target,coeName,how,num){
	//how决定了这个数值是加或者乘
	//num可以是小数（百分比），也可以是具体的数值，更可以是all

	//对于一些系数，Num更常是：+x/+y的形式
	if(isNaN(num)){
		var num_front = parseInt(num.split("/")[0])
		var num_back = parseInt(num.split("/")[1])

		var chara_front = parseInt(target["coefficient"][coeName].split(/[-/]/)[0])
		var chara_back = parseInt(target["coefficient"][coeName].split(/[-/]/)[1])

		if(how == "+"){
			chara_front += num_front;
			chara_back += num_back
		}
		else if(how == "*"){
			chara_front *= num_front;
			chara_back *= num_back
		}
		if(coeName == "生命"){
			target["coefficient"][coeName] = chara_front+"/"+chara_back
		}
		else{
			target["coefficient"][coeName] = chara_front+"-"+chara_back
		}
	}
	else{
		if(how == "+"){
			target["coefficient"][coeName] += num;
		}
		else if(how == "*"){
			target["coefficient"][coeName] *= num
		}
	}

	console.log(target)
}

//操作行动
