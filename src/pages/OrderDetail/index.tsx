import { Match, Switch } from "solid-js";
import { useParams } from "@solidjs/router";
import { QueryFunction, createQuery } from "@tanstack/solid-query";
import { OrderInfo, Response } from "~/data/interface";
import { Card } from "~/components";
import Details from "./Details";

const queryFn: QueryFunction<OrderInfo> = async (props) => {
  const resp = await fetch(`/api/order/get?orderId=${props.queryKey[1]}`);

  const res: Response<OrderInfo> = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }

  return res.data;
};

export default () => {
  const params = useParams();

  const query = createQuery<OrderInfo>(() => ({
    queryKey: ["orders", +params.id],
    queryFn,
  }));

  return (
    <div class="flex justify-center">
      <Switch>
        <Match when={query.isPending}>
          <Card class="flex w-2/5 max-w-[540px] flex-col items-center py-20">
            <span class="text-2xl">Loading...</span>
          </Card>
        </Match>
        <Match when={query.isError}>
          <Card class="flex w-2/5 max-w-[540px] flex-col items-center py-20">
            <span class="text-2xl">Error: {query.error?.message}</span>
          </Card>
        </Match>
        <Match when={query.isSuccess}>
          <Details {...query.data!} />
        </Match>
      </Switch>
    </div>
  );
};
