import { createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { useQueryClient } from "@tanstack/solid-query";
import { Response, User } from "~/data/interface";
import { Button, Card, Form } from "~/components";

export default () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  const onLogin = async () => {
    const user = username().trim();
    const pass = password().trim();

    const resp = await fetch("/api/user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userAccount: user,
        userPassword: pass,
      }),
    });

    const res: Response<User> = await resp.json();

    if (res.data !== null) {
      client.invalidateQueries({ queryKey: ["users", "self"] });
      alert(`登录成功！用户名：${res.data.userAccount}`);
      navigate("/");
    } else {
      alert(`登录失败！原因：${res.message}`);
    }
  };

  return (
    <div class="flex justify-center">
      <Card class="flex w-2/5 max-w-[540px] flex-col items-center">
        <Form class="w-full" onSubmit={onLogin}>
          <h1 class="text-2xl font-semibold">用户登录</h1>
          <hr />
          <Form.Item
            id="username"
            label="用户名"
            placeholder="Username"
            onInput={(e) => setUsername(e.currentTarget.value)}
            value={username()}
            required
          />
          <Form.Item
            id="password"
            label="密码"
            type="password"
            placeholder="Password"
            onInput={(e) => setPassword(e.currentTarget.value)}
            value={password()}
            required
          />
          <div class="flex justify-end">
            <span class="text-sm font-medium">
              还没有账号？前往
              <A class="text-blue-500 hover:text-blue-900" href="/register">
                注册
              </A>
            </span>
          </div>
          <hr />
          <Button type="submit">登录</Button>
        </Form>
      </Card>
    </div>
  );
};
