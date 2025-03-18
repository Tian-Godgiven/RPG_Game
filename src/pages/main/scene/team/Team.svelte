<div>
    <div id="movement_left" class="movement left">
        <table id="team" class="city_left_table team"><tbody></tbody></table>
    </div>

    <div id="movement_right" class="movement right">
        <div id="team_pages" class="team">
        </div>
    </div>
</div>

<script lang='ts'>
$("#team_pages").html('\
		<div class="team_page_title"><div>'+title+'</div></div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_top">\
			<div  class="team_page">\
				<div>姓名：'+character["name"]+'</div><div>种族：'+character["race"]+'</div><div>性别：'+character["gender"]+'</div>\
			</div>\
			<div class="team_page">\
				<div>职业：'+character["profession"]+'</div><div>等级：lv.'+character["level"]+'</div><div>经验：'+character["exp"]+'</div>\
			</div>\
			<div class="team_page_effect team_page">\
				<div>状态：</div>\
				<div class="team_page">'+effects_div+'\
				</div>\
			</div>\
		</div>\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_status team_page">\
			<div>属性：</div>\
			<div>\
			<div class="team_page"><div>力量：'+character["status"]["力量"]+'</div><div>巧手：'+character["status"]["巧手"]+'</div></div>\
			<div class="team_page"><div>体质：'+character["status"]["体质"]+'</div><div>智慧：'+character["status"]["智慧"]+'</div></div>\
			<div class="team_page"><div>耐力：'+character["status"]["耐力"]+'</div><div>魔力：'+character["status"]["魔力"]+'</div></div>\
			<div class="team_page"><div>敏捷：'+character["status"]["敏捷"]+'</div><div>通灵：'+character["status"]["通灵"]+'</div></div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>	\
		\
		<div class="team_page_equipment">\
			<div class="team_page">\
				<div class="team_page">\
					<div>武器：</div>\
					<div>'+weapons_div+'</div>\
				</div>\
				<div class="team_page">\
					<div>防具：</div>\
					<div>'+armers_div+'</div>\
				</div>\
			</div>\
			<div class="team_page">\
				<div>熟练度：</div>\
				<div class="team_page_wrap">'+proficiencies_div+'</div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_coefficient">\
			<div class="team_page">\
				<div>物理：</div>\
				<div>\
					<div class="team_page">\
						<div>生命：</div><div>'+character["coefficient"]["生命"]+'</div>\
					</div>\
					<div class="team_page">\
						<div>攻击：</div><div>'+character["coefficient"]["攻击"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>防御：</div><div>'+character["coefficient"]["防御"]+'</div>\
					</div>\
				</div>\
			</div>\
			\
			<div class="team_page">\
				<div>魔法：</div>\
				<div>\
					<div class="team_page">\
						<div>法术量：</div><div>1/1</div>\
					</div>\
					<div class="team_page">\
						<div>法术强度：</div><div>'+character["coefficient"]["法术强度"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>咏唱时间：</div><div>'+character["coefficient"]["咏唱时间"]+'</div>\
					</div>\
				</div>\
			</div>\
			\
			<div class="team_page">\
				<div>特殊：</div>\
				<div>\
					<div class="team_page">\
						<div>活性：</div><div>'+character["coefficient"]["活性"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>乱舞：</div><div>'+character["coefficient"]["乱舞"]+'</div></div>\
					<div class="team_page">\
						<div>匠艺：</div><div>'+character["coefficient"]["匠艺"]+'</div>&nbsp;&nbsp;&nbsp;&nbsp;\
						<div>灵知：</div><div>'+character["coefficient"]["灵知"]+'</div></div>\
					</div>\
				</div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_skill">\
			<div class="team_page">\
				<div>战技：</div>\
				<div class="team_page_wrap">'+physical_div+'</div>\
			</div>\
			<div class="team_page">\
				<div>法术：</div>\
				<div class="team_page_wrap">'+magical_div+'</div>\
			</div>\
		</div>\
		\
		<div class="dashed_line"></div>\
		\
		<div class="team_page_description team_page">\
			<div>简介：</div>\
			<div>'+character["description"]+'</div>\
		</div>')
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