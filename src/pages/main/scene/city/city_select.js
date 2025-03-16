//生成select
function make_select_block(id){
	//生成一个列表，以此去除重合的type
	var select_types = [];
	var select = document.createElement("select");
	select.className = "select_block_select"

	var option_top =document.createElement("option");;
	$(option_top).html('<option value="all">全部</option>')
	$(select).append($(option_top).html())

	var table = $("#" + id + "_table");
	var select_objs= $(table).children().children().filter(function(){
		if($(this).css("display")=="none"){
			return false;
		}
		var obj=AllEntity[this.id]
		if(obj != null){
			var type = obj["type"];
			if(!select_types.includes(type)){
				select_types.push(type)
				var option =document.createElement("option");
				$(option).html('<option>'+type+'</option>')
				$(select).append($(option).html())
			}
		}
	})

	$("#select_block_select").html($(select).html());
	$('#select_block_select').selectpicker('refresh');
	$('#select_block_select').selectpicker('val', "all");
}


//点击应用数字筛选
$("#select_block_confirm").on("click",function(){
	select_types()
	select_price()
})


//类型筛选
var type="全部";
const selectContainer = $('.selectpicker').parent();
selectContainer.on("mousedown", "li", function() {
	type = $(this).text();
});
function select_types(){
	var focusing_table = return_focusing_table()
	if(type == "全部"){
		if($(focusing_table).attr("id") == "package_all_table"){
			var focusing_type = return_package_focusing_type()
			if(focusing_type == "all"){
				$(focusing_table).children().children().show()
			}
			else{
				var package_doms = return_package_doms()
				package_doms.show()
			}
		}
		else{
			$(focusing_table).children().children().show()
		}

	}
	else{
		var select_doms= $(focusing_table).children().children().filter(function(){
			var obj=AllEntity[this.id];
			if(obj != null){
				if(obj["type"] == type){
					return this
				}
			}
			else{
				return this
			}
		})
		$(focusing_table).children().children().hide()
		select_doms.show()
	}
};


//数字筛选价格功能
function select_price() {
  // 获取需要的 input 元素
  var smallInput = $('input[id="select_block_smallInput"]');
  var bigInput = $('input[id="select_block_bigInput"]');

    // 获取两个 input 元素的值
    var small = parseInt($('#select_block_smallInput').val());
    var big = parseInt($('#select_block_bigInput').val());

    //获取当前正在显示shop页面
    var focusing_table = return_focusing_table()

    if(big > small){
    //这个页面中价格大于small，且小于big的obj
		var select_objs= $(focusing_table).children().children().filter(function(){
			if($(this).css("display") !== "none"){
				var obj=AllEntity[this.id]
				if(obj != null){
					var price = parseInt(obj["price"].match(/\d+/)[0], 10);
					if(price >= small && price <= big){
						return this
					}
				}
				else{
					return this
				}
			}
	    })
	    	//所有项目隐藏
	//只有符合要求的项目显示
	    $(focusing_table).children().children().hide()
	    select_objs.show()
	}
	else if(small > big){
		$(focusing_table).children().children().hide()
		$(focusing_table).children().children().first().show();
	}
	

 };



//清空select
function clear_select(){
	var focusing_table = return_focusing_table()
	$(focusing_table).children().children().show()
	$('#select_block_smallInput').val("0");
	$('#select_block_bigInput').val("0");
}




//展开和收起筛选栏
	$("#select_block_fold").on("mousedown",function(){
		fold_select_block()
	})
	$("#select_block_folded").on("mousedown",function(){
		unfold_select_block()
	})
	function fold_select_block(){
		$("#select_ability").attr("folded",true)
		$("#select_block").hide()
		$("#select_block_folded").show()	
	}
	function unfold_select_block(){
		$("#select_ability").attr("folded",false)
		$("#select_block").show()
		$("#select_block_folded").hide()
	}
