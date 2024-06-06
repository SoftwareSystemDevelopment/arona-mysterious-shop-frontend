import { createMemo } from "solid-js";
import { A } from "@solidjs/router";
import { GoodInfo } from "~/data/interface";

interface GoodBriefProps extends GoodInfo {}

export default (props: GoodBriefProps) => {
  const price = createMemo(() => Math.round(props.productPrice * 100) / 100);

  return (
    <div class="m-2 flex w-[240px] flex-col items-center space-y-2 rounded-md bg-white/20 p-4 hover:bg-white/40">
      <A href={`/goods/${props.productId}`}>
        {/* TODO: good image */}
        <img src="/arona-mysterious-shop-frontend/img1.webp" />
      </A>
      <A class="line-clamp-3 text-xl" href={`/goods/${props.productId}`}>
        {props.productName}
      </A>
      <span class="text-lg text-red-600">{`￥${price()}`}</span>
    </div>
  );
};
