<div id="name" class="page">
    你是：
    <input bind:this={inputElement} bind:value={inputValue} 
        on:input={onInput}
        type="text">
</div>

<script lang='ts'>
    import { printLog } from "../../../../information/logs";
    import { idleCharactor } from "../newGame";
    import Typed from "typed.js"

    let inputValue:string
    let inputElement:HTMLElement

    //实际的输入内容
    let trueInput:string
    export function onConfirm(){
        printLog("你是你。");
    }

    //输入名称的彩蛋效果：无论输入了什么，最后都会被修改为“你”
    let timer:null|number = null
    let input_counter = 0 //计数器
    function onInput(){
        if (timer !== null) {
            clearTimeout(timer);
        }
        //停止输入10秒后
        timer = setTimeout(()=>{
            //记录输入内容
            trueInput = inputValue
            //次数过多时触发强力版本
            if(input_counter<5){
                change_to_you()
            }
            else{
                change_to_you_plus()
            }
            
        }, 1000);
    }
    //配套使用
    function change_to_you(){
        input_counter+=1;
        const typed = new Typed(inputElement,{
            strings:["你"],
            typeSpeed: 50,
            backSpeed: 100,
        })

        typed.start();
    }
    //同上
    function change_to_you_plus(){
        input_counter=0;//计数归0
        const typed = new Typed(inputElement, {
            strings: ["你就是你，你还能是什么？","你"],
            typeSpeed: 50,
            backSpeed: 100,
        });

        typed.start();
    }

</script>

<style scoped lang='scss'>
#name > input{
	width:100px;
	font-size:18px;
	position:relative;
	padding:0px;
	border:none;
	border-bottom:2px solid black;
    &:focus{
        padding:0px;
        border:none;
        border-bottom:2px solid black;
        outline:none;
    }
}
</style>