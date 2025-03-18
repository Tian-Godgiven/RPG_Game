<div id="buy_block_ability">
    <div id="buy_block_folded">
        <img src="./img/buy_block_folded.png"></div>
    <div id="buy_block">
        <div class="buy_block_top">
            购物篮
            <div id="buy_block_clear"><img src="./img/clear.png"></div>
            <div id="buy_block_fold"><img src="./img/up.png"></div>
        </div>
        <div class="dashed_line"></div>

        <div id="buy_block_inner"></div>
        <div class="dashed_line"></div>

        <div class="buy_block_bottom">
            <div>余额：<div id="buy_block_packagevalue"></div></div>
            <div>总价：<div id="buy_block_totalprice">0G</div></div>
        </div> 

        <div id="buy_block_confirm" class="hover_black">确认</div>
    </div>
</div>

<script lang='ts'>
//购物篮变量，是一个字典，以obj.id:obj作为键值对，其中的Obj有一个额外属性num表示数量
var buyBlock = new Array()
var totalprice = 0;

//点击购物篮中的具体对象，可以将其从购物篮中删除
$("#buy_block_inner").on("mousedown",".buy_block_object",function(){
	remove_from_buyBlock(this)
})

//加入购物篮,每点击一次便加入一个
function add_into_buyBlock(obj){
	//如果这个物品已经在购物篮里面了，则每次点击使其数量+1
	if(obj.id in buyBlock){
		buyBlock[obj.id]["num"] += 1;
		id=obj.id
		$("#buyblock_"+id+" .buy_block_num").html("x"+buyBlock[obj.id]["num"]+"")
	}
	//如果不在，则加入进去，设置数量为1
	else{
		buyBlock[obj.id] = obj;
		buyBlock[obj.id]["num"] =1;
		var a = document.createElement("div");
		a.className = "buy_block_object"
		a.id="buyblock_"+obj.id;
		$(a).html('<div class="buy_block_name">【'+obj.name+'】</div>\
			   	   <div class="buy_block_num">x1</div>');
		$("#buy_block_inner").append(a);	

		//如果名字太长了，就缩短一点
		if(obj.name.length>6){
			$("#"+a.id+" .buy_block_name").css({
				"transform":"scaleX(0.8)",
				"left":"-3px"
			});
		}
		else{
			$("#"+a.id+" .buy_block_name").css("transform","scaleX(1)");
		}					
	}

	//每加入一次物品最后都会修改总金额,令总价上升该物品的价格X1次
	var text = $("#buy_block_totalprice").html()
	totalprice += parseFloat(obj.price)
	$("#buy_block_totalprice").html(''+ totalprice +'G')				
}

//移出购物篮，点击一次移出一个
function remove_from_buyBlock(dom){
	var id=dom.id.replace(/^.*?_/, '')//从buyblock_xxxx中获取到后面的id
	buyBlock[id]["num"] -= 1;

	//修改总金额
	var text = $("#buy_block_totalprice").html()
	totalprice -= parseFloat(buyBlock[id]["price"])
	$("#buy_block_totalprice").html(''+ totalprice +'G')	

	//如果没有剩余的，就把这个元素弄没掉
	if(buyBlock[id]["num"] == 0 ){
		delete buyBlock[id]
		$("#"+dom.id).remove()
	}
	//如果还有剩就减少数量
	else{
		$("#"+dom.id+" .buy_block_num").html("x"+buyBlock[id]["num"]+"")
	}
}

//在购物篮中显示当前持有的货币数量
function show_packageValue(){
	var package_money=return_package_money()
	$("#buy_block_packagevalue").html(''+package_money+"G")
}

//点击购物篮中的确定，购买相应的道具并清空购物篮
$("#buy_block_confirm").on("click",function(){
	//确认钱够不够
	var package_money = return_package_money()
	if(totalprice <= 0 ){
		return false
	}
	if(package_money >= totalprice){
		use_money(totalprice)
		//将购物栏中的每个对象加入进package中
		for(id in buyBlock){
			var obj = buyBlock[id]
			var number = obj.num;
			obj.num = null
			get_into_package(obj,number);
		}
		//消耗掉货币，并重新显示一下
		show_packageValue()
		//清空购物篮
		clear_buy_block()
	}
	else{
		$("#buy_block_confirm").html("余额不足")
		setTimeout(function(){
			$("#buy_block_confirm").html("确认")
		},1000)
	}
})

//清空购物篮,同时会清空总价栏
function clear_buy_block(){
	buyBlock = {};
	totalprice=0;
	$("#buy_block_inner").html("");
	$("#buy_block_totalprice").html('0G')	
}

$("#buy_block").on("mousedown","#buy_block_clear",function(){
	clear_buy_block()
})


//收起和展开购物篮
	$("#buy_block_fold").on("mousedown",function(){
		fold_buy_block()
	})
	$("#buy_block_folded").on("mousedown",function(){
		unfold_buy_block()
	})

	function fold_buy_block(){
		$("#buy_block_ability").attr("folded",true)
		$("#buy_block").hide()
		$("#buy_block_folded").show()
	}
	function unfold_buy_block(){
		$("#buy_block_ability").attr("folded",false)
		show_packageValue()//在展开购物篮时，获取当前的金币数量
		$("#buy_block").show()
		$("#buy_block_folded").hide()
	}
	
</script>

<style scoped lang='scss'>

</style>