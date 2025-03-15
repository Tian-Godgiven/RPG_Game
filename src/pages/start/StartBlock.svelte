<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="block"
    on:click={block.click}  
    on:mouseenter={moveIn} 
    on:mouseleave={moveOut}>
    <div class="white" bind:this={whiteDiv}>
        <div class="text">{block.text}</div>
        {#if last}
            <div class="version white">版本号：0.0.0.0.0.0.1</div>
        {/if}
    </div>
    <div class="black" bind:this={blackDiv}>
        <div class="text">{block.text}</div>
        {#if last}
            <div class="version">版本号：0.0.0.0.0.0.1</div>
        {/if}
    </div>
</div>

<script lang='ts'>
    import gsap from "gsap";

    export let block:{text:string,click:()=>void}
    export let last:boolean
    let whiteDiv:HTMLElement
    let blackDiv:HTMLElement

    function moveIn(){
        const height = whiteDiv.offsetHeight;
        const width = whiteDiv.offsetWidth;
        const {top,left} = whiteDiv.getBoundingClientRect()

        gsap.to(whiteDiv,{
            duration:0.8,
            height:0,
            width:0,
            top:top+height/2,
            left:left+width/2,
            ease: "power2.out", // 缓动效果
        })
    }
    function moveOut(){
        const height = blackDiv.offsetHeight;
        const width = blackDiv.offsetWidth;
        gsap.to(whiteDiv,{
            duration:0.8,
            height:height,
            width:width,
            top:0,
            left:0,
            ease: "power2.out", // 缓动效果
        })
    }
</script>

<style scoped lang='scss'>
.block{
    font-size:50px;
    width:25%;
    height:calc(100% - 2px);
    margin:2px 0;
    margin-right:2px;
    border:2px solid black;
    border-radius:3px;
    box-sizing: border-box;
    transform: scale(1);
    .white{
        text-align:center;
        background-color:white;

        position:relative;
        top: 0px;
        left: 0px;

        color:black;
        height:100%;
        width:100%;
        z-index:1;
        overflow:hidden;

        border:2px solid transform;
        border-radius:3px;
        box-sizing:border-box;
    }
    .black{
        display: flex;
        align-items: center;
        justify-content: center; /* 水平居中 */
        position:absolute;
        top:0px;
        z-index:-1;
        background-color:black;
        color:white;
        height:100%;
        width:100%;
    }
    >div>.text{
        position:absolute;
        white-space: nowrap;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        will-change: transform; /*添加will-change属性*/
    }
    >div>.version{
        font-size:16px;
        position:absolute;
        bottom:5px;
        right:5px;
        &.white{
            font-size:16px;
            position:absolute;
            top:153.2px;
            left:-6.9px;
        }
    }   
}
</style>