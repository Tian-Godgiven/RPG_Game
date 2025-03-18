<div class="scene movement">

    <div id="movement_left" class="movement left">
        <table id="package" class="city_left_table package">
            <tbody>
                <tr><td id="package_all" class="package city_left_block sortable_item"> 
                <div class="triangle"></div>全部</td></tr>
                <tr><td id="package_weapon" class="package city_left_block sortable_item">
                <div class="triangle"></div>武器</td></tr>
                <tr><td id="package_armer" class="package city_left_block sortable_item">
                <div class="triangle"></div>防具</td></tr>
                <tr><td id="package_item" class="package city_left_block sortable_item">
                <div class="triangle"></div>消耗品</td></tr>
                <tr><td id="package_material" class="package city_left_block sortable_item">
                <div class="triangle"></div>素材</td></tr>
                <tr><td id="package_other" class="package city_left_block sortable_item">
                <div class="triangle"></div>其他</td></tr>
                <tr><td id="package_money" class="package city_left_block sortable_item">
                <div class="triangle"></div>货币</td></tr>
            </tbody>
        </table>
        
    </div>

    <div id="movement_right" class="movement right">

        <div id="movement_right_right" class="movement">
            <div id="package_use" class="package">
                <div id="package_use_top">使用</div>
            </div>
        </div>

        <div id="package_tables" class="package">
            <table id="package_all_table" class="package package_page city_right_page">
            </table>
        </div>
        
    </div>
</div>

<script lang='ts'>
import Team from "../team/Team.svelte";
</script>

<style scoped lang='scss'>


#package_use{
	position:absolute;
	font-size:18px;
}


#package_use{
	display:none;
	width:122px;
	max-height:24px;
	overflow:hidden;
	border-radius:3px;
	border:2px solid black;
}

#package_use_targetsContainer{
	overflow:auto;
	height:0px;

}

#package_use_top{
	position:relative;
	text-align: center;
}
</style>