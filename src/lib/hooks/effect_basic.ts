import type { Character } from "../../interface/entity/Character";
import type { Entity } from "../../interface/entity/Entity";
// function item_effect(user,target,item_id){
// 	console.log(user,target,effect)
// }

// //造成伤害
// //user和target都是id
// function damage_current(user,target,damage_type,damage_num){

// }

//回复生命

//获得生命

//施加效果

//减少效果

//改变属性为指定值
export function changeStatus(target:Character,statuName:string,num:number){
	//num可以是小数（百分比），也可以是具体的数值，更可以是all
	target["status"][statuName] = num;
}
//改变系数的值，set表示设定，add表示加
export function setCoefficient(target:Character,coeName:string|[string,string],value:number|Record<string,number>){
    if(typeof coeName == "string"){
        target["coefficient"][coeName] = value;
    }
    else if(Array.isArray(coeName)&& typeof value == "number"){
        let tmp = target["coefficient"][coeName[0]]
        if(typeof tmp != "number"){
            const a = tmp
            a[coeName[1]] = value
        }
    }
}
export function addCoefficient(target:Character,coeName:string|[string,string],value:number){
    if(typeof coeName == "string"){
        if(typeof target["coefficient"][coeName] == "number")
        target["coefficient"][coeName] += value;
    }
    else if(Array.isArray(coeName)&& typeof value == "number"){
        let tmp = target["coefficient"][coeName[0]]
        if(typeof tmp != "number"){
            const a = tmp
            a[coeName[1]] += value
        }
    }
}

//操作行动
