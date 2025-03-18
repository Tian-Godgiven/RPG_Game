<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div id="package" class="page">
    <div class="block">你所拥有
        <div class="list">
            {#each hadList as item}
            <div class="hover_black item" 
                on:mouseenter={()=>onMouseenter(item.id)}
                on:click={()=>lost(item)}>
                {#if item.id.startsWith("money")}
                    {item.num+AllEntity[item.id].name}
                {:else}
                    {AllEntity[item.id].name}x{item.num}
                {/if}
                <span>{item.worth}</span>
            </div>
            {/each}
        </div>
    </div>
    <div id="balance">
        <div id="num">{balance_num}</div>
        <img alt="←" src="../../../../../static/img/icon/arrow_left.png">
        <img alt="→" src="../../../../../static/img/icon/arrow_left.png">
    </div>
    <div class="block">为此舍弃
        <div class="list">
            {#each lostList as item}
            <div class="hover_black" 
                on:mouseenter={()=>onMouseenter(item.id)}
                on:click={()=>get(item)}>
                {#if item.id.startsWith("money")}
                    {item.num+AllEntity[item.id].name}
                {:else}
                    {AllEntity[item.id].name}x{item.num}
                {/if}
                <span>{item.worth}</span>
            </div>
            {/each}
        </div>
    </div>
</div>

<script lang='ts'>
    import { AllEntity } from "../../../../../lib/hooks/ability_function";
    import { showJianjie } from "../../../../information/jianjie/jianjie";
    import { printLog } from "../../../../information/logs/logs";
    import { hadList } from "../newGame";

    //平衡值
    let balance_num = 5

    //确认计数器
    let confirm_num = 0
    export function onConfirm(){
        if(confirm_num < 3){
            if(confirm_num > 0){
                printLog("你仍有余裕，或许你该物尽其用……")
                confirm_num += 1
                return false
            }
        }
        else if(confirm_num == 3){
            printLog("希望你不会后悔……")
            confirm_num = 0
        }

        if(balance_num == 10){
            printLog("你一无所有。")
        }
        else{
            printLog("你随身携带着一些物品。")
        }
    }

    //初始道具选择，鼠标移入这些物品栏，会显示他们的jianjie，若点击后，则鼠标移动不会显示，直到下次点击
    function onMouseenter(id:string){
        const entity = AllEntity[id]
        showJianjie(entity)
    }

    type Item = {
        id:string,
        num:number,
        worth:number
    }
    
    //当前可选的物品
    const lostList = [
        {id: "money_00001", num: 50, worth: 1},
        {id: "money_00001", num: 50, worth: 1},
        {id: "weapon_010002", num: 1, worth: 1},
        {id: "weapon_010003", num: 1, worth: 2},
        {id: "weapon_010004", num: 1, worth: 2},
        {id: "weapon_010005", num: 1, worth: 2},
        {id: "weapon_010007", num: 1, worth: 3},
        {id: "weapon_010008", num: 1, worth: 3},
        {id: "weapon_010010", num: 1, worth: 4},
        {id: "weapon_010011", num: 1, worth: 4},
        {id: "weapon_010009", num: 1, worth: 3},
        {id: "weapon_010012", num: 1, worth: 5},
        {id: "weapon_010013", num: 1, worth: 5},
        {id: "weapon_010014", num: 1, worth: 5},
        {id: "weapon_010015", num: 1, worth: 4},
        {id: "weapon_010016", num: 1, worth: 5},
        {id: "armer_000002", num: 1, worth: 2},
        {id: "armer_000003", num: 1, worth: 3},
        {id: "armer_000004", num: 1, worth: 3},
        {id: "item_00001", num: 2, worth: 2},
        {id: "item_00001", num: 3, worth: 3},
        {id: "item_00004", num: 2, worth: 1},
        {id: "item_00004", num: 4, worth: 2},
        {id: "item_00017", num: 2, worth: 1},
        {id: "item_00018", num: 4, worth: 4},
        {id: "item_00020", num: 4, worth: 4},
        {id: "item_00025", num: 3, worth: 3},
        {id: "item_00019", num: 2, worth: 2},
        {id: "item_00021", num: 1, worth: 2},
        {id: "item_00022", num: 1, worth: 3},
        {id: "item_00023", num: 1, worth: 3},
        {id: "item_00024", num: 1, worth: 3}
    ]

    //点击将had的物品移入lost中，同时将计数器增加指定数值
    function lost(item:Item){
        const worth = item.worth
        //修改balance值
        balance_num += worth
        //将物品从had中移到lost
        const hadIndex = hadList.indexOf(item)
        hadList.splice(hadIndex,1)
        lostList.push(item)
    }
    //点击将lost中的物品移入had中，同时将计数器减少指定数值，不小于0
    //并加入had字典，最后确认时，将had中的物品移入背包
   function get(item:Item){
        const worth = item.worth
        //balance计数不得低于0
        if(balance_num - worth < 0 ){
            printLog("切忌贪婪。")
            return false
        }
        //修改balance值
        balance_num -= worth
        //将物品从lost中移到had
        const lostIndex = lostList.indexOf(item)
        lostList.splice(lostIndex,1)
        hadList.push(item)
    }

</script>

<style scoped lang='scss'>
#package{
	display:flex;
	text-align:center;
	position:relative;
	top:-30px;
    #balance {
        position:relative;
        top:15px;
        display:flex;
        align-items: center;
        #num{
            position:absolute;
            width:20px;
            text-align:right;
            top:70px;
            left:34px;
        }
        img{
            max-height:50px;
 	        padding:0px -20px;
        }
    }
    .block{
        .list{
            overflow:auto;
            width:152px;
            height:200px;
            border:2px solid black;
            border-radius:3px;
            .item{
                height:25px;
                width:146px;
                padding:2px;
                text-align:left;
                border-bottom:2px dotted black;
                span{
                    float:right;
                }
            }   
        }
    }
}
</style>