<div id="camera_outside" class="camera outside">
    <div id="outside_block" class="outside">
        <div id="team_bar">
            <div id="team_bar_top">
                <div class="top_line">
                    <div>人物</div>
                    <div>等级</div>
                    <div>生命</div> 
                </div>
            </div>
            <div id="character_000000" class="character_block">
                <div class="character_line">
                    <div class="character_name">你</div>
                    <div class="character_level">lv.1</div>
                    <div class="character_hp">1/5</div>
                </div>
                <div class="buff_line">
                    <span>『再生2』</span><span>『恒净1』</span><br>
                </div> 
                <div class="effect_line">
                    ｢你好｣
                </div>
            </div>
            <div id="character_000001" class="character_block">
                <div class="character_line">
                    <div class="character_name">小狗</div>
                    <div class="character_level">lv.999</div>
                    <div class="character_hp">2000/2000</div>
                </div>
                <div class="buff_line">
                    
                </div> 
                <div class="effect_line">
                    
                </div>
            </div>
            <div id="character_000001" class="character_block">
                <div class="character_line">
                    <div class="character_name">小猫</div>
                    <div class="character_level">lv.998</div>
                    <div class="character_hp">2000/2000</div>
                </div>
                <div class="buff_line">
                    
                </div> 
                <div class="effect_line">
                    
                </div>
            </div>
        </div>

        <div id="enemy_bar" class="outside">
            <div id="enemy_bar_top">
                <div class="top_line">
                    <div>敌人</div>
                    <div>等级</div>
                    <div>生命</div> 
                </div>
            </div>
            <div id="character_000000" class="enemy_block hover_black">
                <div class="character_line">
                    <div class="character_name">我</div>
                    <div class="character_level">lv.1</div>
                    <div class="character_hp">5/5</div>
                </div>
                <div class="buff_line">
                    <span>『流血2』</span><span>『污染1』</span><br>
                </div> 
                <div class="effect_line">
                    ｢世界｣
                </div>
            </div>
            <div id="character_000001" class="character_block">
                <div class="character_line">
                    <div class="character_name">小狗</div>
                    <div class="character_level">lv.999</div>
                    <div class="character_hp">2000/2000</div>
                </div>
                <div class="buff_line">
                    
                </div> 
                <div class="effect_line">
                    
                </div>
            </div>
            <div id="character_000001" class="character_block">
                <div class="character_line">
                    <div class="character_name">小猫</div>
                    <div class="character_level">lv.998</div>
                    <div class="character_hp">2000/2000</div>
                </div>
                <div class="buff_line">
                    
                </div> 
                <div class="effect_line">
                    
                </div>
            </div>
        </div>
    </div>
</div>

<script lang='ts'>

</script>

<style scoped lang='scss'>
#outside_block{
	font-size:16px;

 	position:relative;
	display: flex;
	width:596px;
	height:316px;
	border:2px solid black;
	box-sizing: border-box;
}

#outside_block::before{
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
    height:95%;
  transform: translate(-50%,-50%);
  border-left: 1.6px dashed black; /* 设置左边框样式和宽度 */
}

.character_block, .enemy_block{
	line-height:18px;
	margin-bottom:2px;
}


#team_bar{
	width:calc(50% - 2.5em);
	margin:10px 10px;
}

#enemy_bar{
	width:calc(50% - 2.5em);
	justify-content:flex-end;
	margin:10px 10px;
	margin-left:auto;
}

#enemy_bar .character_line{
	justify-content:flex-end;
}

#enemy_bar .top_line{
	justify-content:flex-end;
}
/**/
.top_line{
	display:flex;
}
	.top_line div:nth-child(1){
		width:6em;
	}
	.top_line div:nth-child(2){
		width:4em;
	}
	.top_line div:nth-child(3){
		width:6em;
		text-align: center;
	}
/**/


.character_line{
	display:flex;

}

.character_line div:nth-child(1){
	width:6em;

}
.character_line div:nth-child(2){
	width:4em;
}
.character_line div:nth-child(3){
	width:6em;
	text-align: center;
}

.buff_line{
	position:relative;
	left:-0.5em;
}

.buff_line > span{
	margin-right:-1em;
}



</style>