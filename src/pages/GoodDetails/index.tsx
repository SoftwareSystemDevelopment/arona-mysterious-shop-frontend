import { Match, Switch } from "solid-js";
import { useParams } from "@solidjs/router";
import { QueryFunction, createQuery } from "@tanstack/solid-query";
import { GoodInfo, Response } from "~/data/interface";
import { Card } from "~/components";
import Details from "./Details";

const queryFn: QueryFunction<GoodInfo> = async (props) => {
  const resp = await fetch(`/api/product/get/vo?id=${props.queryKey[1]}`);

  const res: Response<GoodInfo> = await resp.json();

  if (res.data === null) {
    throw new Error(res.message);
  }

  return res.data;
};

export default () => {
  const params = useParams();

  const query = createQuery<GoodInfo>(() => ({
    queryKey: ["goods", params.id],
    queryFn,
  }));

  return (
    <div class="flex justify-center">
      <Switch>
        <Match when={query.isPending}>
          <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 py-8">
            Loading...
          </Card>
        </Match>
        <Match when={query.isError}>
          <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4 py-8">
            Error: {query.error!.message}
          </Card>
        </Match>
        <Match when={query.isSuccess}>
          <Details {...query.data!} />
        </Match>
      </Switch>
    </div>
  );
};
