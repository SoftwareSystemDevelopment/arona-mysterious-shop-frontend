import { Button, Form } from "~/components";

export default () => {
  // TODO: submit
  const onSubmit = () => {
    console.log("shit");
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1 class="text-2xl font-semibold">基本信息</h1>
      <hr />
      <div class="flex justify-between space-x-8">
        <div class="flex-1 space-y-4">
          <Form.Item id="username" label="用户名" />
          <Form.Item id="password" type="password" label="密码" />
          <Form.Item id="description" label="简介" rows={4} multiline />
        </div>
        <div class="flex-1">
          <Form.Image id="avatar" label="头像" />
        </div>
      </div>
      <hr />
      <Button type="submit">提交更改</Button>
    </Form>
  );
};
