<div id="camera_newgame" class="camera">
    <div id="newgame_character">
        <div id="who_are_you" class="newgame_character_page">
            你是：<input id="WhoAreYou_input" type="text" placeholder="你"></div>
        <div id="race_of_you" class="newgame_character_page">
            你属于：
            <select id="newgame_race_select" data-live-search="true" class="selectpicker show-tick">
                <optgroup label="人类">
                    <option value="race_00001">人类</option>
                    <option value="race_00002">精灵</option>
                    <option value="race_00003">矮人</option>
                    <option value="race_00004">半身人</option>
                </optgroup>
                <!--<optgroup label="兽人">
                    <option value="race_01001">欧克</option>
                    <option value="race_01002">猪人</option>
                    <option value="race_01003">犬兽人</option>
                    <option value="race_01004">猫兽人</option>
                    <option value="race_01005">熊兽人</option>
                    <option value="race_01006">兔兽人</option>
                    <option value="race_01007">虎兽人</option>
                </optgroup>
                <optgroup label="亚人">
                    <option value="race_02001">虫人</option>
                    <option value="race_02002">鱼人</option>
                    <option value="race_02003">鸟人</option>
                </optgroup>-->
            </select></div>
        <div id="which_are_you" class="newgame_character_page">
            <div id="which_are_you_top">你应是：</div>
            <div id="which_are_you_inner">
                <div class="pretty p-default p-round">
                    <input type="radio" name="gender" value="男性">
                    <div class="state p-success-o" >
                        <label>男性</label>
                    </div>
                </div>

                <div class="pretty p-default p-round">
                    <input type="radio" name="gender" value="女性">
                    <div class="state p-success-o">
                        <label>女性</label>
                    </div>
                </div>

                <div class="pretty p-default p-round">
                    <input type="radio" name="gender" value="一个谜" checked="true">
                    <div class="state p-success-o">
                        <label>一个谜</label>
                    </div>
                </div>
            </div></div>
        <div id="how_are_you" class="newgame_character_page">
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
            </div></div>
        <div id="what_you_had" class="newgame_character_page">
            <div>你所拥有
                <div id="what_you_want">
                    <div id="money_00001" class="hover_black">50G<span>1</span></div>
                    <div id="armer_000001" class="hover_black">衣物<span>1</span></div>
                    <div id="weapon_010001" class="hover_black">木剑<span>1</span></div>
                    <div id="weapon_010006" class="hover_black">小盾<span>1</span></div>
                    <div id="item_00001" class="hover_black">生命药水x1<span>1</span></div>
                </div>
            </div>
            <div id="what_you_had_balance">
                <div id="balance_num">5</div>
                <img src="./img/arrow_left.png"><img src="./img/arrow_right.png"></div>
            <div>为此舍弃
                <div id="what_you_lost">
                    <div id="money_00001" class="hover_black">50G<span>1</span></div>
                    <div id="money_00001" class="hover_black">50G<span>1</span></div>
                    <div id="weapon_010002" class="hover_black">指虎<span>1</span></div>
                    <div id="weapon_010003" class="hover_black">小刀<span>2</span></div>
                    <div id="weapon_010004" class="hover_black">木棒<span>2</span></div>
                    <div id="weapon_010005" class="hover_black">匕首<span>2</span></div>
                    <div id="weapon_010007" class="hover_black">旧火枪<span>3</span></div>
                    <div id="weapon_010008" class="hover_black">短弓<span>3</span></div>
                    <div id="weapon_010010" class="hover_black">长棍<span>4</span></div>
                    <div id="weapon_010011" class="hover_black">大剑<span>4</span></div>
                    <div id="weapon_010009" class="hover_black">魔杖<span>3</span></div>
                    <div id="weapon_010012" class="hover_black">法杖<span>5</span></div>
                    <div id="weapon_010013" class="hover_black">牧杖<span>5</span></div>
                    <div id="weapon_010014" class="hover_black">圣枝<span>5</span></div>
                    <div id="weapon_010015" class="hover_black">宝石手链<span>4</span></div>
                    <div id="weapon_010016" class="hover_black">魔导书<span>5</span></div>
                    <div id="armer_000002" class="hover_black">陈旧皮甲<span>2</span></div>
                    <div id="armer_000003" class="hover_black">劣旧铠甲<span>3</span></div>
                    <div id="armer_000004" class="hover_black">破旧法袍<span>3</span></div>
                    <div id="item_00001" class="hover_black">生命药水(小)x2<span>2</span></div>
                    <div id="item_00001" class="hover_black">生命药水(小)x3<span>3</span></div>
                    <div id="item_00004" class="hover_black">伤药x2<span>1</span></div>
                    <div id="item_00004" class="hover_black">伤药x4<span>2</span></div>
                    <div id="item_00017" class="hover_black">烟雾弹x2<span>1</span></div>
                    <div id="item_00018" class="hover_black">羽箭x4<span>1</span></div>
                    <div id="item_00020" class="hover_black">铅弹x4<span>2</span></div>
                    <div id="item_00025" class="hover_black">飞刀x3<span>3</span></div>
                    <div id="item_00019" class="hover_black">毒液x2<span>2</span></div>
                    <div id="item_00021" class="hover_black">白石<span>2</span></div>
                    <div id="item_00022" class="hover_black">红宝石<span>3</span></div>
                    <div id="item_00023" class="hover_black">青绿石<span>3</span></div>
                    <div id="item_00024" class="hover_black">黄玉<span>3</span></div>

                
                </div>
            </div>
        </div>
        <div id="description_of_you" class="newgame_character_page">
            <div>你的身世：</div><br>
            <textarea></textarea>
        </div>
        <div id="are_you_ready">
            <span id="character_000000" class = "entity">你</span>准备好开始冒险了吗？
        </div>

        <div id="newgame_character_confirm" 
             class="newgame_character_choice hover_black">
            确认</div>
        <div id="newgame_character_return"
             class="newgame_character_choice hover_black">
            返回</div>
    </div>
</div>

<script lang='ts'>

</script>

<style scoped lang='scss'>

</style>