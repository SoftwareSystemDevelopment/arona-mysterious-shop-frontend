import { JSX, Show } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { createQuery, useQueryClient } from "@tanstack/solid-query";
import { Response, User } from "~/data/interface";
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
  const client = useQueryClient();
  const navigate = useNavigate();

  const query = createQuery<User | null>(() => ({
    queryKey: ["users", "self"],
    queryFn: async () => {
      const resp = await fetch("/api/user/current");
      const res: Response<User> = await resp.json();
      return res.data;
    },
  }));

  const onLogout = async () => {
    const resp = await fetch("/api/user/logout", { method: "POST" });
    const res: Response<boolean> = await resp.json();

    if (res.data !== null) {
      client.invalidateQueries({ queryKey: ["users", "self"] });
      alert("注销成功！");
      navigate("/");
    } else {
      alert(`注销失败！原因：${res.message}`);
    }
  };

  return (
    <nav class="mb-3 flex h-16 w-full items-center justify-between bg-white/50 px-24 backdrop-blur-md">
      <A class="flex items-center space-x-3 hover:text-gray-700" href="/">
        <img class="h-10" src="/arona-mysterious-shop-frontend/favicon.webp" />
        <span class="whitespace-nowrap text-2xl font-semibold">
          阿罗娜的神秘商店
        </span>
      </A>
      <div class="space-x-8">
        <MenuItem href="/">主页</MenuItem>
        <MenuItem href="/goods">商品列表</MenuItem>
        <Show when={query.data !== null}>
          <MenuItem href="/cart">购物车</MenuItem>
        </Show>
      </div>
      <div class="flex items-center space-x-3">
        <Show
          when={query.data}
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
