<div>
{#each list as item}
    <table id="{item.type}_table" class="shop_page city_right_page">
        <tbody>
            <tr><td>
                <div class="triangle2"></div>
                <div>商品名</div><div>类型</div><div>价格</div>
            </td></tr>
        </tbody>
    </table>	
{/each}
</div>

<script lang='ts'>
    const list = [
        {type:"weaponShop",label:["商品名","类型","价格"]},
        {type:"armerShop",label:["商品名","类型","价格"]},
        {type:"itemShop",label:["道具名","类型","价格"]},
        {type:"adventurers",label:["角色名","职业","酬金"]},
        {type:"martial_hall",label:["招式名","类型","学费"]},
        {type:"magic_library",label:["法术名","类型","租金"]},
    ]
</script>

<style scoped lang='scss'>

</style>