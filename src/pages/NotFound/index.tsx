import { useNavigate } from "@solidjs/router";
import { Button, Card } from "~/components";

export default () => {
  const navigate = useNavigate();

  return (
    <div class="flex justify-center">
      <Card class="flex w-2/5 max-w-[540px] flex-col items-center space-y-8 py-20">
        <span class="text-2xl">页面走丢了哦~</span>
        <Button onClick={() => navigate(-1)}>返回上一页</Button>
      </Card>
    </div>
  );
};
