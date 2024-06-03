import { createEffect, createSignal } from "solid-js";
import { Carousel, Navbar } from "~/components";

export default () => {
  // 商品个数
  const [count, setCount] = createSignal<number>(0);
  const intRegex = /^\d+$/;
  const add = () => setCount(count() + 1);
  const sub = () => setCount(count() >= 1 ? count() - 1 : 0);
  return (
    <>
      <Navbar />
      <div class="flex justify-between py-20">
        <div class="w-1/2 px-4 py-2">
          <Carousel interval={5000} urls={["/img1.webp", "/img2.webp"]} />
        </div>
        <div class="h-1/5 w-1/2 flex-col px-4 py-2">
          <h1 class="bold text-4xl">商品标题</h1>
          <div class="mt-2 h-2/5 w-3/4">
            <p class="h-60 overflow-hidden text-blue-400">
              这是商品详细描述啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕啊锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕锕ni锕锕锕锕锕锕锕
            </p>
          </div>
          {/* 购物数量按钮 */}
          <div class="my-2 flex h-1/5 w-3/4 justify-between">
            <div class="flex-col-reverse">
              <h1 class="bold text-3xl text-red-600">¥1.00</h1>
            </div>
            <div class="flex space-x-2">
              <button
                onClick={sub}
                type="button"
                disabled={count() === 0}
                class="mb-2 me-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none disabled:bg-gray-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                -
              </button>
              <div>
                <input
                  onChange={(e) => {
                    const result = intRegex.test(e.currentTarget.value);
                    if (result)
                      setCount(Number.parseInt(e.currentTarget.value));
                    else e.currentTarget.value = count().toString();
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
          {/* 购买按钮 */}
          <div class="my-2 flex h-1/5 w-3/4 justify-between">
            <button
              type="button"
              class="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="me-2 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              加入购物车
            </button>
            <button
              type="button"
              class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              立即购买
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
        </div>
      </div>
      <div class="mx-4 h-full w-[87.5%] text-center outline">
        <h1 class="text-5xl">商品详情页面</h1>
      </div>
    </>
  );
};
