import { createMemo, createSignal } from "solid-js";
import { GoodInfo } from "~/data/interface";
import { Button, Card } from "~/components";

interface DetailsProps extends GoodInfo {}

export default (props: DetailsProps) => {
  const price = createMemo(() => Math.round(props.productPrice * 100) / 100);

  const [count, setCount] = createSignal(0);

  return (
    <div class="flex justify-center space-x-4">
      <Card class="flex w-3/5 max-w-[810px] py-8">
        <div class="flex-[3]">
          {/* TODO: good image */}
          <img
            class="rounded-md"
            src="/arona-mysterious-shop-frontend/img1.webp"
          />
        </div>
        <div class="flex flex-[2] flex-col justify-between px-4 py-2">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold">{props.productName}</h1>
            <p class="text-blue-400">{props.productDescription}</p>
          </div>
          <div class="flex flex-row-reverse">
            <span class="text-2xl font-bold text-red-600">￥{price()}</span>
          </div>
        </div>
      </Card>
      <Card class="flex w-1/5 max-w-[270px] flex-col justify-around py-8">
        <div class="flex space-x-2">
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
        </div>
        <div class="flex justify-between">
          <Button>加入购物车</Button>
          <Button>立即购买</Button>
        </div>
      </Card>
    </div>
  );
};
