<div class="scene">
    <div id="movement_left" class="movement left">
        <table id="team" class="city_left_table team">
            <tbody>
                {#each Object.values(nowTeam) as member}
                    <td on:click={()=>clickTeamMember(member)} 
                        class="teamMember 
                            city_left_block 
                            .sortable_item">
                        <div class="triangle"></div>
                        {member.name} lv.{member.level}
                    </td>
                {/each}
                
            </tbody>
        </table>
    </div>

    <TeamCharacter></TeamCharacter>
</div>

<script lang='ts'>
    import type { Character } from "../../../../interface/entity/Character";
    import { AllEntity, character } from "../../../../lib/hooks/ability_function";
    import { printLog } from "../../../information/logs/logs";
    import { showTeamMember,nowTeam } from "./team";
    import TeamCharacter from "./TeamMember.svelte";

    //点击小队界面的left_block，显示对应人物的信息
    function clickTeamMember(teamMember:Character){
        const talktexts = ["聊了一会儿","相谈甚欢","深入交流","聊着天","玩得很开心","吵了一架"
            ,"争辩着话题","尴尬地聊了会儿天气","聊起了梦想","谈到家乡","说起习俗","聊了聊爱好"
            ,"寒暄着近况","商议了工作","分析了敌人","整理了经验","善意地相互调侃","亲切地交流"
            ,"共享情报","相互鼓励","谈论起最近的新闻","讨论着队伍","聊到家人","聊了聊羞羞的话题"]
        const theText = talktexts[Math.floor(Math.random() * talktexts.length)]
        printLog("你与", teamMember, theText)
        //显示对应的简介
        showTeamMember(teamMember)
    }
    //拖动小队界面left_block来改变他们的相对位置
    // var sortableEl = document.querySelector('#camera_movement #team tbody');
    // new Sortable(sortableEl, {
    //     animation: 500,
    //     ghostClass: 'blue-background-class',
    //     onStart:function (){
    //         return_clicked("1")
    //     }
    // });
</script>

<style scoped lang='scss'>
#team{
	display:none;
}

#team_pages{
	overflow:hidden;
}

#team_pages :: {
	overflow-x:hidden;
}
#jianjie_inner > .team_page > div:first-of-type,
#jianjie_inner > div > .team_page > div:first-of-type{
  	    white-space: nowrap; /*禁止文本换行*/
}

#team_pages > div{
	margin:5px 5px;
}

.team_page{
	display: flex;
}

.team_page_wrap{
	display: flex;
	flex-wrap:wrap;
}

.team_page_title{
	font-weight:bold;
	text-align:center;
}

.team_page_top div div{
	width:140px
}

.team_page_top .team_page_effect div {
  width: unset;
}

.team_page_equipment div div div div{
	width:180px;
}
.team_page_equipment > .team_page > div:first-of-type,
.team_page_equipment > .team_page > div:last-of-type {
  	    white-space: nowrap; /*禁止文本换行*/
}

.team_page_status div div div{
	width:180px;
}



.team_page_coefficient div div div div{
	width:90px;
}

.team_page_coefficient div div div :nth-child(2){
	text-align:right;
}

.team_page_coefficient div div div:nth-child(4){
	text-align:right;
	width:80px;
}

.team_page_description :first-child{
  	    white-space: nowrap; /*禁止文本换行*/

}

#adventurer_recruit{
	position:absolute;
	font-size:18px;
	display: flex;
}

#adventurer_recruit :first-child{
	margin-right:4px;
}

#adventurer_recruit div{
	display:none;
	padding:0 10px;
	text-align: center;
	border-radius:3px;
	border:2px solid black;
	box-sizing:border-box;
}
</style>