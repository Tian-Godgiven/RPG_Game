<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="block"
    bind:this={blackDiv}
    on:click={block.click}  
    on:mouseenter={moveIn} 
    on:mouseleave={moveOut}>
    <div class="text">{block.text}</div>
        {#if last}
        <div class="version">版本号：0.0.0.0.0.0.1</div>
        {/if}
    <div class="white" bind:this={whiteDiv}></div>
</div>

<script lang='ts'>
    import gsap from "gsap";

    export let block:{text:string,click:()=>void}
    export let last:boolean
    let whiteDiv:HTMLElement
    let blackDiv:HTMLElement

    function moveIn(){
        const height = blackDiv.offsetHeight;
        const width = blackDiv.offsetWidth;
        gsap.to(whiteDiv,{
            duration:0.8,
            height:0,
            width:0,
            top:height/2,
            left:width/2,
        })
    }
    function moveOut(){
        gsap.to(whiteDiv,{
            duration:0.8,
            height:"100%",
            width:"100%",
            top:0,
            left:0,
        })
    }
</script>

<style scoped lang='scss'>
.block{
    font-size:50px;
    width:25%;
    height:100%;
    border:2px solid black;
    border-radius:3px;
    box-sizing: border-box;
    position:relative;
    
    height:100%;
    width:100%;
    
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center; /* 水平居中 */
    background-color:black;
    color:white;
    >.version{
        position:fixed;
        font-size:16px;
        bottom:5px;
        right:5px;
    }
    >.white{
        position: absolute;
        left: 0;
        top: 0;
        height:100%;
        width:100%;
        background-color: white;
        mix-blend-mode: difference;
    }
}
</style>