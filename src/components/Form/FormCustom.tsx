import { JSX } from "solid-js";

interface FormCustomProps {
  id: string;
  label: string;
  children: JSX.Element;
}

export default (props: FormCustomProps) => (
  <div class="flex flex-col space-y-1">
    <label for={props.id} class="ml-2 text-sm">
      {props.label}
    </label>
    {props.children}
  </div>
);
