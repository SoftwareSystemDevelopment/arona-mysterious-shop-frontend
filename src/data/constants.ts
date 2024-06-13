import { GoodCategory } from "~/data/interface";

export const orderStatusMap: Record<number, string> = {
  0: "待支付",
  1: "待发货",
  2: "待收货",
  3: "已收货",
  4: "已取消",
};

export const goodCategoryMap: Record<GoodCategory, string> = {
  report: "报告",
  exp_orb: "强化石",
  ue_exp_material: "专武材料",
  bd: "技能光盘",
  skill_book: "技能书",
  ooparts: "欧帕兹",
};
