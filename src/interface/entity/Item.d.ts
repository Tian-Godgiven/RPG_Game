export type Item = {
    id:string,
    name:string,
    type: string,
    price: string,
    bonus: string,
    requirement: string,
    entry: string,
    effect: string,
    description: string,
    num:number
};

export const itemDic = {
    type: "类型",
    price: "价值",
    bonus: "道具性能",
    requirement: "使用需求",
    entry: "词条",
    effect: "效果",
    description: "介绍"
};