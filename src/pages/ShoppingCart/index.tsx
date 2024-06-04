/// TODO(yur): review this file

import { For } from "solid-js";
import { createStore } from "solid-js/store";
import { Card } from "~/components";
import CartItem, { CartItemProps } from "./CartItem";

export default () => {
  const [cart, setCart] = createStore<CartItemProps[]>([
    { id: "1", count: 1, selected: false },
    { id: "2", count: 1, selected: true },
    { id: "3", count: 1, selected: false },
    { id: "4", count: 1, selected: true },
  ]);

  return (
    <div class="flex justify-center">
      <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 py-8">
        <h1 class="text-3xl">购物车</h1>
        <For each={cart}>
          {(itemProp, i) => (
            <>
              <hr />
              <div class="flex">
                <div class="flex w-[5%] px-3">
                  <div class="my-auto w-full justify-center">
                    <input
                      type="checkbox"
                      checked={cart[i()].selected}
                      onInput={(e) =>
                        setCart(i(), {
                          ...cart[i()],
                          selected: e.currentTarget.checked,
                        })
                      }
                    />
                  </div>
                </div>
                <CartItem {...itemProp} />
              </div>
            </>
          )}
        </For>
        <Card class="my-10 flex flex-col">
          <div class="flex flex-row-reverse py-4">
            <h1 class="px-5 text-3xl text-red-600">总计：¥1.00</h1>
          </div>
          <div class="mr-4 flex flex-row-reverse">
            <button
              type="button"
              class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              前往付款
              <svg
                class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </Card>
      </Card>
    </div>
  );
};
