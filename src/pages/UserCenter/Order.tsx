import { A } from "@solidjs/router";
import { Card } from "~/components";

const OrderItem = (props: {
  orderId: string;
  orderStatus: string;
  shopId: string;
  shopName: string;
  goodId: string;
  title: string;
  cover: string;
}) => {
  return (
    <li class="my-2 flex max-h-[200px] py-2 outline outline-blue-500 hover:bg-blue-300 hover:text-white">
      <div class="flex w-[15%] px-2 text-center">
        <h1 class="my-auto w-full">{props.orderId}</h1>
      </div>
      <div class="flex w-[15%] px-2 text-center">
        <h1 class="my-auto w-full text-xl font-semibold">
          {props.orderStatus}
        </h1>
      </div>
      <div class="flex w-[15%] overflow-hidden p-2 text-center">
        <A
          href={`/shops/${props.shopId}`}
          class="my-auto w-full hover:text-blue-600"
        >
          {props.shopName}
        </A>
      </div>
      <div class="flex w-[55%] px-2 text-center">
        <div class="w-[60%] p-2">
          <A id={`goodsDetail:${props.goodId}`} href={`/goods/${props.goodId}`}>
            <img src={props.cover}></img>
          </A>
        </div>
        <div class="flex h-full w-[60%] items-center overflow-hidden p-2">
          <div class="my-auto w-full">
            <A
              href={`/goods/${props.goodId}`}
              class="my-auto w-full hover:text-blue-600"
            >
              {props.title}
            </A>
          </div>
        </div>
      </div>
    </li>
  );
};

export const OrderTag = () => {
  return (
    <div>
      <div class="w-full">
        <h1 class="py-5 pl-10 text-2xl font-semibold">订单信息</h1>
      </div>
      <hr />
      <div class="my-8">
        <ul>
          <li class="flex rounded-t-xl bg-blue-600 p-3 text-lg font-semibold text-white">
            <div class="flex w-[15%] px-2 text-center">
              <h1 class="my-auto w-full">订单ID</h1>
            </div>
            <div class="flex w-[15%] px-2 text-center">
              <h1 class="my-auto w-full">订单状态</h1>
            </div>
            <div class="flex w-[15%] px-2 text-center">
              <h1 class="my-auto w-full">店铺名称</h1>
            </div>
            <div class="flex w-[55%] px-2 text-center">
              <h1 class="my-auto w-full">商品信息</h1>
            </div>
          </li>
          <Card>
            <OrderItem
              orderId="123"
              orderStatus="待付款"
              shopId="123"
              shopName="店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称"
              goodId="123"
              title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
              cover="/arona-mysterious-shop-frontend/img3.webp"
            />
            <OrderItem
              orderId="123"
              orderStatus="待付款"
              shopId="123"
              shopName="店铺名称"
              goodId="123"
              title="商品标题"
              cover="/arona-mysterious-shop-frontend/img2.webp"
            />
          </Card>
        </ul>
      </div>
    </div>
  );
};
