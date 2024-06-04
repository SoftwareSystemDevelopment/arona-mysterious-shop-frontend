import { For, Show, createSignal } from "solid-js";
import { Card, SearchBar } from "~/components";
import GoodBrief from "./GoodBrief";
import { mockGoods } from "~/data/mock";
import { SetStoreFunction, createStore } from "solid-js/store";

export type GoodTypes =
  | "report"
  | "exp_orb"
  | "ue_exp_material"
  | "bd"
  | "skill_book"
  | "ooparts";
export const GoodTypeNames: Record<GoodTypes, string> = {
  report: "经验书",
  exp_orb: "强化石",
  ue_exp_material: "专武材料",
  bd: "技能光盘",
  skill_book: "技能树",
  ooparts: "欧帕兹",
};

type FilterData = Record<GoodTypes, boolean>;
type FilterStore = [FilterData, SetStoreFunction<FilterData>];
const defaultFilterData: FilterData = {
  report: false,
  exp_orb: false,
  ue_exp_material: false,
  bd: false,
  skill_book: false,
  ooparts: false,
};

const DropdownFilter = (props: { store: FilterStore }) => {
  const [show, setShow] = createSignal(false);
  const [store, setStore] = props.store;
  return (
    <>
      <button
        onClick={() => setShow(!show())}
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        筛选
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
      </button>
      <div
        id="dropdownBgHover"
        class={`fixed top-[135px] z-10 ${show() ? "" : "hidden"} w-48 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          class="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownBgHoverButton"
        >
          <For each={Object.entries(store)}>
            {([type, isSelected], i) => {
              const goodType = type as GoodTypes;
              const flip = () => {
                setStore((old) => {
                  old[goodType] = !old[goodType];
                  return old;
                });
              };
              return (
                <Show
                  when={store[goodType]}
                  fallback={
                    <li>
                      <div class="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          onClick={flip}
                          id={`checkbox-item-${i()}`}
                          type="checkbox"
                          value={isSelected.toString()}
                          class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                        />
                        <label
                          for={`checkbox-item-${i()}`}
                          class="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {GoodTypeNames[goodType]}
                        </label>
                      </div>
                    </li>
                  }
                >
                  <li>
                    <div class="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        onClick={flip}
                        checked
                        id={`checkbox-item-${i()}`}
                        type="checkbox"
                        value={isSelected.toString()}
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                      />
                      <label
                        for={`checkbox-item-${i()}`}
                        class="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {GoodTypeNames[goodType]}
                      </label>
                    </div>
                  </li>
                </Show>
              );
            }}
          </For>
        </ul>
      </div>
    </>
  );
};

export default () => {
  const [data, _setData] = createSignal(mockGoods);
  const [filterStore, setFilterStore] = createStore(defaultFilterData);
  return (
    <div class="flex flex-col items-center space-y-4">
      <Card class="w-4/5 max-w-[1080px]">
        <h1 class="w-full py-4 text-center text-4xl">店铺名称</h1>
        <div class="mx-auto w-[80%] py-3">
          <p class="text-center text-lg text-blue-400">
            店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
          </p>
        </div>
        <SearchBar />
      </Card>
      <Card class="flex w-4/5 max-w-[1080px] flex-wrap p-4">
        <h1 class="w-full py-4 text-center text-4xl">全部商品</h1>
        <div class="flex w-full flex-row-reverse">
          <DropdownFilter store={[filterStore, setFilterStore]} />
        </div>
        <For each={data()}>{(item) => <GoodBrief {...item} />}</For>
      </Card>
    </div>
  );
};
