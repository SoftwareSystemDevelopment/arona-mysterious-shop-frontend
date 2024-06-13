import { For, Match, Switch, createMemo } from "solid-js";
import { A } from "@solidjs/router";
import {
  QueryFunction,
  createMutation,
  createQuery,
  useQueryClient,
} from "@tanstack/solid-query";
import { OrderInfo, OrderItemInfo, Response } from "~/data/interface";
import { orderStatusMap } from "~/data/constants";
import { Button, Card } from "~/components";

const queryImageFn: QueryFunction<string> = async (props) => {
  const resp = await fetch(
    `/api/image/get/product?productId=${props.queryKey[2]}`,
  );

  const res: Response<string> = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }

  return `/api/${res.data}`;
};

interface OrderItemBlockProps extends OrderItemInfo {}

const OrderItemBlock = (props: OrderItemBlockProps) => {
  const query = createQuery(() => ({
    queryKey: ["image", "good", props.productId],
    queryFn: queryImageFn,
  }));

  const price = createMemo(() => {
    return Math.round(props.price * props.quantity * 100) / 100;
  });

  return (
    <li class="flex items-center space-x-4">
      <div class="flex-1">
        <A href={`/goods/${props.productId}`}>
          <Switch>
            <Match when={query.isPending}>
              <img
                class="rounded-md"
                src="/arona-mysterious-shop-frontend/img1.webp"
              />
            </Match>
            <Match when={query.isError}>
              <img
                class="rounded-md"
                src="/arona-mysterious-shop-frontend/img1.webp"
              />
            </Match>
            <Match when={query.isSuccess}>
              <img class="rounded-md" src={query.data} />
            </Match>
          </Switch>
        </A>
      </div>
      <div class="flex flex-1 flex-col space-y-2">
        <A
          class="text-gray-500 hover:text-blue-500"
          href={`/goods/${props.productId}`}
        >
          {props.productName}
        </A>
        <span class="text-lg font-semibold">x {props.quantity}</span>
      </div>
      <div class="flex flex-1 flex-row-reverse">
        <span class="text-xl">￥{price()}</span>
      </div>
    </li>
  );
};

const mutationFn = async (props: { id: number; status: number }) => {
  const resp = await fetch("/api/order/update", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      orderId: props.id,
      orderStatus: props.status,
    }),
  });

  const res = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }
};

interface DetailsProps extends OrderInfo {}

export default (props: DetailsProps) => {
  const price = createMemo(() => {
    let res = 0;
    props.orderItems.forEach((item) => {
      res += item.price * item.quantity;
    });
    return Math.round(res * 100) / 100;
  });

  const client = useQueryClient();

  const mutation = createMutation(() => ({
    mutationFn,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["orders", props.orderId] });
    },
  }));

  return (
    <Card class="w-4/5 max-w-[1080px] space-y-4 p-8">
      <div class="flex justify-between">
        <div class="text-4xl font-semibold">
          {orderStatusMap[props.orderStatus]}
        </div>
        <div class="flex flex-col space-y-1 text-sm">
          <span>订单号：{props.orderId}</span>
          <span>日期：{props.orderPayDate}</span>
        </div>
      </div>
      <hr />
      <div class="px-8">
        <ul class="space-y-4">
          <For each={props.orderItems}>
            {(item) => <OrderItemBlock {...item} />}
          </For>
        </ul>
      </div>
      <hr />
      <div class="flex justify-between">
        <div class="flex flex-col text-sm text-gray-500">
          <span>收件人：{props.orderReceiver}</span>
          <span>联系方式：{props.orderMobile}</span>
          <span>递送地址：{props.orderAddress}</span>
        </div>
        <div class="flex items-center space-x-16">
          <div class="flex items-baseline space-x-8">
            <span class="text-2xl font-semibold">总计</span>
            <span class="text-xl">￥{price()}</span>
          </div>
          <Switch>
            <Match when={props.orderStatus === 0}>
              <Button
                onClick={() =>
                  mutation.mutate({ id: props.orderId, status: 2 })
                }
              >
                支付
              </Button>
            </Match>
            <Match when={props.orderStatus === 2}>
              <Button
                onClick={() =>
                  mutation.mutate({ id: props.orderId, status: 3 })
                }
              >
                已收货
              </Button>
            </Match>
          </Switch>
        </div>
      </div>
    </Card>
  );
};
