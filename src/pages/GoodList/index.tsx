import { For, createSignal } from "solid-js";
import { Card, GoodBrief, SearchBar } from "~/components";
import { mockGoods } from "~/data/mock";

export default () => {
  const [data, _setData] = createSignal(mockGoods);

  return (
    <div class="flex flex-col items-center space-y-4">
      <Card class="w-4/5 max-w-[1080px]">
        <SearchBar />
      </Card>
      <Card class="flex w-4/5 max-w-[1080px] flex-wrap p-4">
        <For each={data()}>{(item) => <GoodBrief {...item} />}</For>
      </Card>
    </div>
  );
};
