<div id="description_of_you" class="page">
    <div>你的身世：</div><br>
    <textarea bind:value={idleCharactor.description}></textarea>
</div>

<script lang='ts'>
    import { AllEntity } from "../../../../../lib/hooks/ability_function";
    import { printLog } from "../../../../information/logs";
    import { idleCharactor } from "../newGame";
    
    export function onConfirm(){
        printLog("你的身世……这不重要。")
        AllEntity[idleCharactor.id] = idleCharactor
    }

</script>

<style scoped lang='scss'>
#description_of_you{
	position:relative;
	top:-30px;
	text-align:center;
}

	#description_of_you textarea{
		border:2px solid black;
		font-size:16px;
		width:300px;
		height:150px;
		max-width:300px;
		max-height:150px;
	}
</style>