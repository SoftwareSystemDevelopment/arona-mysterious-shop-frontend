import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";
import TextArea from "./TextArea";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <input
      class={twMerge(
        "rounded-lg border border-gray-300 px-2 py-1",
        local.class,
      )}
      {...others}
    />
  );
};

Input.TextArea = TextArea;

export default Input;
