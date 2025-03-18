<div id="race" class="page">
    你属于：
    <select data-live-search="true" 
        bind:value={target}
        on:change={onChange}
        class="selectpicker show-tick">
        {#each Object.keys(raceList) as group}
        <optgroup label={group}>
            {#each raceList[group] as race}
                <option value={race.value}>{race.label}</option>
            {/each}
        </optgroup>
        {/each}
    </select>
</div>

<script lang='ts'>
    import { AllEntity } from "../../../../../lib/hooks/ability_function";
    import { showJianjie } from "../../../../information/jianjie/jianjie";
    import { printLog } from "../../../../information/logs/logs";
    import { idleCharactor } from "../newGame";

    let target:string
    export function onConfirm(){
        idleCharactor.race = target
        printLog("你的种族是"+AllEntity[target]["name"]+"。");
    }
    
    //显示默认的种族信息
    showJianjie(AllEntity["race_00001"])
    const raceList:Record<string,{value:string,label:string}[]> = {
        "人类":[
            { value: "race_00001", label: "人类" },
            { value: "race_00002", label: "精灵" },
            { value: "race_00003", label: "矮人" },
            { value: "race_00004", label: "半身人" }
        ],
        "兽人":[
            { value: "race_01001", label: "欧克" },
            { value: "race_01002", label: "猪人" },
            { value: "race_01003", label: "犬兽人" },
            { value: "race_01004", label: "猫兽人" },
            { value: "race_01005", label: "熊兽人" },
            { value: "race_01006", label: "兔兽人" },
            { value: "race_01007", label: "虎兽人" }
        ],
        "亚人": [
            { value: "race_02001", label: "虫人" },
            { value: "race_02002", label: "鱼人" },
            { value: "race_02003", label: "鸟人" }
        ]
    };

    //种族选项选中时，会在jianjie输出相关信息
    function onChange(){
        const entity = AllEntity[target]
        showJianjie(entity)
    }


</script>

<style scoped lang='scss'>

</style>