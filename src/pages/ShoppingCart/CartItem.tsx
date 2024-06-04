/// TODO(yur): review this file

import { A } from "@solidjs/router";
// import { SetStoreFunction } from "solid-js/store";
import { Card } from "~/components";
// import { ItemData } from ".";

// export interface ItemProps {
//   goodId: string;
//   /**
//    * 处于购物车的下标
//    */
//   i: number;
//   /**
//    * 当前所处的购物车
//    */
//   cart: [ItemData[], SetStoreFunction<ItemData[]>];
// }

export interface CartItemProps {
  /**
   * 购物车中商品 id
   */
  id: string;

  /**
   * 购物车中商品数量
   */
  count: number;

  /**
   * 购物车中商品是否被选中
   */
  selected: boolean;
}

export default (props: CartItemProps) => {
  // const intRegex = /^\d+$/;
  // const current = props.cart[0][props.i];
  // const count = () => current.count;
  // const setCount = (val: number) =>
  //   props.cart[1](props.i, { ...current, count: val });
  // const add = () => setCount(count() + 1);
  // const sub = () => {
  //   if (count() > 0) setCount(count() - 1);
  // };

  return (
    <Card class="bg-white py-4">
      <div class="flex max-h-[270px]">
        <div class="min-w-[200px] max-w-[20%]">
          <A href={`/details/${props.id}`}>
            <img
              class="my-auto"
              src="/arona-mysterious-shop-frontend/img1.webp"
            ></img>
          </A>
        </div>
        <div class="w-[40%] flex-col px-3">
          <div class="h-[35%] overflow-hidden">
            <A
              href={`/details/${props.id}`}
              class="text-2xl hover:text-blue-500"
            >
              商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
            </A>
          </div>
          <div class="h-[65%] overflow-hidden">
            <p class="py-2 text-gray-500">
              商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述
            </p>
          </div>
        </div>
        <div class="my-auto flex w-[30%]">
          <h1 class="bold w-full text-center text-3xl text-red-600">¥1.00</h1>
        </div>
        {/*数量按钮 */}
        {/* <div class="mx-4 my-auto flex h-1/5 w-[30%] justify-center">
          <div class="flex flex-row-reverse">
            <div class="flex space-x-2">
              <button
                onClick={sub}
                disabled={count() === 0}
                type="button"
                class="mb-2 me-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none disabled:bg-gray-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                -
              </button>
              <div>
                <input
                  onChange={(e) => {
                    const result = intRegex.test(e.currentTarget.value);
                    if (result) {
                      setCount(Number.parseInt(e.currentTarget.value));
                    } else {
                      e.currentTarget.value = count().toString();
                    }
                  }}
                  value={count()}
                  class="inline-block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>
              <button
                onClick={add}
                type="button"
                class="mb-2 me-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                +
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </Card>
  );
};
