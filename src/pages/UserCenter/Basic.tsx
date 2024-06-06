import { Show, createSignal } from "solid-js";
import { Button } from "~/components";

interface FormItemProps {
  id: string;
  label: string;
  type?: string;
}

const FormItem = (props: FormItemProps) => (
  <div class="flex flex-col space-y-1">
    <label for={props.id} class="ml-2 text-sm">
      {props.label}
    </label>
    <Show
      when={props.type === "multiline"}
      fallback={
        <input
          id={props.id}
          type={props.type}
          class="rounded-lg border border-gray-300 px-2 py-1"
        />
      }
    >
      <textarea
        id={props.id}
        class="resize-none rounded-lg border border-gray-300 px-2 py-1"
        rows={4}
      ></textarea>
    </Show>
  </div>
);

export default () => {
  const [avatarPreview, setAvatarPreview] = createSignal<string | null>(null);

  const onSelectAvatar = (e: { currentTarget: HTMLInputElement }) => {
    const files = e.currentTarget.files;
    if (files === null) {
      return;
    }

    const avatarFile = files[0];

    const avatarReader = new FileReader();
    avatarReader.onload = (e) => {
      if (e.target === null) {
        return;
      }

      const url = e.target.result;
      if (typeof url !== "string") {
        return;
      }

      setAvatarPreview(url);
    };

    avatarReader.readAsDataURL(avatarFile);
  };

  // TODO: submit
  const onSubmit = () => {
    console.log("shit");
  };

  return (
    <form
      class="space-y-4 p-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h1 class="text-2xl font-semibold">基本信息</h1>
      <hr />
      <div class="flex justify-between space-x-8">
        <div class="flex-1 space-y-4">
          <FormItem id="username" label="用户名" />
          <FormItem id="password" type="password" label="密码" />
          <FormItem id="description" type="multiline" label="简介" />
        </div>
        <div class="flex flex-1 flex-col space-y-1">
          <label for="avatar" class="ml-2 text-sm">
            头像
          </label>
          <input id="avatar" type="file" onInput={onSelectAvatar} />
          <Show when={avatarPreview()}>{(url) => <img src={url()} />}</Show>
        </div>
      </div>
      <hr />
      <Button type="submit">提交更改</Button>
    </form>
  );
};
