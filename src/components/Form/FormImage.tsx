import { Show, createSignal } from "solid-js";
import FormCustom from "./FormCustom";

interface FormImageProps {
  id: string;
  label: string;
}

// TODO: expose the image to parent
export default (props: FormImageProps) => {
  const [imagePreview, setImagePreview] = createSignal<string | null>(null);

  const onSelectImage = (e: { currentTarget: HTMLInputElement }) => {
    const files = e.currentTarget.files;
    if (files === null) {
      return;
    }

    const imageFile = files[0];

    const imageReader = new FileReader();
    imageReader.onload = (e) => {
      if (e.target === null) {
        return;
      }

      const url = e.target.result;
      if (typeof url !== "string") {
        return;
      }

      setImagePreview(url);
    };

    imageReader.readAsDataURL(imageFile);
  };

  return (
    <FormCustom id={props.id} label={props.label}>
      <input id={props.id} type="file" onInput={onSelectImage} />
      <Show when={imagePreview()}>{(url) => <img src={url()} />}</Show>
    </FormCustom>
  );
};
