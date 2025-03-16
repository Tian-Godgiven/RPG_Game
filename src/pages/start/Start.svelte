<div id="start">
    <div class="title">
        RPG游戏
    </div>
    <div class="inner">
    {#each list as block}
        <StartBlock last={block===lastBlock} block={block}></StartBlock>
    {/each}
    </div>
</div>

<script lang='ts'>
    import { controlPage } from "../../lib/hooks/changePage";
    import { startNewgame } from "../main/scene/newGame/newGame";
    import { startOldgame } from "./start";
    import StartBlock from "./StartBlock.svelte";

    export const list = [
    {   text:"新的冒险",click:()=>{
            changePage()
            startNewgame()
        }
    },{ text:"旧的冒险",click:()=>{
            changePage()
            startOldgame()
        }
    },{ text:"设置",click:()=>{}
    },{ text:"关于",click:()=>{}}]

    const lastBlock = list.at(-1)

    //切换到主界面
    function changePage(){
        controlPage("start",false)
        controlPage("main",true)
        controlPage("information",true)
    }

</script>

<style lang="scss" scoped>
#start{
	margin:2px;
	width:calc(100% - 4px);
	height:calc(100% - 4px);
    .title{
        display: flex;
        align-items: center;
        justify-content: center; /* 水平居中 */
        font-size:100px;
        width:100%;
        height:40%;
        border: 2px solid black;
        border-radius:3px;
        box-sizing:border-box;
    }
    .inner{
        width:100%;
	    height:60%;
	    display:flex;
        
    }
}
</style>