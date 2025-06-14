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
            changeToMain()
            startNewgame()
        }
    },{ text:"旧的冒险",click:()=>{
            changeToMain()
            startOldgame()
        }
    },{ text:"设置",click:()=>{}
    },{ text:"关于",click:()=>{}}]

    const lastBlock = list.at(-1)

    //切换到主界面
    function changeToMain(){
        controlPage("start",false)
        controlPage("main",true)
        controlPage("information",true)
    }

</script>

<style lang="scss" scoped>
#start{
	width:100%;
	height:100%;
    .title{
        background-color: white;
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
        position: relative;
        width:100%;
	    height:60%;
        padding-top: 2px;
        box-sizing: border-box;
	    display:flex;
        gap: 2px;
    }
}
</style>