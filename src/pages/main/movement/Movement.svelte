<div id="movement">
    <div id="container">
        {#each nowMovements as movement}
        <div class="hover">
            <Block bind:movement={movement}></Block>
        </div>
        {/each}
    </div>
</div>

<script lang='ts'>
    import Block from "./Block.svelte";
    import { nowMovements } from "./movement";

</script>

<style scoped lang='scss'>
#movement{
	margin:2px;
	width:600px;
	height:128px;
	position:relative;
	z-index:-1;
    .hover{
        width:97.7px;
        height:128px;

        border:2px solid black;
        box-sizing: border-box;

        float:left;
        margin-right:2px;
    }
}




</style>