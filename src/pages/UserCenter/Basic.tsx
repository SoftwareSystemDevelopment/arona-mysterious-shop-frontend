import { JSX, Show, createSignal } from "solid-js";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components";
import { UserCenter } from "./center";

const Item = (props: {
  class?: string;
  title: string;
  children?: JSX.Element;
}) => {
  return (
    <li class={twMerge("flex w-full", props.class)}>
      <div class="flex h-full w-[30%] items-center text-center">
        <h1 class="w-full text-xl font-semibold">{props.title}</h1>
      </div>
      <div class="w-[70%]">{props.children}</div>
    </li>
  );
};

export default () => {
  const [imagePreview, setImagePreview] = createSignal("");
  const handleFileChange: JSX.ChangeEventHandlerUnion<
    HTMLInputElement,
    Event
  > = (event) => {
    const fileList = event.target.files;
    if (fileList === null) return;
    const file = fileList[0];
    if (fileList === null) return;
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target === null) return;
      setImagePreview(e.target.result as string);
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <UserCenter type="Basic">
        <div>
          <div class="w-full">
            <h1 class="py-5 pl-10 text-2xl font-semibold">基本信息</h1>
          </div>
          <hr />
          <ul>
            <Item class="h-[100px]" title="用户名">
              <div class="flex h-full w-full items-center">
                <input
                  class="ml-auto mr-10 w-[40%] rounded-lg p-4"
                  value="用户000000"
                  type="string"
                />
              </div>
            </Item>
            <Item class="h-[100px]" title="密码">
              <div class="flex h-full w-full items-center">
                <input
                  class="ml-auto mr-10 w-[40%] rounded-lg p-4"
                  value="password"
                  type="password"
                />
              </div>
            </Item>
            <Item class="h-[220px]" title="头像">
              <Show
                when={imagePreview() === ""}
                fallback={
                  <div class="ml-auto mr-10 flex h-[200px] w-[200px] items-center">
                    <label
                      for="img-upload"
                      class="relative h-auto max-w-full cursor-pointer"
                    >
                      <img src={imagePreview()} alt="Uploaded" />
                    </label>
                    <input
                      id="img-upload"
                      onChange={handleFileChange}
                      class="hidden"
                      type="file"
                    />
                  </div>
                }
              >
                <div class="flex h-full w-full items-center">
                  <input
                    id="img-upload"
                    onChange={handleFileChange}
                    class="hidden"
                    type="file"
                  />
                  <label
                    for="img-upload"
                    class="relative ml-auto mr-10 cursor-pointer"
                  >
                    <div class="rounded-md bg-gray-200 p-4 hover:bg-gray-300">
                      <svg
                        class="mx-auto h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                      <p class="mt-2 text-sm text-gray-600">点击上传图片</p>
                    </div>
                  </label>
                </div>
              </Show>
            </Item>
            <Item class="h-[150px]" title="简介">
              <div class="flex h-full w-full items-center">
                <textarea class="ml-auto mr-10 h-[80%] w-[60%] resize-none rounded-lg p-2">
                  这个用户很懒，还没有简介哦！
                </textarea>
              </div>
            </Item>
          </ul>
          <hr class="my-2" />
        </div>
        <div class="my-8 flex w-full">
          <div class="mx-auto">
            <Button>提交更改</Button>
          </div>
        </div>
      </UserCenter>
    </>
  );
};
