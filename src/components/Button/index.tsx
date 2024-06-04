import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
}

export default (props: ButtonProps) => {
  const [local, others] = splitProps(props, ["children", "class"]);

  return (
    <button
      class={twMerge(
        "rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300",
        local.class,
      )}
      {...others}
    >
      {local.children}
    </button>
  );
};
