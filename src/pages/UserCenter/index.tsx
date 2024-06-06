import { Match, Show, Signal, Switch, createSignal } from "solid-js";
import { Card } from "~/components";
import { BasicTag } from "./Basic";
import { AddressTag } from "./Address";
import { OrderTag } from "./Order";

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

const TagButton = (props: {
  /**
   * 按钮显示的内容
   */
  content: string;
  /**
   * 当前所在页签的Signal
   */
  type: Signal<SettingType>;
  /**
   * 点击后要切换的页签
   */
  target: SettingType;
}) => {
  const [type, setType] = props.type;
  return (
    <Show
      when={type() == props.target}
      fallback={
        <button
          onClick={() => setType(props.target)}
          class="w-full text-center text-lg text-black hover:text-blue-500"
        >
          <p class="py-2">{props.content}</p>
        </button>
      }
    >
      <button
        onClick={() => setType(props.target)}
        class="w-full text-center text-lg text-blue-700"
      >
        <p class="py-2">{props.content}</p>
      </button>
    </Show>
  );
};

export default () => {
  const signal = createSignal<SettingType>("Basic");
  const type = signal[0];
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
            <TagButton type={signal} target="Basic" content="基本信息" />
            <hr />
            <TagButton type={signal} target="Address" content="收货地址" />
            <hr />
            <TagButton type={signal} target="Order" content="订单信息" />
          </Card>
        </div>
        <div class="w-[80%] px-3">
          <Card class="w-full">
            <Switch>
              <Match when={type() === "Basic"}>
                <BasicTag />
              </Match>
              <Match when={type() === "Address"}>
                <AddressTag />
              </Match>
              <Match when={type() === "Order"}>
                <OrderTag />
              </Match>
            </Switch>
          </Card>
        </div>
      </div>
    </div>
  );
};
