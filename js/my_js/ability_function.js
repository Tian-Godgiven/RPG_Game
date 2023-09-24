weapon  = new Array()
armer  = new Array()
item  = new Array()
race = new Array()
area = new Array()
character = new Array()
window.All_entity= new Array()

//异步调用d3.csv(),通过csv文件生成对应的对象数据，使用商店名和对应商品的数据组生产商店清单
async function Read_entity(){

	await d3.csv("./datas/weapon.csv",function(data){
		smaller_dictionary_property(data)
		weapon[data.id]=data;
	});

	await d3.csv("./datas/armer.csv",function(data){
		smaller_dictionary_property(data)
		armer[data.id]=data;
	});

	await d3.csv("./datas/item.csv",function(data){
		smaller_dictionary_property(data)
		item[data.id]=data;
	});

	await d3.csv("./datas/race.csv",function(data){
		smaller_dictionary_property(data)
		race[data.id]=data;
	});

	await d3.csv("./datas/area.csv",function(data){
		smaller_dictionary_property(data)
		area[data.id]=data;
	});

	All_entity = $.extend({}, weapon, armer, item, race, area);

	await d3.csv("./datas/character.csv",function(data){
		smaller_dictionary_property(data)
		character[data.id]=data;
	});

	//意思是将后两者合并
	All_entity = $.extend(All_entity, character);

	var money = {
	  	id: "money_00001",
	  	name: "G",
	  	type:"货币",
	  	price:"1",
	  	description: "用于衡量价值的东西，最好多来点"
	};
	All_entity["money_00001"] = money;

//将物品生成给商店，后面的数字表示商店类型，例如魔具店和武器店的weapon
	shop_list("weaponShop",[weapon],1)
	shop_list("armerShop",[armer],1)
	shop_list("itemShop",[item],1)
	make_map(area)
	adventurer_list([character])


}

//将含有多个值的项分离，例如属性，系数等,同时id与相应的实体对象连接起来
function smaller_dictionary_property(data){
	for(big_property in data)
	{
		//连接id与实体对象
		if(big_property != "id"){
			if(data[big_property].indexOf("_")!=-1){
				if(data[big_property].indexOf(";")!=-1){
					var small_property = data[big_property].split(";")
					data[big_property]={}
					small_property.forEach(function(properties) {
				  		data[big_property][properties] = All_entity[properties];
					});
				}
				else{
					property = data[big_property]
					data[big_property]={}
					data[big_property][property] = All_entity[property]
				}	
			}
		}

		if (typeof data[big_property] === 'string' || Array.isArray(data[big_property])) {
			if(data[big_property].indexOf(":")!=-1){
				var small_property = data[big_property].split(";")
				data[big_property]={}

				small_property.forEach(function(properties) {
			  		var dic = properties.split(":")
			  		data[big_property][dic[0]]=dic[1]
				});
			}
			else if(data[big_property].indexOf(";")!=-1){
				var small_property = data[big_property].split(";")
				data[big_property]=[]
				small_property.forEach(function(properties) {
			  		data[big_property].push(properties);
				});
			}
		}
	}
}

//当前聚焦的表，主要给筛选select和购物篮buy_block使用
var focusing_table
function return_focusing_table(table){
	if(table != null){
		focusing_table = table;
	}
	return focusing_table;
}
//当前聚焦的区域，主要给返回return使用
var focsing_area
function return_focusing_area(area){
	if(area != null){
		focusing_area = area;
	}
	return focusing_area;
}

//隐藏元素及其所有的子元素
$.fn.hide_all = function(){
	$(this).find("*").hide()
	$(this).hide()
}
//显示元素及其所有的子元素，同时也要使得该元素的所有父div也show
$.fn.show_all = function(){
	$(this).parents().show()
	$(this).find("*").show()
	$(this).show()
}
