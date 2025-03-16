<div id="gender" class="page">
    <div id="top">你应是：</div>
    <div id="inner">
        <div class="pretty p-default p-round">
            <input type="radio" name="gender" value="男性" bind:group={gender}>
            <div class="state p-success-o" >
                男性
            </div>
        </div>

        <div class="pretty p-default p-round">
            <input type="radio" name="gender" value="女性" bind:group={gender}>
            <div class="state p-success-o">
                女性
            </div>
        </div>

        <div class="pretty p-default p-round">
            <input type="radio" name="gender" value="一个谜" checked={true} bind:group={gender}>
            <div class="state p-success-o">
                一个谜
            </div>
        </div>
    </div>
</div>

<script lang='ts'>
    import { printLog } from "../../../../information/logs";
    import { idleCharactor } from "../newGame";
    let gender:"男性"|"女性"|"一个谜"
    export function onConfirm(){
        idleCharactor.gender = gender
        printLog("你是"+gender+"。")
    }
</script>

<style scoped lang='scss'>
#gender{
	display:flex;
    #top{
		display: flex;
	  	align-items: center;
	}

	#inner{
		width:50px;
	}
}

	
</style>