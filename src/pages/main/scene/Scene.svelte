<div class="sceneContainer">
    <div class="title">{nowScene.title}</div>
    <div class="inner">
    {#if nowScene.scene}
        <svelte:component this={nowScene.scene}></svelte:component>
    {/if}
    </div>
</div>

<script lang='ts'>
    import { nowScene } from "./scene";


</script>

<style scoped lang='scss'>
.scene{
	margin:2px;
	width:596px;
	height:316px;
    .title{
        margin:2px auto;
        border:2px solid black;
        text-align: center;;
        font-size:30px;
        width:596px;
        height:48px;
        box-sizing: border-box;
    }
}


</style>