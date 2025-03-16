<div id="movement">
    <div id="movement_container">
        {#each nowMovements as movement}
        <div>
            <div class="block" on:click={movement.click} on:mouseenter={moveIn} on:mouseleave={moveOut}>
                <div class="white">{movement.label}</div>
            </div>
        </div>
        {/each}
    </div>
</div>

<script lang='ts'>
    import { nowMovements } from "./movement";

//移动上去时，将白色的部分高度减小
    function moveIn() {
        var white_div = $(this).find(".movement_box_white");
        if ($(white_div).data("has-clone") != true) {
            //创建黑色的克隆
            var black_div = white_div.clone()
            $(black_div).attr("class","movement_box_black")
            $(black_div).appendTo(this);
            white_div.data("has-clone",true)
        }

        var Height = white_div.height();
        if (Height > 0) {
            white_div.stop(true,false).animate({height: 0}, 250, "swing");
        }
    };

//移动出来时，将白色部分高度变大
    function moveOut() {
        var white_div = $(this).find(".movement_box_white");
        var Height = white_div.height();
        if (Height <= 128) {
            white_div.stop(true,false).animate({height: 128}, 250, "swing");
        }
    };
</script>

<style scoped lang='scss'>
#movement{
	margin:2px;
	width:600px;
	height:128px;
	position:relative;
	z-index:-1;
}

#movement_container > div{
	width:97.7px;
	height:128px;

	border:2px solid black;
	box-sizing: border-box;

	float:left;
	margin-right:2px;
}

.movement_box{
	height:100%;
	width:100%;
}

.movement_box_white{
	position:relative;
	background-color:white;
	line-height:110px;
	font-size:40px;
	text-align:center;

	width:100%;
	height:100%;


    z-index:-2;
    overflow:hidden;
}
.movement_box_black{
	position: absolute;
	top:0px;

	background-color: black;
	color:white;
	line-height:110px;
	font-size:40px;
	text-align:center;

	width:95px;
	height:100%;

	z-index:-3;
}
</style>