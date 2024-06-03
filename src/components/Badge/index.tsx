import { JSX } from "solid-js";

interface BadgeProps {
  children: JSX.Element;
}

export default (props: BadgeProps) => (
  <div class="bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-ring inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
    {props.children}
  </div>
);
