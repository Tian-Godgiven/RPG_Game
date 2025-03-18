<div class="scene">
    <div id="left" class="movement left">
        <table id="move" class="city_left_table move">
            <tbody>
                {#each list as item}
                <tr>
                    <td class="move city_left_block sortable_item">
                    <div class="triangle"></div>
                        {item}
                    </td>
                </tr>
                {/each}
                
            </tbody>
        </table>
    </div>
    
    <div id="movement_right" class="movement right">            
        <div id="move_maps" class="move">
            <div id="world_map">

            </div>
        </div>
    </div>
</div>

<script lang='ts'>
    const list = [
        "地图","据点","野外","地牢","副本"
    ]
</script>

<style scoped lang='scss'>
    .left{
        float: left;
        display: block;
        overflow:auto;
        width:140px;
        height:316px;
        border:2px solid black;
        box-sizing: border-box;
    }
#move_maps{
	background-color:black;
	width:100%;
	height:100%;
	overflow:hidden;
}
#world_map{

	background-color:white;
	position:relative;
	bottom:0px;
	width:100%;
	height:100%;

	
}

.map_line{
	display:flex;
	align-items:center;
}

.map_line img{
	max-height:25px;
}

.map_div{
	margin:2px;
	float:left;
	display: inline-flex;
	padding:5px 10px;
	text-align:center;
	border:2px solid black;
	border-radius:3px;
}

.map_enter{
	display: flex;
	align-items: center;
	justify-content:center;

	font-size:20px;

	height:30px;
	width:70px;

	margin:0px !important;

	background-color:white;

	position:sticky;
	 left: 50%;
  	transform: translateX(-50%);
	bottom:2px;

	box-shadow:0 0 0 6px white;

	border:2px solid black;
	border-radius:3px;
}
</style>