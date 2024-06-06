import { Show, createMemo } from "solid-js";
import { A } from "@solidjs/router";

interface GoodBriefProps {
  /**
   * 商品 id
   */
  id: string;

  /**
   * 商品标题
   */
  title: string;

  /**
   * 商品图片 url
   */
  image: string;

  /**
   * 商品价格
   */
  price?: number;
}

export default (props: GoodBriefProps) => {
  const price = createMemo(() => {
    if (typeof props.price === "undefined") {
      return undefined;
    }

    return Math.round(props.price * 100) / 100;
  });

  return (
    <div class="m-2 flex w-[240px] flex-col items-center space-y-2 rounded-md bg-white/20 p-4 hover:bg-white/40">
      <A href={`/goods/${props.id}`}>
        <img src={props.image} />
      </A>
      <A class="line-clamp-3 text-xl" href={`/goods/${props.id}`}>
        {props.title}
      </A>
      <Show when={price()}>
        {(p) => <span class="text-lg text-red-600">{`￥${p()}`}</span>}
      </Show>
    </div>
  );
};
