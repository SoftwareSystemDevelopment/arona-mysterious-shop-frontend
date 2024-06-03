import { For, JSX, Show, createSignal } from "solid-js";

interface PageProps {
  /**
   * 该页面标签是否被选中
   */
  isSelected: boolean;
  /**
   * 跳转的url
   */
  url?: string;
  children?: JSX.Element;
}

export const PageButton = (props: PageProps) => {
  return (
    <Show
      when={props.isSelected}
      fallback={
        <li>
          <a
            href={props.url === undefined ? "#" : props.url}
            class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-blue-500"
          >
            {props.children}
          </a>
        </li>
      }
    >
      <li>
        <a
          href={props.url === undefined ? "#" : props.url}
          class="block rounded bg-blue-700 px-3 py-2 text-white lg:bg-transparent lg:p-0 lg:text-blue-700 dark:bg-blue-600 lg:dark:bg-transparent lg:dark:text-blue-500"
          aria-current="page"
        >
          {props.children}
        </a>
      </li>
    </Show>
  );
};

/**
 * 一个DropDown里面，每一个下拉元素的数据信息
 */
interface DropdownItemProps {
  /**
   * 跳转的url
   */
  url?: string;
  children?: JSX.Element;
}

/**
 * 下拉元素组。处于不同组的下拉元素会隔开。
 */
type DropdownItemGroup = DropdownItemProps[];

interface DropdownProps {
  /**
   * 下拉元素组集合
   */
  groups: DropdownItemGroup[];
  children?: JSX.Element;
}

export const DropdownButton = (props: DropdownProps) => {
  const [isPressed, setIsPressed] = createSignal(false);
  return (
    <li>
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        onClick={() => setIsPressed(!isPressed())}
        class="flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 lg:w-auto lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-blue-500"
      >
        {props.children}
        <svg
          class="ms-2.5 h-2.5 w-2.5"
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
        id="dropdownNavbar"
        class={`fixed z-10 ${isPressed() ? "block" : "hidden"} w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700`}
      >
        <For each={props.groups}>
          {(group, _) => (
            <div class="py-0.5">
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <For each={group}>
                  {(item, _) => (
                    <a
                      href={item.url === undefined ? "#" : item.url}
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.children}
                    </a>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
      </div>
    </li>
  );
};
