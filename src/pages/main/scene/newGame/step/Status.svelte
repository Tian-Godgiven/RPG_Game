<div id="how_are_you" class="page">
    <div id="status_of_you">
        <div id="status_of_you_inner">
            <div id="status_of_you_top">
                <div>你的属性</div>
                <div id="all_status_point">10</div>
            </div>
            <div id="status_block">
                <div>
                    <div>
                        <div>力量：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                    <div>
                        <div>体质：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                    <div>
                        <div>耐力：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                    <div>
                        <div>敏捷：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>巧手：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                    <div>
                        <div>智慧：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                    <div>
                        <div>魔力：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                    <div>
                        <div>通灵：</div><div class="statu_point">0</div>
                        <div class="statu_up"><img src="./img/plus.png"></div>
                        <div class="statu_down"><img src="./img/reduce.png"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="coefficient_of_body">
        <div>你的肉体</div><br>
        <div id="coefficient_of_body_inner">
        </div>
    </div>
    <div id="coefficient_of_soul">
        <div>你的灵魂</div><br>
        <div id="coefficient_of_soul_inner">
        </div>
    </div>
</div>

<script lang='ts'>
    import { idleCharactor } from "../newGame";

    let status_lock = 0 //能力值
    export function onConfirm(){
        if(status_lock < 3){
            if(parseInt($("#status_of_you_inner #all_status_point").html()) > 0){
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
            for(i = 0; i < status_text.length ; i++){
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
    var status_text = []

    makeCoefficient(idleCharactor)
    //加属性点，原理是点击plus和reduce修改属性点，并修改总属性点，同时，某个属性超过2后，增加对应的能力系数
    $(".statu_up").on("mousedown",function(){
        var parent = $(this).parent()
        var statuName = parent.children().eq(0).html().slice(0,-1)

        var old = parseInt(parent.children(".statu_point").html())
        var old_all = parseInt($("#status_of_you_inner #all_status_point").html())

        if(old < 3 && old_all > 0){
            parent.children(".statu_point").html(old + 1)
            $("#status_of_you_inner #all_status_point").html(old_all - 1)
            change_statu(YOU,statuName,"+",1)

            //属性超过2后，修改能力系数
            if(old+1 == 2){
                var coeName
                var coeNum = 1;
                switch(statuName){
                    case "力量":
                        coeName = "攻击"
                        coeNum = "+0/+1"
                        status_text.push("强而有力")
                        break;
                    case "体质":
                        coeName = "生命"
                        coeNum = "+2/+2"
                        status_text.push("体格壮魄")
                        break;
                    case "耐力":
                        coeName = "活性"
                        status_text.push("坚韧不屈")
                        break;
                    case "敏捷":
                        coeName = "乱舞"
                        status_text.push("精准灵敏")
                        break;
                    case "巧手":
                        coeName = "匠艺"
                        status_text.push("心灵手巧")
                        break;
                    case "智慧":
                        coeName = "法术强度"
                        status_text.push("博古通今")
                        coeNum = "+0/+1"
                        break;
                    case "魔力":
                        coeName = "法术量"
                        status_text.push("深及奥法")
                        break;
                    case "通灵":
                        coeName = "灵知"
                        status_text.push("诡秘莫测")
                        break;

                }
                change_coefficient(YOU,coeName,"+",coeNum)
                makeCoefficient(YOU)
            }
        }
    })
    //减属性点
    $(".statu_down").on("mousedown",function(){
        var parent = $(this).parent()
        var statuName = parent.children().eq(0).html().slice(0,-1)

        var old = parseInt(parent.children(".statu_point").html())
        var old_all = parseInt($("#status_of_you_inner #all_status_point").html())

        if(old > 0){
            parent.children(".statu_point").html(old - 1)
            $("#status_of_you_inner #all_status_point").html(old_all + 1)
            change_statu(YOU,statuName,"+",-1)

            if(old-1 == 1){
                var coeName
                var coeNum = -1;
                switch(statuName){
                    case "力量":
                        coeName = "攻击"
                        coeNum = "+0/-1"
                        break;
                    case "体质":
                        coeName = "生命"
                        coeNum = "-2/-2"
                        break;
                    case "耐力":
                        coeName = "活性"
                        break;
                    case "敏捷":
                        coeName = "乱舞"
                        break;
                    case "巧手":
                        coeName = "匠艺"
                        break;
                    case "智慧":
                        coeName = "法术强度"
                        coeNum = "+0/-1"
                        break;
                    case "魔力":
                        coeName = "法术量"
                        break;
                    case "通灵":
                        coeName = "灵知"
                        break;

                }
                change_coefficient(YOU,coeName,"+",coeNum)
                makeCoefficient(YOU)
            }
        }
    })
    //生成系数栏
    function makeCoefficient(character){
        var body = ["生命","攻击","防御","活性","乱舞"]
        var soul = ["法术量","法术强度","咏唱时间","匠艺","灵知"]
        var body_div = ""
        var soul_div = ""
        for( i in character["coefficient"]){
            if(body.includes(i)){
                body_div += "<div>" + i + "：" + character["coefficient"][i] + "</div>"
            }
            else if(soul.includes(i)){
                soul_div += "<div>" + i + "：" + character["coefficient"][i] + "</div>"
            }
        }
        $("#coefficient_of_body_inner").html(body_div)
        $("#coefficient_of_soul_inner").html(soul_div)
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