import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface TextAreaProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default (props: TextAreaProps) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <textarea
      class={twMerge(
        "resize-none rounded-lg border border-gray-300 px-2 py-1",
        local.class,
      )}
      {...others}
    />
  );
};
