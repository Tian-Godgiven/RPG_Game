<main id="main">
    {#if showStartPage}
        <Start></Start>
    {/if}
    {#if showMainPage}
        <Main></Main>
    {/if}
    {#if showInfoPage}
        <Infomation></Infomation>
    {/if}
</main>

<script lang="ts">
import Start from "./pages/start/Start.svelte";
import Main from "./pages/main/Main.svelte";
import Infomation from "./pages/information/Infomation.svelte";
import { showStartPage,showMainPage,showInfoPage } from "./lib/hooks/changePage";
</script>

<style>
#main{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
	width:830px;
	height:500px;
	border:2px solid black;
    float:left;
	overflow:hidden;
	overflow-x:hidden;
}

#main table td{
	margin-top:1.6px;
	margin-left:1.6px;
	margin-right:1.6px;
}
</style>
