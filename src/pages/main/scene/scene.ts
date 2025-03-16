//切换不同场景
type SceneName = "newGame"|"outside"|null
export let nowScene:{scene:SceneName,title:string} //当前显示的场景
export function changeScene(sceneName:SceneName|null,title?:string){
    //显示指定的场景
    nowScene.scene = sceneName
    if(title){
        nowScene.title = title
    }
}