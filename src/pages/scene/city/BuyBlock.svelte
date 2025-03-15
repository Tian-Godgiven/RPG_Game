<div>
    <table id="city_shops" class="city_left_table">
        <tbody>
            <tr><td id="weaponShop" class="shop city_left_block buyBlock selectBlock sortable_item">
            <div class="triangle"></div>武器铺</td></tr>
            <tr><td id="armerShop" class="shop city_left_block buyBlock selectBlock sortable_item">
            <div class="triangle"></div>防具店</td></tr>
            <tr><td id="itemShop" class="shop city_left_block buyBlock selectBlock sortable_item">
            <div class="triangle"></div>道具店</td></tr>
            
            <tr><td id="adventurers" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>酒馆</td></tr>

            <tr><td id="martial_hall" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>武道馆</td></tr>
            <tr><td id="magic_library" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>图书馆</td></tr>
            <tr><td id="" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>教堂</td></tr>
            <tr><td id="" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>铁匠铺</td></tr>
            <tr><td id="" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>工会</td></tr>
            <tr><td id="" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>魔具店</td></tr>
            <tr><td id="" class="shop city_left_block unbuyBlock unselectBlock sortable_item">
            <div class="triangle"></div>魔具店</td></tr>
        </tbody>
    </table>
</div>

<script lang='ts'>

</script>

<style scoped lang='scss'>
#buy_block_folded{
	display:block;
	margin-left:100px;
	margin-bottom:1.6px;
	float: right;
	height:24px;
	border:2px solid black;
	border-radius:3px;
	box-sizing: border-box;

}

#buy_block_folded img{
	position: relative;
   	top: -4px;
	max-width:20px;
	max-height:20px;
}

#buy_block{
	display:none;
	font-size:15px;
	text-align:left;
	line-height:20px;

	position:relative;
	width:126px;
	height:208px;

	margin-bottom:1.6px;
	border:2px solid black;
	border-radius:3px;
	box-sizing: border-box;

}

#buy_block .dashed_line{
	margin:2px 0;
	left:2px;
}

	.buy_block_top{
		line-height:25px;
		height:27px;
		text-align:center;
		font-size:18px;
		font-weight:bold;
	}

	#buy_block_clear{
		width:20px;
		height:20px;
		position:relative;
		top:-25px;
		left:5px;
	}

	#buy_block_clear img{
		max-width:20px;
		max-height:20px;
	}

	#buy_block_fold{
		width:20px;
		height:20px;
		position:relative;
		top:-45px;
		left:100px;
	}

	#buy_block_fold img{
		max-width:20px;
		max-height:20px;
	}

	#buy_block_inner{
		overflow:auto;
		margin-left:-5px;
		height:98.6px;
		width:100%;
	}

	#buy_block_inner::-webkit-scrollbar{
		display:none;
	}

	.buy_block_name{
		white-space: nowrap;
		float:left;
		width:50%;
		position:relative;
	}


	.buy_block_num{
		float: right;
	}

	.buy_block_bottom{
		margin:0 2px;
	}

	#buy_block_packagevalue{
		float:right;
	}
	#buy_block_totalprice{
		float:right;
	}

	#buy_block_confirm{
		position:absolute;
		bottom:0px;
		text-align:center;
		font-size:18px;
		margin:1.6px;
		width:116px;
		border:2px solid black;
		border-radius:3px;
	}

</style>