<div id="newGame" class="camera">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
     <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div id="character">
        <svelte:component this={list[stepIndex]} bind:this={child} />        
        
        <div id="confirm" on:click={onConfirm} class="choice hover_black">
            确认
        </div>
        <div id="return" on:click={onReturn} class="choice hover_black" >
            返回
        </div>
    </div>
</div>

<script lang='ts'>
    import { stepIndex, onReturn, nextPage } from "./newGame";
    import Name from "./step/Name.svelte";
    import Race from "./step/Race.svelte";
    import Gender from "./step/Gender.svelte";
    import Status from "./step/Status.svelte";
    import Package from "./step/Package.svelte";
    import Description from "./step/Description.svelte";
    import Ready from "./step/Ready.svelte";
    import type { SvelteComponent } from "svelte";

    const list = [Name,Race,Gender,Status,Package,Description,Ready]

    let child:SvelteComponent
    function onConfirm(){
        //执行子元素中的onConfirm函数
        const tmp = child.confirm()
        //到下一页
        if(!tmp){
            nextPage()
        }
    }
</script>

<style scoped lang='scss'>
#newGame{
	display:none;
    #character{
        position:relative;
        
        font-size:18px;

        width:596px;
        height:316px;
        border:2px solid black;
        box-sizing:border-box;

        display: flex;
        align-items: center;
        justify-content: center; /* 水平居中 */

        .choice{
            position:absolute;
            bottom:30px;

            display: flex;
            align-items: center;
            justify-content: center; /* 水平居中 */

            font-size:20px;
            width:80px;
            height:30px;

            border:2px solid black;
            border-radius:3px;
            box-sizing:border-box;

            &#confirm{
                left:210px;
            }

            &#return{
                right:210px;
            }
        }

        
    }
}

















</style>