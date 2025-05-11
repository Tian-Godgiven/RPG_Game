<div id="city" class="scene city">
    <ShopList></ShopList>
    <div id="city_right" class="city right">
        <div id="city_right_right">
            <div id="adventurer_recruit">
                <div id="recruit_recruit">招募</div>
                <div id="recruit_confirm">确认</div>
            </div>
            <Basket></Basket>
            <Selector></Selector>
        </div>

        <div id="city_shop_tables">
            <ItemList></ItemList>
        </div>
    </div>
</div>

<script lang='ts'>
    import Basket from "./component/Basket.svelte";
    import ItemList from "./component/ItemList.svelte";
    import Selector from "./component/Selector.svelte";
import ShopList from "./component/ShopList.svelte";

//点击对象
let clicked = 0;
function return_clicked(set:number){
	if(set == 1 || set == 0){
		clicked = set
	}
	else{
		return clicked
	}
}

// //city_left_block通用点击特效
//     function clickLeftBlock(){
//         if(clicked == 1){
// 			$(".city_left_block .triangle").css("border-left-color","transparent");
// 			clicked = 0;
// 		}
// 		else{
// 			$(".city_left_block .triangle").css("border-left-color","white");
// 			clicked =1;
// 		}
// 		$(".city_left_block").css({
// 			"color":"black",
// 			"background-color":"white",
// 		})

// 		$(this).css({
// 			"color":"white",
// 			"background-color":"black",
// 		})
//     }
// 	$(".left").on("mousedown",".city_left_block", function (){
		
// 	})

// 	//鼠标滑动到block，也会显示商店内容
// 	$(".left").on("mouseenter",".city_left_block",function (){
// 		if(clicked == 1){
// 			return false;
// 		}

// 		$(".city_left_block").css({
// 			"color":"black",
// 			"background-color":"white",
// 		})

// 		$(this).css({
// 			"color":"white",
// 			"background-color":"black",
// 		})
// 	})

// 	$("body").on("mousedown mouseenter",".click_black",function (){

// 		$(".right .click_black").css({
// 			"color":"black",
// 			"background-color":"white",
// 		})

// 		$(this).css({
// 			"color":"white",
// 			"background-color":"black",
// 		})
// 	})



</script>

<style scoped lang='scss'>
#city_right, #movement_right{
	overflow:auto;
	font-size:18px;
	float:left;
	margin-left:2px;
	width:454px;
	height:316px;
	border:2px solid black;
     box-sizing: border-box;
}



.city_right_page{
	float:left;
}

.city_right_page tr td{
	display:flex;
	align-items: center;
	box-sizing: border-box;
	border:2px solid black;
	border-radius:3px;
}

.city_right_page tr td div:nth-child(2){
	width:130px;
	float:left;
}

.city_right_page tr td div:nth-child(3){
	width:80px;
	float:left;
}

.city_right_page tr td div:last-child{
	padding-right:10px;
	width:80px;
	float:right;
	text-align:right;
}

.triangle2{
	padding-right:3px;
	float:left;
	width:0px;
	height:0px;
	border-top:7px solid transparent;
	border-bottom:7px solid transparent;
	border-left:12px solid white;
}

#city_right_right, #movement_right_right{
	position:fixed;
	left:468px;
	margin:1.6px 0px;
	width:126px;
	height:312px;
}

.shop_page{
	display:none;
}



</style>