import { Match, Show, Switch } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { Response, User } from "~/data/interface";
import { Button, Card } from "~/components";

export default () => {
  const navigate = useNavigate();

  const query = createQuery<User | null>(() => ({
    queryKey: ["users", "self"],
    queryFn: async () => {
      const resp = await fetch("/api/user/current");
      const res: Response<User> = await resp.json();
      return res.data;
    },
  }));

  return (
    <div class="flex justify-center">
      <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-8 py-16">
        <h1 class="text-3xl font-bold">Arona's Mysterious Shop</h1>
        <Switch>
          <Match
            when={typeof query.data === "undefined" || query.data === null}
          >
            <div class="flex flex-col items-center space-y-2">
              <span class="text-xl">欢迎您，游客！</span>
              <Button onClick={() => navigate("/goods")}>到处逛逛</Button>
            </div>
          </Match>
          <Match when={query.data}>
            {(me) => (
              <div class="flex flex-col items-center space-y-2">
                <span class="text-xl">欢迎您，{me().userName}！</span>
                <Show
                  when={me().userRole === "provider"}
                  fallback={
                    <div class="flex space-x-2">
                      <Button onClick={() => navigate("/user/address")}>
                        我的地址
                      </Button>
                      <Button onClick={() => navigate("/cart")}>
                        我的购物车
                      </Button>
                      <Button onClick={() => navigate("/user/order")}>
                        我的订单
                      </Button>
                    </div>
                  }
                >
                  <Button onClick={() => navigate("/goods/upload")}>
                    新建商品
                  </Button>
                </Show>
              </div>
            )}
          </Match>
        </Switch>
      </Card>
    </div>
  );
};
