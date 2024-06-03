import { JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: JSX.Element;
  class?: string;
}

export default (props: CardProps) => (
  <div
    class={twMerge(
      "rounded-md bg-white/50 p-3 shadow-md backdrop-blur transition-all hover:shadow-lg hover:backdrop-blur-md",
      props.class,
    )}
  >
    {props.children}
  </div>
);
