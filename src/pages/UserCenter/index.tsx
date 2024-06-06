import { JSX } from "solid-js";
import { Card } from "~/components";
import { BasicTag } from "./Basic";
import { AddressTag } from "./Address";
import { OrderTag } from "./Order";
import { A, Navigate, Route } from "@solidjs/router";

const TagButton = (props: {
  /**
   * 按钮显示的内容
   */
  content: string;
  /**
   * 跳转的url
   */
  url: string;
}) => {
  return (
    <A
      href={props.url}
      activeClass="w-full text-center text-lg text-blue-700"
      inactiveClass="w-full text-center text-lg text-black hover:text-blue-500"
    >
      <p class="py-2">{props.content}</p>
    </A>
  );
};

interface UserCenterProps {
  children?: JSX.Element;
}

export default (props: UserCenterProps) => {
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
            <TagButton url="/user/basic" content="基本信息" />
            <hr />
            <TagButton url="/user/address" content="收货地址" />
            <hr />
            <TagButton url="/user/order" content="订单信息" />
          </Card>
        </div>
        <div class="w-[80%] px-3">
          <Card class="w-full">{props.children}</Card>
        </div>
      </div>
    </div>
  );
};

export const UserCenterRoutes = () => {
  return (
    <>
      <Route path="/basic" component={BasicTag} />
      <Route path="/address" component={AddressTag} />
      <Route path="/order" component={OrderTag} />
      <Route path="/" component={() => <Navigate href="/user/basic" />} />
    </>
  );
};
