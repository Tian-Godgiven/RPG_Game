<!-- <div id="select_ability">
    <div id="select_block_folded">
        <img src="./img/select_block_folded.png"></div>
    <div id="select_block">
        <div id="select_block_top">筛选
            <div id="select_block_fold"><img src="./img/up.png"></div></div>
        <div class="dashed_line"></div>

        <div id="select_block_inner">
            <div id="select_block_type">类型:
                <select id="select_block_select" data-live-search="true" class="selectpicker show-tick">
                </select>
            </div>
            <div id="select_block_price">价格:
                <div id="select_blcok_price_input">
                <input id="select_block_smallInput" type="number" value="0">~<input id="select_block_bigInput" type="number"value="0">
                </div>
            </div>
        </div>
        
        <div id="select_block_confirm" class="hover_black">应用</div>
    </div>
</div>

<script lang='ts'>
    import { getFocusingTable } from "../../../../../lib/hooks/ability_function";

//生成select
function make_select_block(id){
	//生成一个列表，以此去除重合的type
	var select_types = [];
	var select = document.createElement("select");
	select.className = "select_block_select"

	var option_top =document.createElement("option");;
	$(option_top).html('<option value="all">全部</option>')
	$(select).append($(option_top).html())

	var table = $("#" + id + "_table");
	var select_objs= $(table).children().children().filter(function(){
		if($(this).css("display")=="none"){
			return false;
		}
		var obj=AllEntity[this.id]
		if(obj != null){
			var type = obj["type"];
			if(!select_types.includes(type)){
				select_types.push(type)
				var option =document.createElement("option");
				$(option).html('<option>'+type+'</option>')
				$(select).append($(option).html())
			}
		}
	})

	$("#select_block_select").html($(select).html());
	$('#select_block_select').selectpicker('refresh');
	$('#select_block_select').selectpicker('val', "all");
}


//点击应用数字筛选
$("#select_block_confirm").on("click",function(){
	select_types()
	select_price()
})


//类型筛选
var type="全部";
const selectContainer = $('.selectpicker').parent();
selectContainer.on("mousedown", "li", function() {
	type = $(this).text();
});
function select_types(){
	var focusing_table = getFocusingTable()
	if(type == "全部"){
		if($(focusing_table).attr("id") == "package_all_table"){
			var focusing_type = return_package_focusing_type()
			if(focusing_type == "all"){
				$(focusing_table).children().children().show()
			}
			else{
				var package_doms = return_package_doms()
				package_doms.show()
			}
		}
		else{
			$(focusing_table).children().children().show()
		}

	}
	else{
		var select_doms= $(focusing_table).children().children().filter(function(){
			var obj=AllEntity[this.id];
			if(obj != null){
				if(obj["type"] == type){
					return this
				}
			}
			else{
				return this
			}
		})
		$(focusing_table).children().children().hide()
		select_doms.show()
	}
};


//数字筛选价格功能
// function select_price() {
//   // 获取需要的 input 元素
//   var smallInput = $('input[id="select_block_smallInput"]');
//   var bigInput = $('input[id="select_block_bigInput"]');

//     // 获取两个 input 元素的值
//     var small = parseInt($('#select_block_smallInput').val());
//     var big = parseInt($('#select_block_bigInput').val());

//     //获取当前正在显示shop页面
//     var focusing_table = getFocusingTable()

//     if(big > small){
//     //这个页面中价格大于small，且小于big的obj
// 		var select_objs= $(focusing_table).children().children().filter(function(){
// 			if($(this).css("display") !== "none"){
// 				var obj=AllEntity[this.id]
// 				if(obj != null){
// 					var price = parseInt(obj["price"].match(/\d+/)[0], 10);
// 					if(price >= small && price <= big){
// 						return this
// 					}
// 				}
// 				else{
// 					return this
// 				}
// 			}
// 	    })
// 	    	//所有项目隐藏
// 	//只有符合要求的项目显示
// 	    $(focusing_table).children().children().hide()
// 	    select_objs.show()
// 	}
// 	else if(small > big){
// 		$(focusing_table).children().children().hide()
// 		$(focusing_table).children().children().first().show();
// 	}
	

