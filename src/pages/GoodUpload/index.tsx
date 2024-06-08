import { Button, Card, Checkbox, Form } from "~/components";

export default () => {
  // TODO: submit
  const onSubmit = () => {
    console.log("TODO: shit");
  };

  return (
    <div class="flex justify-center">
      <Card class="w-4/5 max-w-[1080px]">
        <Form onSubmit={onSubmit}>
          <h1 class="text-2xl font-semibold">商品信息</h1>
          <hr />
          <div class="flex justify-between space-x-8">
            <div class="flex-1 space-y-4">
              <Form.Item id="title" label="商品名称" />
              <Form.Item id="description" label="简介" rows={4} multiline />
              <Form.Custom id="price" label="商品价格">
                <div class="flex items-baseline space-x-2 rounded-lg border border-gray-300 bg-white px-2">
                  <span>￥</span>
                  <input
                    class="flex-1 py-1"
                    id="price"
                    type="number"
                    min={0}
                    step={0.01}
                    value={0.0}
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
                    value={0}
                  />
                  <span>件</span>
                </div>
              </Form.Custom>
              <Checkbox id="enabled" label="是否上架" />
            </div>
            <div class="flex-1">
              <Form.Image id="image" label="商品图片" />
            </div>
          </div>
          <hr />
          <Button type="submit">提交商品</Button>
        </Form>
      </Card>
    </div>
  );
};
