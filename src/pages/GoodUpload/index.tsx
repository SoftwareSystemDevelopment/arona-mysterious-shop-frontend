import { JSX, Show, createSignal } from "solid-js";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "~/components";

const Item = (props: {
  class?: string;
  title: string;
  children?: JSX.Element;
}) => {
  return (
    <li class={twMerge("flex w-full hover:bg-blue-300", props.class)}>
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
    if (file === null) return;
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target === null) return;
      setImagePreview(e.target.result as string);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div class="flex flex-col">
      <Card class="mx-auto w-[80%]">
        <h1 class="w-full text-center text-2xl font-bold">商品上传</h1>
      </Card>
      <Card class="mx-auto my-5 w-[80%]">
        <ul>
          <Item class="h-[100px]" title="商品名称">
            <div class="flex h-full w-full items-center">
              <input
                class="mx-10 w-[40%] rounded-lg p-4"
                value="商品名称商品名称商品名称"
                type="string"
              />
            </div>
          </Item>
          <Item class="h-[150px]" title="商品描述">
            <div class="flex h-full w-full items-center">
              <textarea class="mx-10 h-[80%] w-[60%] resize-none rounded-lg p-2">
                这个商品暂时没有简介。
              </textarea>
            </div>
          </Item>
          <Item class="h-[100px]" title="价格">
            <div class="flex h-full w-full items-center">
              <div class="mx-10 mr-10 flex space-x-3 p-2 text-red-600">
                <span class="text-2xl">¥</span>
                <input
                  onChange={(e) => {
                    const num = Number.parseFloat(e.currentTarget.value);
                    if (num < 0) e.currentTarget.value = "0.00";
                    else
                      e.currentTarget.value = (Math.round(num * 100) / 100)
                        .toFixed(3)
                        .toString();
                  }}
                  class="w-[200px] rounded-lg text-center text-xl"
                  value="0.00"
                  type="number"
                />
                <span class="text-2xl">元</span>
              </div>
            </div>
          </Item>
          <Item class="h-[100px]" title="库存">
            <div class="flex h-full w-full items-center">
              <div class="mx-10 flex w-[40%] space-x-3 p-2">
                <input
                  class="w-[200px] rounded-lg text-center text-xl"
                  onChange={(e) => {
                    const num = Number.parseFloat(e.currentTarget.value);
                    if (Math.round(num) !== num || num < 0)
                      e.currentTarget.value = "1";
                  }}
                  value="1"
                  type="number"
                />
                <span class="text-center text-2xl">件</span>
              </div>
            </div>
          </Item>
          <Item class="h-[100px]" title="标签">
            <div class="flex h-full w-full items-center">
              <input
                class="mx-10 w-[40%] rounded-lg p-4"
                value="商品标签"
                type="string"
              />
            </div>
          </Item>
          <Item class="h-[80px]" title="是否上架">
            <div class="flex h-full w-full items-center">
              <input
                class="mx-10 h-[20px] w-[20px] rounded-lg p-4"
                value="false"
                type="checkbox"
              />
            </div>
          </Item>
          <Item class="h-[220px]" title="商品图片">
            <Show
              when={imagePreview() === ""}
              fallback={
                <div class="mx-10 flex h-[200px] w-[200px] items-center">
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
                <label for="img-upload" class="relative mx-10 cursor-pointer">
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
        </ul>
        <div class="my-8 flex w-full">
          <div class="mx-auto">
            <Button>提交商品</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
