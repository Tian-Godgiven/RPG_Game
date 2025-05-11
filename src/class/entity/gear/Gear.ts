import { Entity } from "../Entity";

export class Gear extends Entity{
    constructor(
        public name:string,
        public id: string,
        public description:string,
        public type: string, //类型
        public price: string,
        public impact: string, //效果
        public requirement: string,//装备需求
        public entry: string,//词条
    ){
        super(name,id,description)
    }
}