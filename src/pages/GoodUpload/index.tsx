import { For, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { useNavigate } from "@solidjs/router";
import { Response } from "~/data/interface";
import { goodCategoryMap } from "~/data/constants";
import { Button, Card, Form } from "~/components";

export default () => {
  const navigate = useNavigate();

  const [form, setForm] = createStore({
    productName: "",
    productPrice: 0,
    stock: 0,
    productCategoryName: "ooparts",
    productIsEnabled: 0,
    productDescription: "",
  });

  const [image, setImage] = createSignal<File | null>(null);

  const onSubmit = async () => {
    const resp = await fetch("/api/product/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    const res: Response<number> = await resp.json();

    if (res.data === null) {
      alert(`新建商品失败！原因：${res.message}`);
      return;
    }

    const goodId = res.data;

    const imageFile = image();
    if (imageFile === null) {
      alert("新建商品成功！");
      navigate(`/goods/${goodId}`);
      return;
    }

    const imageForm = new FormData();
    imageForm.append("productId", `${goodId}`);
    imageForm.append("file", imageFile);

    const imageResp = await fetch("/api/image/upload/product", {
      method: "POST",
      body: imageForm,
    });

    const imageRes = await imageResp.json();

    if (imageRes.data !== null) {
      alert("新建商品成功！");
      navigate(`/goods/${goodId}`);
    }
  };

  return (
    <div class="flex justify-center">
      <Card class="w-4/5 max-w-[1080px]">
        <Form onSubmit={onSubmit}>
          <h1 class="text-2xl font-semibold">商品信息</h1>
          <hr />
          <div class="flex justify-between space-x-8">
            <div class="flex-1 space-y-4">
              <Form.Item
                id="title"
                label="商品名称"
                onInput={(e) => setForm("productName", e.currentTarget.value)}
                value={form.productName}
              />
              <Form.Item
                id="description"
                label="简介"
                rows={4}
                multiline
                onInput={(e) =>
                  setForm("productDescription", e.currentTarget.value)
                }
                value={form.productDescription}
              />
              <Form.Custom id="price" label="商品价格">
                <div class="flex items-baseline space-x-2 rounded-lg border border-gray-300 bg-white px-2">
                  <span>￥</span>
                  <input
                    class="flex-1 py-1"
                    id="price"
                    type="number"
                    min={0}
                    step={0.01}
                    onInput={(e) =>
                      setForm("productPrice", parseFloat(e.currentTarget.value))
                    }
                    value={form.productPrice}
                  />
                  <span>元</span>
                </div>
              </Form.Custom>
              <Form.Custom id="stock" label="库存">
                <div class="flex items-baseline space-x-2 rounded-lg border border-gray-300 bg-white px-2">
                  <input
                    class="flex-1 py-1"
                    id="stock"
                    type="number"
                    min={0}
                    step={1}
                    onInput={(e) =>
                      setForm("stock", parseInt(e.currentTarget.value))
                    }
                    value={form.stock}
                  />
                  <span>件</span>
                </div>
              </Form.Custom>
              <Form.Custom id="category" label="类别">
                <select
                  id="category"
                  class="rounded-lg px-2 py-1"
                  onInput={(e) =>
                    setForm("productCategoryName", e.currentTarget.value)
                  }
                  value={form.productCategoryName}
                >
                  <For each={Object.entries(goodCategoryMap)}>
                    {(item) => <option value={item[0]}>{item[1]}</option>}
                  </For>
                </select>
              </Form.Custom>
            </div>
            <div class="flex-1">
              <Form.Image
                id="image"
                label="商品图片"
                onSelect={(f) => setImage(f)}
              />
            </div>
          </div>
          <hr />
          <Button type="submit">提交商品</Button>
        </Form>
      </Card>
    </div>
  );
};
