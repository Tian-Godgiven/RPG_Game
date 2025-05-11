import type { Entity } from "./Entity";

export type Character = {
    id:string,
    title:string|null,//称号
    exp:{
        now:number,
        max:number
    },//经验
    name:string,
    race:string,
    level:string,
    status:Record<string,number>,
    gender:string,
    profession:string,
    weapon:string,
    armer:string,
    physicalSkill:string,
    magicalSkill:string,
    proficiency:string
    characteristic:string,
    effect:string[]
    description:string,
    coefficient:Record<string,number|Record<string,number>>,//系数
    hand:number
}

export const characterDic = {
    race:"种族",
    level:"等级",
    status:"属性",
    gender:"性别",
    profession:"职业",
    weapon:"武器",
    armer:"防具",
    physicalSkill:"战技",
    magicalSkill:"法术",
    characteristic:"特性",
    description:"介绍"
}