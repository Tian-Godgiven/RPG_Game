<main>
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

</style>
