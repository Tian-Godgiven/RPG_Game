$("#start_newgame").on("mousedown",function(){
	$("#start_div").hide()
	$("#main_div").show()
	$("#information").show()

	start_newgame()
})

$("#start_oldgame").on("mousedown",function(){
	$("#start_div").hide()
	$("#main_div").show()
	$("#information").show()

	start_oldgame()
})

$(".start_block, .start_block_last").hover(
	function(){
		var white_div = $(this).children(".start_block_white")
		var text_div = white_div.children(".start_block_text")

		var height = white_div.height()
		var top = white_div.position().top
		var width = white_div.width()
		var left = white_div.position().left
		white_div.stop(true,false).animate({
			"height":0,
			"top":top+height/2,
			"width":0,
			"left":left+width/2,
		},800)
	},
	function(){
		var white_div = $(this).children(".start_block_white")
		var black_div = $(this).children(".start_block_black")
    	var text_div = white_div.children(".start_block_text")

    	var height = black_div.height()
		var width = black_div.width()

    	white_div.stop(true,false).animate({
			"height":height,
			"top":0,
			"width":width,
			"left":0,
		},800)
	}
)

