<div id="are_you_ready">
    <span id="character_000000" class = "entity">
        你
    </span>
    准备好开始冒险了吗？
</div>

<script lang='ts'>
    import { AllEntity } from "../../../../../lib/hooks/ability_function";
    import { printLog } from "../../../../information/logs/logs";
    import { showMovementOption } from "../../../movement/movement";
    import { getMoney, getToPackage } from "../../package/package";
    import { changeScene } from "../../scene";
    import { joinTeam } from "../../team/team";
    import { hadList, idleCharactor } from "../newGame";
    
    export function onConfirm(){
        printLog("那就走吧……")
        //将选择的物品加入背包
        for(let item of hadList){
            //钱币类
            if(item.id.includes("money")){
                getMoney(AllEntity[item.id],item.num)
            }
            //物品类
            else{
                getToPackage(AllEntity[item.id],item.num)
            }
        }
        //将YOU加入队伍
        joinTeam(idleCharactor)
        //将Newgame界面隐藏，显示【移动】行动选项
        changeScene(null)
        showMovementOption("move")
    }
</script>

<style scoped lang='scss'>

</style>