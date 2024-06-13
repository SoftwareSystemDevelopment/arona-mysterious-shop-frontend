import { Show, createMemo, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { createMutation, useQueryClient } from "@tanstack/solid-query";
import { CartItemInfo, Response } from "~/data/interface";
import { Button } from "~/components";

const mutationFn = async (props: { id: number; count: number }) => {
  let res: Response<boolean>;

  if (props.count > 0) {
    const resp = await fetch("/api/cart/item", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        productId: props.id,
        quantity: props.count,
      }),
    });

    res = await resp.json();
  } else {
    const resp = await fetch("/api/cart/item/remove", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        productId: props.id,
        quantity: -props.count,
      }),
    });

    res = await resp.json();
  }

  if (res.data === null) {
    throw new Error(res.message);
  }
};

interface CartItemProps extends CartItemInfo {}

export default (props: CartItemProps) => {
  const price = createMemo(() => Math.round(props.productPrice * 100) / 100);
  const image = createMemo(() => {
    const imageSrc = props.productImage;

    if (imageSrc === null) {
      return "/arona-mysterious-shop-frontend/img1.webp";
    }

    return `/api/${imageSrc}`;
  });

  const [count, setCount] = createSignal(props.quantity);

  const client = useQueryClient();

  const mutation = createMutation(() => ({
    mutationFn,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["cart"] });
    },
  }));

  const onModify = () => {
    const currentCount = count();
    const prevCount = props.quantity;

    if (currentCount === prevCount) {
      return;
    }

    mutation.mutate({ id: props.productId, count: currentCount - prevCount });
  };

  return (
    <div class="border-b-2 px-4 py-2 transition-colors hover:bg-white/40">
      <div class="flex justify-between space-x-2">
        <div class="flex-1">
          <img src={image()} />
        </div>
        <div class="flex-[2]">
          <A
            href={`/goods/${props.productId}`}
            class="text-2xl hover:text-blue-500"
          >
            {props.productName}
          </A>
        </div>
        <div class="flex flex-1 flex-col items-center justify-between py-4">
          <div class="flex items-baseline space-x-1">
            <h1 class="text-2xl font-semibold text-red-600">¥{price()}</h1>
            <span>x {props.quantity}</span>
          </div>
          <div class="flex items-baseline space-x-2">
            <span class="text-sm">数量：</span>
            <button
              onClick={() => setCount((c) => c - 1)}
              disabled={count() === 0}
              class="h-8 w-8 rounded-full bg-blue-700 text-center text-white hover:bg-blue-800 focus:outline-none disabled:bg-gray-500"
            >
              -
            </button>
            <input
              type="number"
              min={1}
              step={1}
              class="h-8 w-full flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              onInput={(e) => setCount(parseInt(e.currentTarget.value))}
              value={count()}
            />
            <button
              onClick={() => setCount((c) => c + 1)}
              class="h-8 w-8 rounded-full bg-blue-700 text-center text-white hover:bg-blue-800 focus:outline-none"
            >
              +
            </button>
            <Show
              when={count() !== 0}
              fallback={
                <Button
                  class="bg-red-700 px-2 py-1 text-sm hover:bg-red-800 focus:ring-red-300"
                  onClick={onModify}
                >
                  移除
                </Button>
              }
            >
              <Button class="px-2 py-1 text-sm" onClick={onModify}>
                修改
              </Button>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
};
