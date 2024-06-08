import { createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { Response, User } from "~/data/interface";
import { useState } from "~/store";
import { Button, Card, Checkbox } from "~/components";

export default () => {
  const navigate = useNavigate();

  const [_state, setState] = useState();

  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [remember, setRemember] = createSignal(false);

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
      setState("currentUser", res.data);
      alert(`登录成功！用户名：${res.data.userAccount}`);
      navigate("/");
    } else {
      alert(`登录失败！原因：${res.message}`);
    }
  };

  return (
    <div class="flex justify-center">
      <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 py-8">
        <h1 class="text-3xl">用户登录</h1>
        <form
          class="flex w-3/5 flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div class="flex items-center space-x-4">
            <label for="username" class="font-medium text-gray-900">
              用户名
            </label>
            <input
              id="username"
              class="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Username"
              onInput={(e) => setUsername(e.currentTarget.value)}
              value={username()}
              required
            />
          </div>
          <div class="flex items-center space-x-4">
            <label for="password" class="font-medium text-gray-900">
              密码
            </label>
            <input
              type="password"
              id="password"
              class="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Password"
              onInput={(e) => setPassword(e.currentTarget.value)}
              value={password()}
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <Checkbox
              id="remember"
              label="记住我"
              onInput={(e) => setRemember(e.currentTarget.checked)}
              checked={remember()}
            />
            <span class="text-sm font-medium">
              还没有账号？前往
              <A class="text-blue-500 hover:text-blue-900" href="/register">
                注册
              </A>
            </span>
          </div>
          <Button type="submit">登录</Button>
        </form>
      </Card>
    </div>
  );
};
