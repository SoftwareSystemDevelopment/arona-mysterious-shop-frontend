import { For, Match, Show, Switch } from "solid-js";
import {
  createMutation,
  createQuery,
  useQueryClient,
} from "@tanstack/solid-query";
import { AddressInfo, Response } from "~/data/interface";
import { Button } from "~/components";

interface AddressItemProps extends AddressInfo {}

const AddressItem = (props: AddressItemProps) => {
  const client = useQueryClient();

  const mutation = createMutation(() => ({
    mutationFn: async () => {
      const resp = await fetch(
        `/api/address/delete?addressId=${props.addressAreaId}`,
        { method: "DELETE" },
      );
      const res = await resp.json();
      if (res.data === null) {
        throw new Error(res.message);
      }
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["address"] });
    },
  }));

  return (
    <tr class="hover:bg-white/40">
      <td class="border p-2 text-center">{props.receiver}</td>
      <td class="border p-2 text-center">{props.userPhone}</td>
      <td class="border p-2 text-center">{props.addressName}</td>
      <td class="border p-2 text-center">
        <button
          class="h-8 w-8 rounded-full bg-red-700 text-center text-white hover:bg-red-800 focus:outline-none"
          onClick={() => mutation.mutate()}
        >
          X
        </button>
      </td>
    </tr>
  );
};

const queryFn = async () => {
  const resp = await fetch("/api/address/list");

  const res: Response<AddressInfo[]> = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }

  return res.data;
};

export default () => {
  const query = createQuery<AddressInfo[]>(() => ({
    queryKey: ["address"],
    queryFn,
  }));

  return (
    <div class="space-y-4 p-2">
      <h1 class="text-2xl font-semibold">收货地址</h1>
      <hr />
      <table class="w-full bg-white/20">
        <thead>
          <tr class="bg-white/40">
            <th class="whitespace-nowrap border p-2">收件人</th>
            <th class="whitespace-nowrap border p-2">电话号码</th>
            <th class="whitespace-nowrap border p-2">递送地址</th>
            <th class="whitespace-nowrap border p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          <Switch>
            <Match when={query.isPending}>
              <tr>
                <td class="py-4" colSpan={4}>
                  <div class="flex justify-center">
                    <span class="text-xl">Loading...</span>
                  </div>
                </td>
              </tr>
            </Match>
            <Match when={query.isError}>
              <tr>
                <td class="py-4" colSpan={4}>
                  <div class="flex justify-center">
                    <span class="text-xl">Error: {query.error?.message}</span>
                  </div>
                </td>
              </tr>
            </Match>
            <Match when={query.isSuccess}>
              <Show
                when={query.data!?.length > 0}
                fallback={
                  <tr>
                    <td class="py-4" colSpan={4}>
                      <div class="flex justify-center">
                        <span class="text-xl">您还没有收货地址哦~</span>
                      </div>
                    </td>
                  </tr>
                }
              >
                <For each={query.data}>
                  {(item) => <AddressItem {...item} />}
                </For>
              </Show>
            </Match>
          </Switch>
        </tbody>
        <tfoot>
          <tr class="bg-white/40">
            <td class="border p-2" colSpan={4}>
              <div class="flex justify-end">
                {/* TODO: add address */}
                <Button>添加收货地址</Button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
