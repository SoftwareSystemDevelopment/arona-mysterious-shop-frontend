import { useNavigate } from "@solidjs/router";
import { SearchBar } from "~/components";
import { DropdownButton, PageButton } from "./page";

export default () => {
  const navigator = useNavigate();

  return (
    <nav class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Logo"
          />
          <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            阿罗娜的神秘商店
          </span>
        </a>
        <div class="flex space-x-3 lg:order-2 lg:space-x-0 rtl:space-x-reverse">
          <div class="mx-4">
            <SearchBar />
          </div>
          <button
            type="button"
            class="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => navigator("/auth")}
          >
            登录/注册
          </button>
          {/*以下这个按钮会在网页宽度太小的时候启用，替代导航栏*/}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">打开主菜单</span>
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          id="navbar-sticky"
        >
          <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-white lg:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 lg:dark:bg-gray-900">
            <PageButton isSelected={true} children="主页" url="/" />
            <PageButton isSelected={false} children="关于" />
            <PageButton isSelected={false} children="服务" />
            <PageButton isSelected={false} children="联系" />
            <DropdownButton
              children="更多"
              groups={[
                [{ children: "1" }, { children: "2" }, { children: "3" }],
                [{ children: "退出" }],
              ]}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};
