import { For, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { GoodBrief } from "~/components";
import { mockOrders } from "~/data/mock";

export default () => {
  const [data, _setData] = createSignal(mockOrders);

  return (
    <div class="space-y-4 p-2">
      <h1 class="text-2xl font-semibold">订单信息</h1>
      <hr />
      <table class="w-full bg-white/20">
        <thead>
          <tr class="bg-white/40">
            <th class="whitespace-nowrap border p-2">订单编号</th>
            <th class="whitespace-nowrap border p-2">订单状态</th>
            <th class="whitespace-nowrap border p-2">店铺名称</th>
            <th class="whitespace-nowrap border p-2">商品信息</th>
          </tr>
        </thead>
        <tbody>
          <For each={data()}>
            {(item) => (
              <tr class="hover:bg-white/40">
                <td class="border p-2">{item.orderId}</td>
                <td class="border p-2">{item.orderStatus}</td>
                <td class="border p-2">
                  <A class="hover:text-blue-600" href={`/shops/${item.shopId}`}>
                    {item.shopName}
                  </A>
                </td>
                <td class="border p-2">
                  <GoodBrief {...item.good} />
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
