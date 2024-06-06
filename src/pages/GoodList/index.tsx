import { For, Match, Switch } from "solid-js";
import { createQuery } from "@tanstack/solid-query";
import { GoodInfo, List, Response } from "~/data/interface";
import { Card, GoodBrief, SearchBar } from "~/components";

const queryFn = async () => {
  const resp = await fetch("/api/product/list/vo", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      current: 1,
      pageSize: 20,
    }),
  });

  const res: Response<List<GoodInfo>> = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }

  return res.data.records;
};

export default () => {
  const query = createQuery<GoodInfo[]>(() => ({
    queryKey: ["goods"],
    queryFn,
  }));

  return (
    <div class="flex flex-col items-center space-y-4">
      <Card class="w-4/5 max-w-[1080px]">
        <SearchBar />
      </Card>
      <Switch>
        <Match when={query.isPending}>
          <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 py-8">
            Loading...
          </Card>
        </Match>
        <Match when={query.isError}>
          <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 py-8">
            Error: {query.error?.message}
          </Card>
        </Match>
        <Match when={query.isSuccess}>
          <Card class="flex w-4/5 max-w-[1080px] flex-wrap p-4">
            <For each={query.data}>{(item) => <GoodBrief {...item} />}</For>
          </Card>
        </Match>
      </Switch>
    </div>
  );
};
