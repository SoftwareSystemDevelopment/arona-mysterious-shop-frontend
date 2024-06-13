import { JSX, Show } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { Response } from "~/data/interface";
import { useState } from "~/store";
import { Button } from "~/components";

interface MenuItemProps {
  href: string;
  children: JSX.Element;
}

const MenuItem = (props: MenuItemProps) => (
  <A
    class="text-lg"
    activeClass="font-bold text-blue-700"
    inactiveClass="hover:text-blue-700"
    href={props.href}
    end
  >
    {props.children}
  </A>
);

export default () => {
  const navigate = useNavigate();

  const [state, setState] = useState();

  const onLogout = async () => {
    const resp = await fetch("/api/user/logout", { method: "POST" });
    const res: Response<boolean> = await resp.json();

    if (res.data !== null) {
      setState("currentUser", null);
      alert("注销成功！");
      navigate("/");
    } else {
      alert(`注销失败！原因：${res.message}`);
    }
  };

  return (
    <nav class="mb-3 flex h-16 w-full items-center justify-between bg-white/50 px-24 backdrop-blur-md">
      <A class="flex items-center space-x-3 hover:text-gray-700" href="/">
        <img class="h-10" src="https://flowbite.com/docs/images/logo.svg" />
        <span class="whitespace-nowrap text-2xl font-semibold">
          阿罗娜的神秘商店
        </span>
      </A>
      <div class="space-x-8">
        <MenuItem href="/">主页</MenuItem>
        <MenuItem href="/goods">商品列表</MenuItem>
        <MenuItem href="/cart">购物车</MenuItem>
      </div>
      <div class="flex items-center space-x-3">
        <Show
          when={state.currentUser}
          fallback={
            <>
              <Button onClick={() => navigate("/login")}>登录</Button>
              <Button onClick={() => navigate("/register")}>注册</Button>
            </>
          }
        >
          {(me) => (
            <>
              <span>你好，{me().userName}！</span>
              <Button onClick={() => navigate("/user/basic")}>个人中心</Button>
              <Show when={me().userRole === "provider"}>
                <Button onClick={() => navigate("/goods/upload")}>
                  创建商品
                </Button>
              </Show>
              <Button onClick={onLogout}>注销</Button>
            </>
          )}
        </Show>
      </div>
    </nav>
  );
};
