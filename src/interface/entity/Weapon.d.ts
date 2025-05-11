export type Weapon = {
    id:string,
    name:string,
    type: string,
    handed: number,
    price: string,
    weapon_bonus: string,
    defend_bonus: string,
    impact: string,
    requirement: string,
    entry: string,
    effect: string,
    description: string
};

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