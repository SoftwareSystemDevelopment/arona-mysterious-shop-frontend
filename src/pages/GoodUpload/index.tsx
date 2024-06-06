import { JSX, Show, createSignal } from "solid-js";
import { twMerge } from "tailwind-merge";
import { Button, Card } from "~/components";

interface FormItemProps {
  id: string;
  label: string;
  class?: string;
  children?: JSX.Element;
}

const FormItem = (props: FormItemProps) => (
  <div class={twMerge("flex flex-col space-y-1", props.class)}>
    <label for={props.id} class="ml-2 text-sm">
      {props.label}
    </label>
    {props.children}
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
  return (
    // <div class="flex flex-col">
    //     <Card class="mx-auto w-[80%]">
    //         <h1 class="w-full text-center text-2xl font-bold">商品上传</h1>
    //     </Card>
    //     <Card class="mx-auto my-5 w-[80%]">
    //         <ul>
    //             <Item class="h-[100px]" title="商品名称">
    //                 <div class="flex h-full w-full items-center">
    //                     <input
    //                         class="mx-10 w-[40%] rounded-lg p-4"
    //                         value="商品名称商品名称商品名称"
    //                         type="string"
    //                     />
    //                 </div>
    //             </Item>
    //             <Item class="h-[150px]" title="商品描述">
    //                 <div class="flex h-full w-full items-center">
    //                     <textarea class="mx-10 h-[80%] w-[60%] resize-none rounded-lg p-2">
    //                         这个商品暂时没有简介。
    //                     </textarea>
    //                 </div>
    //             </Item>
    //             <Item class="h-[100px]" title="价格">
    //                 <div class="flex h-full w-full items-center">
    //                     <div class="mx-10 mr-10 flex space-x-3 p-2 text-red-600">
    //                         <span class="text-2xl">¥</span>
    //                         <input
    //                             onChange={(e) => {
    //                                 const num = Number.parseFloat(e.currentTarget.value);
    //                                 if (num < 0) e.currentTarget.value = "0.00";
    //                                 else
    //                                     e.currentTarget.value = (Math.round(num * 100) / 100)
    //                                         .toFixed(3)
    //                                         .toString();
    //                             }}
    //                             class="w-[200px] rounded-lg text-center text-xl"
    //                             value="0.00"
    //                             type="number"
    //                         />
    //                         <span class="text-2xl">元</span>
    //                     </div>
    //                 </div>
    //             </Item>
    //             <Item class="h-[100px]" title="库存">
    //                 <div class="flex h-full w-full items-center">
    //                     <div class="mx-10 flex w-[40%] space-x-3 p-2">
    //                         <input
    //                             class="w-[200px] rounded-lg text-center text-xl"
    //                             onChange={(e) => {
    //                                 const num = Number.parseFloat(e.currentTarget.value);
    //                                 if (Math.round(num) !== num || num < 0)
    //                                     e.currentTarget.value = "1";
    //                             }}
    //                             value="1"
    //                             type="number"
    //                         />
    //                         <span class="text-center text-2xl">件</span>
    //                     </div>
    //                 </div>
    //             </Item>
    //             <Item class="h-[100px]" title="标签">
    //                 <div class="flex h-full w-full items-center">
    //                     <input
    //                         class="mx-10 w-[40%] rounded-lg p-4"
    //                         value="商品标签"
    //                         type="string"
    //                     />
    //                 </div>
    //             </Item>
    //             <Item class="h-[80px]" title="是否上架">
    //                 <div class="flex h-full w-full items-center">
    //                     <input
    //                         class="mx-10 h-[20px] w-[20px] rounded-lg p-4"
    //                         value="false"
    //                         type="checkbox"
    //                     />
    //                 </div>
    //             </Item>
    //             <Item class="h-[220px]" title="商品图片">
    //                 <Show
    //                     when={imagePreview() === ""}
    //                     fallback={
    //                         <div class="mx-10 flex h-[200px] w-[200px] items-center">
    //                             <label
    //                                 for="img-upload"
    //                                 class="relative h-auto max-w-full cursor-pointer"
    //                             >
    //                                 <img src={imagePreview()} alt="Uploaded" />
    //                             </label>
    //                             <input
    //                                 id="img-upload"
    //                                 onChange={handleFileChange}
    //                                 class="hidden"
    //                                 type="file"
    //                             />
    //                         </div>
    //                     }
    //                 >
    //                     <div class="flex h-full w-full items-center">
    //                         <input
    //                             id="img-upload"
    //                             onChange={handleFileChange}
    //                             class="hidden"
    //                             type="file"
    //                         />
    //                         <label for="img-upload" class="relative mx-10 cursor-pointer">
    //                             <div class="rounded-md bg-gray-200 p-4 hover:bg-gray-300">
    //                                 <svg
    //                                     class="mx-auto h-8 w-8"
    //                                     fill="none"
    //                                     viewBox="0 0 24 24"
    //                                     stroke="currentColor"
    //                                 >
    //                                     <path
    //                                         stroke-linecap="round"
    //                                         stroke-linejoin="round"
    //                                         stroke-width="2"
    //                                         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //                                     ></path>
    //                                 </svg>
    //                                 <p class="mt-2 text-sm text-gray-600">点击上传图片</p>
    //                             </div>
    //                         </label>
    //                     </div>
    //                 </Show>
    //             </Item>
    //         </ul>
    //         <div class="my-8 flex w-full">
    //             <div class="mx-auto">
    //                 <Button>提交商品</Button>
    //             </div>
    //         </div>
    //     </Card>
    // </div>
    <div class="flex w-full justify-center">
      <Card class="w-[80%]">
        <form
          class="space-y-4 p-2"
          onSubmit={(e) => {
            e.preventDefault();
            // onSubmit();
          }}
        >
          <h1 class="ml-4 text-2xl font-semibold">商品信息</h1>
          <hr />
          <div class="flex justify-between space-x-8">
            <div class="ml-10 flex-1 space-y-4">
              <FormItem id="title" label="商品名称">
                <input
                  id="title"
                  type="string"
                  class="rounded-lg border border-gray-300 px-2 py-1"
                />
              </FormItem>
              <FormItem id="description" label="简介">
                <textarea
                  id="description"
                  class="resize-none rounded-lg border border-gray-300 px-2 py-1"
                  rows={4}
                />
              </FormItem>
              <FormItem id="price" label="商品价格">
                <div class="flex space-x-3 text-center text-lg">
                  <div class="flex rounded-lg border border-gray-300 bg-white">
                    <h1 class="ml-1 pt-1">¥</h1>
                    <input
                      onChange={(e) => {
                        const num = Number.parseFloat(e.currentTarget.value);
                        if (num < 0) e.currentTarget.value = "0.00";
                        else
                          e.currentTarget.value = (Math.round(num * 100) / 100)
                            .toFixed(2)
                            .toString();
                      }}
                      id="price"
                      type="number"
                      value="0.00"
                      class="py-1 pr-2 focus:ring-0"
                    />
                    <h1 class="mx-1 pt-1">元</h1>
                  </div>
                </div>
              </FormItem>
              <FormItem id="stock" label="库存">
                <div class="flex space-x-3 text-center text-lg">
                  <div class="flex rounded-lg border border-gray-300 bg-white">
                    <input
                      onChange={(e) => {
                        const num = Number.parseFloat(e.currentTarget.value);
                        if (Math.round(num) !== num || num < 0)
                          e.currentTarget.value = "1";
                      }}
                      id="price"
                      type="number"
                      value="1"
                      class="mx-2 py-1"
                    />
                    <h1 class="mx-1 pt-1">件</h1>
                  </div>
                </div>
              </FormItem>
              <FormItem
                id="enabled"
                label="是否上架"
                class="flex-row space-y-0"
              >
                <input
                  class="ml-10 h-[20px] w-[20px] rounded-lg"
                  value="false"
                  type="checkbox"
                />
              </FormItem>
            </div>
            <div class="flex flex-1 flex-col space-y-1">
              <label for="avatar" class="ml-2 text-sm">
                商品图片
              </label>
              <input id="avatar" type="file" onInput={onSelectAvatar} />
              <Show when={avatarPreview()}>{(url) => <img src={url()} />}</Show>
            </div>
          </div>
          <hr />
          <Button class="ml-10" type="submit">
            提交商品
          </Button>
        </form>
      </Card>
    </div>
  );
};
