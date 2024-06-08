import { JSX, splitProps } from "solid-js";

interface CheckboxProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export default (props: CheckboxProps) => {
  const [local, others] = splitProps(props, ["id", "label"]);

  return (
    <div class="flex items-center space-x-1">
      <input id={local.id} type="checkbox" {...others} />
      <label for={local.id} class="text-sm">
        {local.label}
      </label>
    </div>
  );
};
