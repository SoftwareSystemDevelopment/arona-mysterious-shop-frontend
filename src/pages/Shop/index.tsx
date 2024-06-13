/// TODO(yur): review this

import { For, createSignal } from "solid-js";
import { Button, Card, GoodBrief } from "~/components";
import { mockGoods } from "~/data/mock";

// TODO: filters
const DropdownFilter = () => <Button>筛选</Button>;

export default () => {
  // TODO: 改为使用 mockShops
  const [data, _setData] = createSignal(mockGoods);

  return (
    <div class="flex flex-col items-center space-y-4">
      <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 px-16 py-8">
        <h1 class="text-3xl font-bold">店铺名称</h1>
        <p class="text-center text-lg text-blue-400">
          店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
        </p>
      </Card>
      <Card class="flex w-4/5 max-w-[1080px] flex-col space-y-4 px-4 py-8">
        <div class="flex items-center justify-center">
          <h1 class="text-3xl">全部商品</h1>
          <div class="fixed right-4">
            <DropdownFilter />
          </div>
        </div>
        <div class="flex flex-wrap">
          <For each={data()}>{(item) => <GoodBrief {...item} />}</For>
        </div>
      </Card>
    </div>
  );
};
