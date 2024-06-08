import { JSX, Show, splitProps } from "solid-js";
import { Input } from "~/components";
import FormCustom from "./FormCustom";

interface FormInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  multiline?: false;
}

interface FormTextAreaProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  multiline: true;
}

type FormItemProps = (FormInputProps | FormTextAreaProps) & {
  id: string;
  label: string;
};

export default (props: FormItemProps) => {
  const [local, others] = splitProps(props, ["id", "label", "multiline"]);

  return (
    <FormCustom id={local.id} label={local.label}>
      <Show
        when={local.multiline}
        fallback={
          <Input
            id={local.id}
            {...(others as JSX.InputHTMLAttributes<HTMLInputElement>)}
          />
        }
      >
        <Input.TextArea
          id={local.id}
          {...(others as JSX.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      </Show>
    </FormCustom>
  );
};
