import { JSX } from "solid-js";

interface SearchBarProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export default (props: SearchBarProps) => (
  <div class="relative" {...props}>
    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
      <svg
        class="h-4 w-4 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <span class="sr-only">Search Icon</span>
    </div>
    <input
      type="text"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      placeholder="搜索…"
    />
  </div>
);
