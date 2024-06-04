import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { Button, Card } from "~/components";

export default () => {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [passwd2, setPasswd2] = createSignal("");

  // TODO: register
  const onRegister = () => {
    const user = username().trim();
    const pass = password().trim();
    const pass2 = passwd2().trim();

    if (pass !== pass2) {
      console.error("两次输入密码不一致！");
      return;
    }

    console.log(`Username: ${user}`);
    console.log(`Password: ${pass}`);
  };

  return (
    <div class="flex justify-center">
      <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 py-8">
        <h1 class="text-3xl">新用户注册</h1>
        <form
          class="flex w-3/5 flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onRegister();
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
          <div class="flex items-center space-x-4">
            <label for="passwd2" class="font-medium text-gray-900">
              重复密码
            </label>
            <input
              type="password"
              id="passwd2"
              class="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Repeat Password"
              onInput={(e) => setPasswd2(e.currentTarget.value)}
              value={passwd2()}
              required
            />
          </div>
          <div class="flex flex-row-reverse">
            <span class="text-sm font-medium">
              已经注册？前往
              <A class="text-blue-500 hover:text-blue-900" href="/login">
                登录
              </A>
            </span>
          </div>
          <Button type="submit">注册</Button>
        </form>
      </Card>
    </div>
  );
};
