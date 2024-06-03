/// TODO(yur): review this file

import { Card } from "~/components";

export default () => {
  return (
    <Card class="py-20">
      <h1 class="py-5 text-center text-3xl">注册</h1>
      <form class="mx-auto max-w-sm">
        <div class="mb-5">
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            用户名
          </label>
          <input
            id="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            密码
          </label>
          <input
            type="password"
            id="password"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            重复密码
          </label>
          <input
            type="password"
            id="password"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-5 flex flex-row-reverse items-start">
          <button
            // onClick={() => setType("login")}
            class="ms-2 text-sm font-medium text-blue-500 underline hover:text-blue-900 dark:text-gray-300"
          >
            已注册？前往登录
          </button>
        </div>
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          注册
        </button>
      </form>
    </Card>
  );
};
