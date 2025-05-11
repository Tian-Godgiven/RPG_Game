import { Gear } from "./Gear"

export class Armer extends Gear {
    constructor(
        public id:string,
        public name:string,
        public type: string,
        public price: string,
        public bonus: string,
        public impact: string,
        public requirement: string,
        public entry: string,
        public effect: string,
        public description: string
    ){
        super(name,id,description,type,price,impact,requirement,entry)
    }
    
};

export const armerDic = {
    type: "类型",
    price: "价值",
    bonus: "装备性能",
    impact: "装备影响",
    requirement: "装备需求",
    entry: "词条",
    effect: "效果",
    description: "介绍"
};