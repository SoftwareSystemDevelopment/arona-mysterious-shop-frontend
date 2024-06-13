import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import {
  createMutation,
  createQuery,
  useQueryClient,
} from "@tanstack/solid-query";
import { Response, User } from "~/data/interface";
import { Button, Form } from "~/components";

export default () => {
  const [form, setForm] = createStore({
    userId: -1,
    userName: "",
    userPassword: undefined as string | undefined,
  });

  const query = createQuery<User | null>(() => ({
    queryKey: ["users", "self"],
    queryFn: async () => {
      const resp = await fetch("/api/user/current");
      const res: Response<User> = await resp.json();
      return res.data;
    },
  }));

  createEffect(() => {
    const data = query.data;

    if (typeof data !== "undefined" && data !== null) {
      setForm((prev) => ({
        ...prev,
        userId: data.userId,
        userName: data.userName,
      }));
    }
  });

  const client = useQueryClient();

  const mutation = createMutation(() => ({
    mutationFn: async () => {
      const resp = await fetch("/api/user/update", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const res = await resp.json();

      if (res.data === null) {
        throw new Error(res.message);
      }
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["users", "self"] });
    },
  }));

  return (
    <Form onSubmit={() => mutation.mutate()}>
      <h1 class="text-2xl font-semibold">基本信息</h1>
      <hr />
      <div class="flex justify-between space-x-8">
        <div class="flex-1 space-y-4">
          <Form.Item
            id="username"
            label="用户名"
            onInput={(e) => setForm("userName", e.currentTarget.value)}
            value={form.userName}
          />
          <Form.Item
            id="password"
            type="password"
            label="密码"
            onInput={(e) => setForm("userPassword", e.currentTarget.value)}
            value={form.userPassword}
          />
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
