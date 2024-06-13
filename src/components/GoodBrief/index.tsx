import { Match, Switch, createMemo } from "solid-js";
import { A } from "@solidjs/router";
import { QueryFunction, createQuery } from "@tanstack/solid-query";
import { GoodInfo, Response } from "~/data/interface";

const queryImageFn: QueryFunction<string> = async (props) => {
  const resp = await fetch(
    `/api/image/get/product?productId=${props.queryKey[2]}`,
  );

  const res: Response<string> = await resp.json();

  if (res.data === null) {
    return "/arona-mysterious-shop-frontend/default.webp";
  }

  return `/api/${res.data}`;
};

interface GoodBriefProps extends GoodInfo {}

export default (props: GoodBriefProps) => {
  const price = createMemo(() => Math.round(props.productPrice * 100) / 100);

  const query = createQuery(() => ({
    queryKey: ["image", "good", props.productId],
    queryFn: queryImageFn,
  }));

  return (
    <div class="m-2 flex w-[240px] flex-col items-center space-y-2 rounded-md bg-white/20 p-4 hover:bg-white/40">
      <A href={`/goods/${props.productId}`}>
        <Switch>
          <Match when={query.isPending}>
            <img src="/arona-mysterious-shop-frontend/default.webp" />
          </Match>
          <Match when={query.isError}>
            <img src="/arona-mysterious-shop-frontend/default.webp" />
          </Match>
          <Match when={query.isSuccess}>
            <img src={query.data} />
          </Match>
        </Switch>
      </A>
      <A class="line-clamp-3 text-xl" href={`/goods/${props.productId}`}>
        {props.productName}
      </A>
      <span class="text-lg text-red-600">{`￥${price()}`}</span>
    </div>
  );
};
