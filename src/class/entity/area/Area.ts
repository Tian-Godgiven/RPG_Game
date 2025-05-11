import { Entity } from "../Entity"

export class Area extends Entity {
    constructor(
        public id:string,
        public name:string,
        public type:string,
        public state:string,
        public information:string,
        public description:string,
    ){
        super(name,id,description)
    }
}

export const areaDic = {
    name:"地名",
    type:"类型",
    state:"状态",
    description:"介绍",
    information:"信息"
}