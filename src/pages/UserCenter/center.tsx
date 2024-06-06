import { useNavigate } from "@solidjs/router";
import { JSX, Show } from "solid-js";
import { Card } from "~/components";
type SettingType =
  /**
   * 基本信息
   */
  | "Basic"
  /**
   * 收货地址
   */
  | "Address"
  /**
   * 订单信息
   */
  | "Order";

const urlRecord: Record<SettingType, string> = {
  Basic: "/user/basic",
  Address: "/user/address",
  Order: "/user/order",
};

const TagButton = (props: {
  /**
   * 现在所处的页面
   */
  type: string;
  /**
   * 按钮显示的内容
   */
  content: string;
  /**
   * 点击后要切换的页签
   */
  target: SettingType;
}) => {
  const nav = useNavigate();
  const goto = () => {
    nav(urlRecord[props.target]);
  };
  return (
    <Show
      when={props.type === props.target}
      fallback={
        <button
          onClick={goto}
          class="w-full text-center text-lg text-black hover:text-blue-500"
        >
          <p class="py-2">{props.content}</p>
        </button>
      }
    >
      <button onClick={goto} class="w-full text-center text-lg text-blue-700">
        <p class="py-2">{props.content}</p>
      </button>
    </Show>
  );
};

export const UserCenter = (props: {
  type: SettingType;
  children: JSX.Element;
}) => {
  return (
    <div class="space-y-3">
      <div class="mx-auto w-[80%] px-3">
        <Card class="text-center">
          <h1 class="w-full text-4xl font-bold">个人中心</h1>
        </Card>
      </div>
      <div class="mx-auto flex w-[80%]">
        <div class="w-[20%] px-3">
          <Card class="w-full">
            <TagButton type={props.type} target="Basic" content="基本信息" />
            <hr />
            <TagButton type={props.type} target="Address" content="收货地址" />
            <hr />
            <TagButton type={props.type} target="Order" content="订单信息" />
          </Card>
        </div>
        <div class="w-[80%] px-3">
          <Card class="w-full">{props.children}</Card>
        </div>
      </div>
    </div>
  );
};
