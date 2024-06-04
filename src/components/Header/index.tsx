import { JSX } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { Button, SearchBar } from "~/components";

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
        <MenuItem href="/about">关于</MenuItem>
        <MenuItem href="/service">服务</MenuItem>
        <MenuItem href="/contact">联系</MenuItem>
      </div>
      <div class="flex space-x-3">
        <SearchBar />
        <Button onClick={() => navigate("/login")}>登录</Button>
        <Button onClick={() => navigate("/register")}>注册</Button>
      </div>
    </nav>
  );
};
