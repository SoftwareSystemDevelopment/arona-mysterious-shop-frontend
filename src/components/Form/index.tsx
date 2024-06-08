import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";
import FormCustom from "./FormCustom";
import FormItem from "./FormItem";
import FormImage from "./FormImage";

interface FormProps extends JSX.FormHTMLAttributes<HTMLFormElement> {}

const Form = (props: FormProps) => {
  const [local, others] = splitProps(props, ["class", "onSubmit"]);

  return (
    <form
      class={twMerge("space-y-4 p-2", local.class)}
      onSubmit={(e) => {
        e.preventDefault();

        const callback = local.onSubmit;

        if (typeof callback !== "undefined") {
          // make tsc happy :)
          (callback as any)(e);
        }
      }}
      {...others}
    />
  );
};

Form.Custom = FormCustom;
Form.Item = FormItem;
Form.Image = FormImage;

export default Form;