//  };



//清空select
// function clear_select(){
// 	var focusing_table = getFocusingTable()
// 	$(focusing_table).children().children().show()
// 	$('#select_block_smallInput').val("0");
// 	$('#select_block_bigInput').val("0");
// }




//展开和收起筛选栏
	$("#select_block_fold").on("mousedown",function(){
		fold_select_block()
	})
	$("#select_block_folded").on("mousedown",function(){
		unfold_select_block()
	})
	function fold_select_block(){
		$("#select_ability").attr("folded",true)
		$("#select_block").hide()
		$("#select_block_folded").show()	
	}
	function unfold_select_block(){
		$("#select_ability").attr("folded",false)
		$("#select_block").show()
		$("#select_block_folded").hide()
	}

</script>

<style scoped lang='scss'>
#select_block_folded{
	display:block;
	height:24px;
	float: right;
	border:2px solid black;
	border-radius:3px;
	box-sizing: border-box;
}

	#select_block_folded img{
		position: relative;
    	top: -4px;
		max-width:20px;
		max-height:20px;
	}

#select_block{
	display:none;
	font-size:20px;
	text-align:left;
	line-height:20px;

	position:relative;
	width:126px;
	height:100px;

	float: right;
	border:2px solid black;
	border-radius:3px;
	box-sizing: border-box;
}

#select_block_top{
	line-height:25px;
		height:27px;
		text-align:center;
		font-size:18px;
		font-weight:bold;
}

.select_block .dashed_line{
	margin:2px 0;
	left:2px;
}

	#select_block_fold{
		width:20px;
		height:20px;
		position:relative;
		top:-25px;
		left:100px;
	}

	#select_block_fold img{
		max-width:20px;
		max-height:20px;
	}

#select_block_inner{
	margin:2px;
	font-size:15px;
	height:42px;
}

	#select_block_select{
		border:none;
		width:82px;
	}

	#select_block_type .dropdown{
		text-align: right;
		height:25px;
		width:78px;
		margin-right:4px;
		position:relative;
		float: right;
	}

	#select_block_type .dropdown-menu{
		z-index:100;
	}

	#select_block_type .dropdown-menu > li > a {
		padding:3px 5px;
	}

	#select_block_type .dropdown-toggle{
		padding-left:2px;
		font-size:15px !important;
		border:none !important;
		padding:0px;
	}

	.bootstrap-select .dropdown-toggle:focus {
  		outline: none;
  		box-shadow: none;
	}

	.dropdown-menu {
		width: 78px; /* 设置宽度 */
		max-height: 200px; /* 设置最大高度 */
		overflow: auto; /* 添加滚动条 */
	}

	.dropdown-menu::-webkit-scrollbar {
		width: 2px; /* 设置滑块宽度 */
	}

	.dropdown-menu::-webkit-scrollbar-thumb {
		background-color: black; /* 设置滑块颜色 */
	}

	.dropdown-menu::-webkit-scrollbar-track {
  		background-color: white; /* 设置滑道颜色 */
	}

	.dropdown-menu .inner {
  		overflow-x:hidden !important;
	}

	.filter-option-inner-inner{
		margin-left:5px;
	}


	#select_block_price{
		margin-top:-8px;
		float: left;
	}
	#select_blcok_price_input{
		float: right;
	}

		#select_blcok_price_input input{
			text-align: right;
			border-left:none;
			border-top:none;
			border-right:none;
			border-bottom:2px dashed black;
			width:34px;
			height:20px;
			box-sizing: border-box;
		}

		#select_blcok_price_input input::-webkit-outer-spin-button,
		#select_blcok_price_input input::-webkit-inner-spin-button {
	  		-webkit-appearance: none;
	  		margin: 0;
		}

		#select_blcok_price_input input:focus{
			outline: none;
			box-shadow: 0px ;
		}


#select_block_confirm{
		position:absolute;
		bottom:0px;
		text-align:center;
		font-size:18px;
		margin:1.6px;
		width:116px;
		border:2px solid black;
		border-radius:3px;
	}

	#select_block_confirm:hover{
		color:white;
		background-color:black;
	}

</style> -->