<div id="information">
    <Jianjie></Jianjie>

    <div id="logs_container">
        <div id="logs">
            {#each logList as log}
                <div class="log">{log}</div>
            {/each}
        </div>
    </div>
</div>

<script lang='ts'>
    import Jianjie from "./Jianjie.svelte";
import { logList } from "./logs";
</script>

<style scoped lang='scss'>

#logs{
	width:100%;
	height:100%;
	overflow:auto;
}
#logs > div{
	line-height:15px;
	font-size:15px;
	margin-left:2px;
	margin-top:7px;
}
</style>