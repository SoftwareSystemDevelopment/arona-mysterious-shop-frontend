import { For, Match, Show, Switch, createMemo } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { List, OrderInfo, Response } from "~/data/interface";
import { orderStatusMap } from "~/data/constants";

interface OrderItemProps extends OrderInfo {}

const OrderItem = (props: OrderItemProps) => {
  const navigate = useNavigate();

  const totalPrice = createMemo(() => {
    let res = 0;
    props.orderItems.forEach((item) => {
      res += item.price * item.quantity;
    });
    return res;
  });

  const onClick = () => {
    navigate(`/orders/${props.orderId}`);
  };

  return (
    <tr class="cursor-pointer hover:bg-white/40" onClick={onClick}>
      <td class="border p-2 text-center">{props.orderId}</td>
      <td class="border p-2 text-center">
        {orderStatusMap[props.orderStatus]}
      </td>
      <td class="border p-2 text-center">{props.orderPayDate}</td>
      <td class="border p-2 text-center">￥{totalPrice()}</td>
    </tr>
  );
};

const queryFn = async () => {
  const resp = await fetch("/api/order/list");

  const res: Response<List<OrderInfo>> = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }

  return res.data.records;
};

export default () => {
  const query = createQuery<OrderInfo[]>(() => ({
    queryKey: ["order"],
    queryFn,
  }));

  return (
    <div class="space-y-4 p-2">
      <h1 class="text-2xl font-semibold">订单信息</h1>
      <hr />
      <table class="w-full bg-white/20">
        <thead>
          <tr class="bg-white/40">
            <th class="whitespace-nowrap border p-2">订单编号</th>
            <th class="whitespace-nowrap border p-2">订单状态</th>
            <th class="whitespace-nowrap border p-2">下单日期</th>
            <th class="whitespace-nowrap border p-2">订单总额</th>
          </tr>
        </thead>
        <tbody>
          <Switch>
            <Match when={query.isPending}>
              <tr>
                <td class="py-4" colSpan={4}>
                  <div class="flex justify-center">
                    <span class="text-xl">Loading...</span>
                  </div>
                </td>
              </tr>
            </Match>
            <Match when={query.isError}>
              <tr>
                <td class="py-4" colSpan={4}>
                  <div class="flex justify-center">
                    <span class="text-xl">Error: {query.error?.message}</span>
                  </div>
                </td>
              </tr>
            </Match>
            <Match when={query.isSuccess}>
              <Show
                when={query.data!.length > 0}
                fallback={
                  <tr>
                    <td class="py-4" colSpan={4}>
                      <div class="flex justify-center">
                        <span class="text-xl">您还没有订单哦~</span>
                      </div>
                    </td>
                  </tr>
                }
              >
                <For each={query.data}>{(item) => <OrderItem {...item} />}</For>
              </Show>
            </Match>
          </Switch>
        </tbody>
      </table>
    </div>
  );
};
