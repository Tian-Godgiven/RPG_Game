import City from "./city/City.svelte"
import NewGame from "./newGame/NewGame.svelte"
import Move from "./move/Move.svelte"
import Outside from "./outside/Outside.svelte"
import Package from "./package/Package.svelte"
import Team from "./team/Team.svelte"

//切换不同场景
type SceneName = "newGame"|"city"|"outside"|"move"|null|"package"|"team"
export let nowScene:{scene:typeof City | false,title:string} //当前显示的场景
export function changeScene(sceneName:SceneName|null,title?:string){
    //显示指定的场景
    switch(sceneName){
        case "city":
            nowScene.scene = City
            break;
        case "newGame":
            nowScene.scene = NewGame;
            break;
        case "move":
            nowScene.scene = Move;
            break;
        case "outside":
            nowScene.scene = Outside
            break;
        case "package":
            nowScene.scene = Package;
            break;
        case "team":
            nowScene.scene = Team
        default:
            nowScene.scene = false;
    }
    
    if(title){
        nowScene.title = title
    }
}