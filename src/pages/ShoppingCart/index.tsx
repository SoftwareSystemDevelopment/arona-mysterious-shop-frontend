import { For, Match, Show, Switch, createMemo } from "solid-js";
import { A } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { CartItemInfo, List, Response } from "~/data/interface";
import { Button, Card } from "~/components";
import CartItem from "./CartItem";

const queryFn = async () => {
  const resp = await fetch("/api/cart/items");

  const res: Response<List<CartItemInfo>> = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }

  return res.data.records;
};

export default () => {
  const query = createQuery<CartItemInfo[]>(() => ({
    queryKey: ["cart"],
    queryFn,
  }));

  const allPrice = createMemo(() => {
    if (!query.isSuccess) {
      return null;
    }

    let res = 0;
    query.data.forEach((item) => {
      res += item.productPrice * item.quantity;
    });
    return res;
  });

  // TODO: make order
  const makeOrder = () => {
    console.log("TODO: make order");
  };

  return (
    <div class="flex justify-center">
      <Switch>
        <Match when={query.isPending}>
          <Card class="flex w-2/5 max-w-[540px] flex-col items-center py-20">
            <span class="text-2xl">Loading...</span>
          </Card>
        </Match>
        <Match when={query.isError}>
          <Card class="flex w-2/5 max-w-[540px] flex-col items-center py-20">
            <span class="text-2xl">Error: {query.error?.message}</span>
          </Card>
        </Match>
        <Match when={query.isSuccess}>
          <Show
            when={query.data!.length > 0}
            fallback={
              <Card class="flex w-2/5 max-w-[540px] flex-col items-center space-y-8 py-20">
                <span class="text-2xl">购物车空空如也~</span>
                <A
                  class="text-lg font-semibold text-blue-500 underline hover:text-blue-900"
                  href="/goods"
                >
                  去购物
                </A>
              </Card>
            }
          >
            <Card class="w-4/5 max-w-[1080px] p-4">
              <For each={query.data}>{(item) => <CartItem {...item} />}</For>
              <div class="mt-4 flex justify-end">
                <div class="flex flex-col space-y-2">
                  <span class="text-2xl">
                    总价：
                    <span class="font-semibold text-red-600">
                      ￥{allPrice()}
                    </span>
                  </span>
                  {/* TODO: address */}
                  <div class="flex justify-end">
                    <Button onClick={makeOrder}>下单</Button>
                  </div>
                </div>
              </div>
            </Card>
          </Show>
        </Match>
      </Switch>
    </div>
  );
};
