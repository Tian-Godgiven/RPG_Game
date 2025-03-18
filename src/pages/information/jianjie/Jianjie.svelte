<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id="container">
    <div class="top">
        <div id="undo" class="button" class:disable={undoDisable} on:click={undo}>
        {#if !undoDisable}
            <img src="./img/back.png" alt="撤销">
        {:else}
            <img src="./img/back_white.png" alt="撤销">
        {/if}
        </div>

        <div id="name">
            <div id="entity_name" class:smaller={nowJianjie.name.length>6}>
                【{nowJianjie.name}】
            </div>
        </div>
        
        <div id="redo" class="button" on:click={redo}>
        {#if !undoDisable}
            <img src="./img/forward.png" alt="重做">
        {:else}
            <img src="./img/forward_white.png" alt="重做">
        {/if}
        </div>
    </div>

    <div id="separete" class="dashed_line"></div>

    <div id="inner">
        {#each nowJianjie.inner as item}
            <div></div>
        {/each}
        <!-- <div class="entity_type">
            类型：+obj.type</br>
            穿持：'+obj.handed+'<br>
            价值：'+obj.price+'
        </div>
        <div class="dashed_line"></div>
        <div class="entity_bonus">
            武器性能：'+obj.weapon_bonus+'<br>
            防御性能：'+obj.defend_bonus+'<br>
            装备影响：'+obj.impact+'<br>
            装备需求：'+obj.requirement+'
        </div>
        <div class="dashed_line"></div>\
        <div class="entity_effect">\
            词条：'+obj.entry+'<br>\
            效果：'+obj.effect+'</div>\
            <div class="dashed_line"></div>\
            <div class="entity_description">\
            介绍：'+obj.description+'\
            </div>
        </div> -->
    </div>
</div>

<script lang='ts'>
    import { AllEntity } from "../../../lib/hooks/ability_function";
    import { showJianjie,undoList,redoList, undoDisable, nowJianjie } from "./jianjie";
    //撤销
    function undo(){
        if(undoList.length==1){
            return false
        }
        if(undoList.length>21){
            undoList.shift()
        }
        //回溯时，将当前这个页面的id给redo_list
        const nowId = undoList.pop()
        if(nowId){
            redoList.push(nowId)
        }
        //Pop出来的第二个才是上一个页面的id
        const id = undoList.pop()
        if(id){
            const entity = AllEntity[id]
            showJianjie(entity)
        }
        
    }
    //重做
    function redo(){
        if(redoList.length==0){
            return false
        }
        if(redoList.length>20){
            redoList.shift()
        }
        //重做时，当前这个页面的Id其实已经在undo_list里面了，所以直接把redo的id给undo
        const id = redoList.pop()
        if(id){
            const entity = AllEntity[id]
            showJianjie(entity)
        }
        
    }
    //简介栏中的entity可以被进一步点击并生成覆盖的jianjie
// $("jianjie_inner").on('mousedown',".entity",function(){
// 	var entity = AllEntity[this.id]
// 	showJianjie(entity)
// })
</script>

<style scoped lang='scss'>
#container{
	width:228px;
	height:344px;
	margin:2px 0;
	border:2px solid black;
	-webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
           box-sizing: border-box;
    .top{
        margin:2px 2px;
        height:35px;
        width:calc(100% - 4px);
        .button{
            float: left;
            width:30px;
            height:30px;
            border:2px solid black;
            border-radius:3px;
            box-sizing:border-box;
            background-color:black;
            &.disbale{
                background-color:white;
            }
        }
        div img{
            max-height:100%;
            max-width:100%;
        }
        #name{
            margin-top:-2px;
            width:calc(100% - 60px);
            float: left;
            #entity_name{
                text-align:center;
                font-size:25px;
                font-weight:bold;
                height:34px;
                transform: scaleX(1);
                width:200%;
                position:relative;
                left:-50%;
                z-index: -1;
                &.smaller{
                    transform:scaleX(0.8)
                }
            }
        }
        
    }
    #inner{
        overflow-x:hidden;
        position:relative;
        font-size:16px;
        overflow:auto;
        height:300px;
        line-height:20px;
        word-wrap: break-word;
        div{
            margin:5px 5px;
            div{
                margin:0px
            }
        }
    }
}

/*针对具有多行元素*/
.multi_line_container{
	display: flex;
}

#separete{
	border-bottom:2px dashed black;
	width:95%;
	top:0px;
	left:5px;
}
.dashed_line{
        padding:0;
        position:relative;
        left: 1%;
        width:95%;
        border-bottom:2px dashed black;
        box-sizing: border-box;
    }
</style>