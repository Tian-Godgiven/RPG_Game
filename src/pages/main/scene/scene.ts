//切换不同场景
type SceneName = "newGame"|"city"|"outside"|"move"|null
export let nowScene:{scene:SceneName,title:string} //当前显示的场景
export function changeScene(sceneName:SceneName|null,title?:string){
    //显示指定的场景
    nowScene.scene = sceneName
    
    switch(sceneName){
        case "city":
            //只显示city相关内容
            $(".camera").hide()
            $(".city").show()
            break;
        
    }
    

    if(title){
        nowScene.title = title
    }
}