

export type Area = {
    id:string,
    name:string,
    type:string,
    state:string,
    description:string,
    information:string,
    locked:boolean,//是否解锁
    before:Area|null,//上一个地点
}

export const areaDic = {
    name:"地名",
    type:"类型",
    state:"状态",
    description:"介绍",
    information:"信息"
}