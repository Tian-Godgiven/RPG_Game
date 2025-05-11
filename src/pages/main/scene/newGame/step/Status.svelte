<div id="how_are_you" class="page">
    <div id="status_of_you">
        <div id="status_of_you_inner">
            <div id="status_of_you_top">
                <div>你的属性</div>
                <div id="all_status_point">{allStatusPoint}</div>
            </div>
            <div id="status_block">
            {#each statusList as statusGroup}
                <div>
                {#each statusGroup as status}
                    <div>
                        <div>{status.name}：</div>
                        <div class="statu_point">{status.value}</div>
                        <div on:click={()=>statusUp(status)} class="statu_up"><img src="./img/plus.png"></div>
                        <div on:click={()=>statusDown(status)} class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                {/each}
                </div>
            {/each}    
            </div>
        </div>
    </div>
    <div id="coefficient_of_body">
        <div>你的肉体</div><br>
        <div>
        {#each bodyList as item}
            <div>{item.label}：{item.value}</div>
        {/each}
        </div>
    </div>
    <div id="coefficient_of_soul">
        <div>你的灵魂</div><br>
        <div>
        {#each soulList as item}
            <div>{item.label}：{item.value}</div>
        {/each}
        </div>
    </div>
</div>

<script lang='ts'>
    import { addCoefficient, changeStatus } from "../../../../../lib/hooks/effect_basic";
    import { printLog } from "../../../../information/logs/logs";
    import { idleCharactor as YOU } from "../newGame";

    type Status = {
        name:"力量"|"体质"|"耐力"|"敏捷"|"巧手"|"智慧"|"魔力"|"通灵",
        value:number
    }

    //属性表
    let statusList:Status[][] = [[
        {name:"力量",value:0},
        {name:"体质",value:0},
        {name:"耐力",value:0},
        {name:"敏捷",value:0},
    ],[
        {name:"巧手",value:0},
        {name:"智慧",value:0},
        {name:"魔力",value:0},
        {name:"通灵",value:0},
    ]]

    //总属性值
    let allStatusPoint = 10

    //确认计数器
    let status_lock = 0 
    export function onConfirm(){
        if(status_lock < 3){
            if(allStatusPoint > 0){
                printLog("你的能力不足，这会使你寸步难行……")
                status_lock += 1
                return false
            }
        }
        else if(status_lock == 3){
            printLog("骄兵必败……")
            status_lock = 0;
        }

        var logs = "你"
        if(status_text.length >= 2){
            for(let i = 0; i < status_text.length ; i++){
                if(i == status_text.length - 2){
                    logs = logs + status_text[i] +"并且"
                }
                else if( i == status_text.length -1){
                    logs = logs + status_text[i] + "。"
                }
                else{
                    logs = logs + status_text[i] +"、"
                }
            }
        }
        else if(status_text.length == 0){
            return false
        }
        else{
            logs += status_text
        }
        printLog(logs)
    }

    //属性点对应的描述词，由于分配数量多，可能有复数的描述词，所以用列表
    let status_text:string[] = []
    //加属性点，原理是点击plus和reduce修改属性点，并修改总属性点，同时，某个属性超过2后，增加对应的能力系数
    function statusUp(status:Status){
        const statusName = status.name
        const oldValue = status.value
        const old_all = allStatusPoint
        //允许增加属性点
        if(oldValue < 3 && old_all > 0){
            status.value += 1
            allStatusPoint -= 1
            changeStatus(YOU,statusName,oldValue+1)

            //属性超过2后，修改能力系数
            if(oldValue+1 == 2){
                changeCoe(statusName,1)
            }
        }
    }
    //减属性点
    function statusDown(status:Status){
        const statusName = status.name
        const oldValue = status.value
        if(oldValue > 0){
            status.value -= 1
            allStatusPoint += 1
            changeStatus(YOU,statusName,oldValue-1)
            //删除系数
            if(oldValue-1 == 1){
                changeCoe(statusName,-1)
            }  
        }
    }

    //改变系数
    function changeCoe(statusName:Status["name"],number:1|-1){
        let text:string
        switch(statusName){
            case "力量":
                addCoefficient(YOU,["攻击","max"],number)
                text = "强而有力"
                break;
            case "体质":
                addCoefficient(YOU,["生命","min"],number*2)
                addCoefficient(YOU,["生命","max"],number*2)
                text = "体格壮魄"
                break;
            case "耐力":
                addCoefficient(YOU,"活性",number)
                text = "坚韧不屈"
                break;
            case "敏捷":
                addCoefficient(YOU,"乱舞",number)
                text = "精准灵敏"
                break;
            case "巧手":
                addCoefficient(YOU,"匠艺",number)
                text = "心灵手巧"
                break;
            case "智慧":
                addCoefficient(YOU,["法术强度","max"],number)
                text = "博古通今"
                break;
            case "魔力":
                addCoefficient(YOU,"法术量",number)
                text = "深及奥法"
                break;
            case "通灵":
                addCoefficient(YOU,"灵知",number)
                text = "诡秘莫测"
                break;

        }
        //添加或删除text
        if(number == 1){
            status_text.push(text)
        }
        else{
            const index = status_text.findIndex(value=>value==text)
            status_text.splice(index,1)
        }
    }

    //生成系数栏
    let bodyList:{label:string,value:any}[] = []
    let soulList:{label:string,value:any}[] = []
    $: {
        const body = ["生命","攻击","防御","活性","乱舞"]
        const soul = ["法术量","法术强度","咏唱时间","匠艺","灵知"]
        for(let i in YOU["coefficient"]){
            const value = YOU["coefficient"][i]
            if(body.includes(i)){
                bodyList.push({label:i,value})
            }
            else if(soul.includes(i)){
                soulList.push({label:i,value})
            }
        }
    }
</script>

<style scoped lang='scss'>
#status_of_you{
		position:relative;
		left:-20px;
		display:flex;
	}		

#status_of_you_top{
	text-align:center;
}

		#status_block{
			display:flex;
		}
			#status_block div div :first-child{
				width:55px;
			}

			#status_block div div :nth-child(2){
				width:40px;
			}
			#status_block div div div img{
				max-height:20px;
				max-width:20px;
				position:relative;
				top:3px;
			}
			#status_block div div{
				display: flex;
				justify-content: flex-end;
			}


#coefficient_of_soul{
	position:absolute;
	right:20px;
	top:20px;
}


#coefficient_of_body{
	position:absolute;
	left:20px;
	top:20px;
}

#coefficient_of_body_inner > div , #coefficient_of_soul_inner > div{
	display: flex;
}
</style>