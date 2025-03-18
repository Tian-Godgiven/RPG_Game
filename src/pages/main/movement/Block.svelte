<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="block" on:click={movement.click} on:mouseenter={moveIn} on:mouseleave={moveOut}>
    <div class="white" bind:this={whiteDiv}>{movement.label}</div>
    {#if showBlack}
    <div class="black movement_box_black" bind:this={blackDiv}>{movement.label}</div>
    {/if}
</div>

<script lang='ts'>
    export let movement

    let whiteDiv:HTMLElement
    let blackDiv:HTMLElement
    
    let showBlack = false
//移动上去时，将白色的部分高度减小
    function moveIn() {
        //显示黑色块
        showBlack = true
        const height = whiteDiv.clientHeight
        if (height > 0) {
            gsap.to(whiteDiv,{
                height:0,
                duration:0.25,
                ease:"swing"
            })
        }
    };

//移动出来时，将白色部分高度变大
    function moveOut() {
        const height = whiteDiv.clientHeight
        if (height <= 128) {
            gsap.to(whiteDiv,{
                height:128,
                duration:0.25,
                ease:"swing"
            })
        }
    };
</script>

<style scoped lang='scss'>
.block{
	height:100%;
	width:100%;
    .white{
        position:relative;
        background-color:white;
        line-height:110px;
        font-size:40px;
        text-align:center;
        width:100%;
        height:100%;
        z-index:-2;
        overflow:hidden;
    }
    .black{
        position: absolute;
        top:0px;
        background-color: black;
        color:white;
        line-height:110px;
        font-size:40px;
        text-align:center;
        width:95px;
        height:100%;
        z-index:-3;
    }
}


</style>