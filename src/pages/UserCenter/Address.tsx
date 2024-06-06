import { For, createSignal } from "solid-js";
import { Button } from "~/components";
import { mockAddresses } from "~/data/mock";

export default () => {
  const [data, _setData] = createSignal(mockAddresses);

  return (
    <div class="space-y-4 p-2">
      <h1 class="text-2xl font-semibold">收货地址</h1>
      <hr />
      <table class="w-full bg-white/20">
        <thead>
          <tr class="bg-white/40">
            <th class="border p-2">收件人</th>
            <th class="border p-2">电话号码</th>
            <th class="border p-2">递送地址</th>
            <th class="border p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          <For each={data()}>
            {(item) => (
              <tr class="hover:bg-white/40">
                <td class="border p-2">{item.name}</td>
                <td class="border p-2">{item.tel}</td>
                <td class="border p-2">{item.address}</td>
                <td class="border p-2">
                  <button class="h-8 w-8 rounded-full bg-red-700 text-center text-white hover:bg-red-800 focus:outline-none">
                    X
                  </button>
                </td>
              </tr>
            )}
          </For>
        </tbody>
        <tfoot>
          <tr class="bg-white/40">
            <td class="border p-2" colSpan={4}>
              <div class="flex justify-end">
                <Button>添加收货地址</Button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
