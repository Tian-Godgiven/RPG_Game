
//切换不同场景
type SceneName = "newGame"
export let nowScene:{scene,title:string} //当前显示的场景
export function changeScene(sceneName:SceneName,title?:string){
    //显示指定的场景
    nowScene.scene = sceneName
    if(title){
        nowScene.title = title
    }
}