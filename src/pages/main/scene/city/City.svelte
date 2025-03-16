<div id="camera_city" class="camera city">

    <ShopList></ShopList>

    <div id="city_right" class="city right">

        <div id="city_right_right">

            <div id="adventurer_recruit">
                <div id="recruit_recruit">招募</div>
                <div id="recruit_confirm">确认</div>
            </div>

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

            <div id="select_ability">
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

        </div>

        <div id="city_shop_tables">
            <table id="weaponShop_table" class="shop_page city_right_page">
                <tr><td>
                    <div class="triangle2"></div>
                    <div>商品名</div><div>类型</div><div>价格</div>
                </td></tr>
            </table>	

            <table id="armerShop_table" class="shop_page city_right_page">
                <tr><td>
                    <div class="triangle2"></div>
                    <div>商品名</div><div>类型</div><div>价格</div>
                </td></tr>
            </table>

            <table id="itemShop_table" class="shop_page city_right_page"> 
                <tr><td>
                    <div class="triangle2"></div>
                    <div>道具名</div><div>类型</div><div>价格</div>
                </td></tr>
            </table>

            <table id="adventurers_table" class="shop_page city_right_page">
                <tr><td>
                    <div class="triangle2"></div>
                    <div>角色名</div><div>职业</div><div>酬金</div>
                </td></tr>
            </table>

            <table id="martial_hall_table" class="shop_page city_right_page">
                <tr><td>
                    <div class="triangle2"></div>
                    <div>招式名</div><div>类型</div><div>学费</div>
                </td></tr>
            </table>

            <table id="magic_library_table" class="shop_page city_right_page">
                <tr><td>
                    <div class="triangle2"></div>
                    <div>法术名</div><div>类型</div><div>租金</div>
                </td></tr>
            </table>
        </div>
    </div>
</div>

<script lang='ts'>
import ShopList from "./ShopList.svelte";
</script>

<style scoped lang='scss'>

</style>