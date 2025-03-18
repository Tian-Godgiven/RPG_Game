import type { Entity } from "./Entity";

export type Character = {
    id:string,
    title:string,
    name:string,
    race:string,
    level:string,
    status:string,
    gender:string,
    profession:string,
    weapon:string,
    armer:string,
    physicalSkill:string,
    magicalSkill:string,
    characteristic:string,
    description:string
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