type PageName = "start"|"main"|"information"
//切换不同的界面
export function controlPage(name:PageName,state:boolean){
    switch(name){
        case "start":
            controlStartPage(state);
            break;
        case "main":
            controlMainPage(state);
            break;
        case "information":
            controlInfoPage(state)
    }
}

//开始界面的控制
export let showStartPage = true
function controlStartPage(state:boolean){
    showStartPage = state
}
//主界面的控制
export let showMainPage = false 
function controlMainPage(state:boolean){
    showMainPage = state
}
//消息的控制
export let showInfoPage = false 
function controlInfoPage(state:boolean){
    showInfoPage = state
}
