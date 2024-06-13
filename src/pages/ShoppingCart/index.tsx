import { For, Match, Show, Switch, createMemo, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { AddressInfo, CartItemInfo, List, Response } from "~/data/interface";
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
  const navigate = useNavigate();

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
    return Math.round(res * 100) / 100;
  });

  const addressQuery = createQuery<AddressInfo[]>(() => ({
    queryKey: ["address"],
    queryFn: async () => {
      const resp = await fetch("/api/address/list");

      const res: Response<AddressInfo[]> = await resp.json();

      if (res.data === null) {
        throw new Error(res.message);
      }

      return res.data;
    },
  }));

  const [address, setAddress] = createSignal<number | null>(null);

  const makeOrder = async () => {
    const resp = await fetch("/api/order/place", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ orderAddress: address() }),
    });
    const res: Response<number> = await resp.json();

    if (res.data === null) {
      alert(`创建订单失败！原因：${res.message}`);
    } else {
      alert("创建订单成功！");
      navigate(`/orders/${res.data}`);
    }
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
              <div class="mt-4 flex items-center justify-between">
                <div class="flex flex-col space-y-1">
                  <label for="address">收货地址</label>
                  <select
                    id="address"
                    class="rounded px-2 py-1"
                    onInput={(e) => setAddress(parseInt(e.currentTarget.value))}
                    value={`${address()}`}
                  >
                    <For each={addressQuery.data!}>
                      {(addr) => (
                        <option value={addr.addressAreaId}>
                          {addr.addressName}
                        </option>
                      )}
                    </For>
                  </select>
                </div>
                <div class="flex flex-col space-y-2">
                  <span class="text-2xl">
                    总价：
                    <span class="font-semibold text-red-600">
                      ￥{allPrice()}
                    </span>
                  </span>
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
