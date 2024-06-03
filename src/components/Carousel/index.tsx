import { For, Match, Show, Switch, createSignal } from "solid-js";

interface CarouselProps {
  /**
   * 里面播放图片的url
   */
  urls: string[];

  /**
   * 切换图片的时间间隔（毫秒）
   */
  interval: number;
}

export default (props: CarouselProps) => {
  // 当前的图片编号
  const [index, setIndex] = createSignal<number>(0);
  // 图片数量
  const count = props.urls.length;
  const nextIndex = () => setIndex((index() + 1) % count);
  const previousIndex = () => setIndex((index() + count - 1) % count);
  setInterval(() => nextIndex(), props.interval);

  return (
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <For each={props.urls}>
          {(url, i) => (
            <Switch
              fallback={
                <div
                  class="absolute inset-0 z-30 hidden -translate-x-full transform transition-transform duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src={url}
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="商品图片"
                  />
                </div>
              }
            >
              <Match when={(index() + count - 1) % count === i()}>
                <div
                  class="absolute inset-0 z-30 -translate-x-full transform transition-transform duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src={url}
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="商品图片"
                  />
                </div>
              </Match>
              <Match when={index() === i()}>
                <div
                  class="absolute inset-0 z-30 translate-x-0 transform transition-transform duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src={url}
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="商品图片"
                  />
                </div>
              </Match>
              <Match when={index() + (1 % count) === i()}>
                <div
                  class="absolute inset-0 z-20 translate-x-full transform transition-transform duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src={url}
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="商品图片"
                  />
                </div>
              </Match>
            </Switch>
          )}
        </For>
      </div>

      <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <For each={props.urls}>
          {(_, i) => (
            <Show
              when={index() === i()}
              fallback={
                <button
                  onClick={() => setIndex(i())}
                  type="button"
                  class="h-3 w-3 rounded-full bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800"
                  aria-current="false"
                  aria-label={`Slide ${i()}`}
                  data-carousel-slide-to={`${i()}`}
                />
              }
            >
              <button
                onClick={() => setIndex(i())}
                type="button"
                class="h-3 w-3 rounded-full bg-white dark:bg-gray-800"
                aria-current="true"
                aria-label={`Slide ${i()}`}
                data-carousel-slide-to={`${i()}`}
              />
            </Show>
          )}
        </For>
      </div>
      <button
        onClick={previousIndex}
        type="button"
        class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={nextIndex}
        type="button"
        class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
