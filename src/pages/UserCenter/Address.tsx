/// TODO(yur): review this file

import { Show, createSignal } from "solid-js";
import { Button, Card } from "~/components";

const AddressItem = (props: { name: string; tel: string; address: string }) => {
  return (
    <li class="my-2 flex py-2 outline outline-blue-500 hover:bg-blue-300 hover:text-white">
      <div class="flex w-[20%] px-2 text-center">
        <h1 class="my-auto w-full">{props.name}</h1>
      </div>
      <div class="flex w-[20%] px-2 text-center">
        <h1 class="my-auto w-full">{props.tel}</h1>
      </div>
      <div class="flex w-[50%] px-2 text-center">
        <h1 class="my-auto w-full">{props.address}</h1>
      </div>
      <div class="flex w-[10%] items-center px-2">
        <button class="mx-auto h-8 w-8 rounded-full bg-red-700 text-center text-white hover:bg-red-800 focus:outline-none">
          X
        </button>
      </div>
    </li>
  );
};

export default () => {
  const [showAddAddress, setShowAddAddress] = createSignal(true);
  return (
    <div>
      <div class="w-full">
        <h1 class="py-5 pl-10 text-2xl font-semibold">收货地址</h1>
      </div>
      <hr />
      <div class="my-8">
        <ul>
          <li class="flex rounded-t-xl bg-blue-600 p-3 text-lg font-semibold text-white">
            <div class="flex w-[20%] px-2 text-center">
              <h1 class="my-auto w-full">收件人</h1>
            </div>
            <div class="flex w-[20%] px-2 text-center">
              <h1 class="my-auto w-full">电话号码</h1>
            </div>
            <div class="flex w-[50%] px-2 text-center">
              <h1 class="my-auto w-full">递送地址</h1>
            </div>
            <div class="flex w-[10%] px-2 text-center">
              <h1 class="my-auto w-full">操作</h1>
            </div>
          </li>
          <Card>
            <AddressItem
              name="AerVento"
              tel="12345612345"
              address="address-address-address-address-address-address-address-address-address"
            />
            <AddressItem
              name="AerVento"
              tel="12345612345"
              address="address-address-address-address-address-address-address-address-address"
            />
            <AddressItem
              name="AerVento"
              tel="12345612345"
              address="address-address-address-address-address-address-address-address-address"
            />
          </Card>
        </ul>
      </div>
      <div class="flex flex-row-reverse">
        <Button
          onClick={() => setShowAddAddress(!showAddAddress())}
          class="flex items-center"
        >
          <span>添加收货地址</span>
          <svg
            class="ms-3 h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </Button>
      </div>
      <Show when={showAddAddress()}>
        <Card class="my-4">
          <form class="mx-auto flex w-[70%] flex-col space-y-4">
            <div class="flex items-center space-x-4">
              <label for="name" class="font-medium text-gray-900">
                收件人姓名
              </label>
              <input
                type="string"
                id="name"
                class="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="name"
                required
              />
            </div>
            <div class="flex items-center space-x-4">
              <label for="telephone" class="font-medium text-gray-900">
                电话号码
              </label>
              <input
                type="tel"
                id="tel"
                class="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="tel."
                required
              />
            </div>
            <div class="flex items-center space-x-4">
              <label for="address" class="font-medium text-gray-900">
                递送地址
              </label>
              <input
                type="string"
                id="address"
                class="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="address"
                required
              />
            </div>

            <Button type="submit">提交</Button>
          </form>
        </Card>
      </Show>
    </div>
  );
};
