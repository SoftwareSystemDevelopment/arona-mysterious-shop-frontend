import { JSX, lazy } from "solid-js";
import { A, Navigate, Route } from "@solidjs/router";
import { Card } from "~/components";

interface TagButtonProps {
  href: string;
  children: JSX.Element;
}

const TagButton = (props: TagButtonProps) => (
  <A
    class="w-full text-center text-lg"
    activeClass="text-blue-700"
    inactiveClass="text-black hover:text-blue-500"
    {...props}
  />
);

interface UserCenterWrapperProps {
  children?: JSX.Element;
}

export const UserCenterWrapper = (props: UserCenterWrapperProps) => (
  <div class="flex flex-col items-center">
    <div class="w-4/5 max-w-[1080px] space-y-4">
      <Card class="flex justify-center p-4">
        <h1 class="text-3xl font-bold">个人中心</h1>
      </Card>
      <div class="flex space-x-4">
        <Card class="flex h-full flex-1 flex-col space-y-2">
          <TagButton href="/user/basic">基本信息</TagButton>
          <hr />
          <TagButton href="/user/address">收货地址</TagButton>
          <hr />
          <TagButton href="/user/order">订单信息</TagButton>
        </Card>
        <Card class="flex-[4]">{props.children}</Card>
      </div>
    </div>
  </div>
);

const BasicTag = lazy(() => import("./Basic"));
const AddressTag = lazy(() => import("./Address"));
const OrderTag = lazy(() => import("./Order"));

export const UserCenterRoutes = () => (
  <>
    <Route path="/basic" component={BasicTag} />
    <Route path="/address" component={AddressTag} />
    <Route path="/order" component={OrderTag} />
    <Route path="/" component={() => <Navigate href="/user/basic" />} />
  </>
);
