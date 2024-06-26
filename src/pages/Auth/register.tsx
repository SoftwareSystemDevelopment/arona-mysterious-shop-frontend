import { Show, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { Response } from "~/data/interface";
import { Button, Card, Form } from "~/components";

export default () => {
  const navigate = useNavigate();

  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [passwd2, setPasswd2] = createSignal("");
  const [isProvider, setIsProvider] = createSignal(false);

  const onRegister = async () => {
    const user = username().trim();
    const pass = password().trim();
    const pass2 = passwd2().trim();

    if (pass !== pass2) {
      console.error("两次输入密码不一致！");
      return;
    }

    const resp = await fetch("/api/user/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userAccount: user,
        userName: user,
        userPassword: pass,
        userRole: isProvider() ? "provider" : "user",
      }),
    });

    const res: Response<string> = await resp.json();

    if (res.data !== null) {
      alert(`注册成功！用户 id：${res.data}`);
      navigate("/login");
    } else {
      alert(`注册失败！原因：${res.message}`);
    }
  };

  return (
    <div class="flex justify-center">
      <Card class="flex w-2/5 max-w-[540px] flex-col items-center">
        <Form class="w-full" onSubmit={onRegister}>
          <h1 class="text-2xl font-semibold">新用户注册</h1>
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
          <Form.Item
            id="passwd2"
            label="重复密码"
            type="password"
            placeholder="Repeat Password"
            onInput={(e) => setPasswd2(e.currentTarget.value)}
            value={passwd2()}
            required
          />
          <div class="flex items-center justify-between">
            <label class="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                onInput={(e) => setIsProvider(e.currentTarget.checked)}
                checked={isProvider()}
                class="peer sr-only"
              />
              <div class="peer relative flex h-6 items-center rounded-full bg-gray-200 px-2 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-[68px] peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300">
                <Show
                  when={isProvider()}
                  fallback={
                    <span class="ms-5 select-none text-sm font-medium text-gray-900">
                      我是用户
                    </span>
                  }
                >
                  <span class="me-5 select-none text-sm font-medium text-white">
                    我是商家
                  </span>
                </Show>
              </div>
            </label>
            <span class="text-sm font-medium">
              已经注册？前往
              <A class="text-blue-500 hover:text-blue-900" href="/login">
                登录
              </A>
            </span>
          </div>
          <hr />
          <Button type="submit">注册</Button>
        </Form>
      </Card>
    </div>
  );
};
