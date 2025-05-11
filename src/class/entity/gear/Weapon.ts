import { Gear } from "./Gear";

export class Weapon extends Gear{
    constructor(
        public id:string,
        public name:string,
        public type: string,
        public handed: number,
        public price: string,
        public weapon_bonus: string, //攻击加成
        public defend_bonus: string, //防御加成
        public impact: string,
        public requirement: string,
        public entry: string,
        public effect: string,
        public description: string
    ){
        super(name,id,description,type,price,impact,requirement,entry)
    }
}
//字典
export const weaponDic = {
    type: "类型",
    handed: "穿持",
    price: "价值",
    weapon_bonus: "武器性能",
    defend_bonus: "防御性能",
    impact: "装备影响",
    requirement: "装备需求",
    entry: "词条",
    effect: "效果",
    description: "介绍"
};