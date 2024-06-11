import { mockComments } from "~/data/mock";
import CommentItem from "./CommentItem";
import { For } from "solid-js";
import { Button, Input } from "~/components";

export default () => {
  const comments = mockComments;
  return (
    <>
      <div class="mb-4 w-full space-y-4">
        <Input.TextArea class="w-full" placeholder="请输入评论..." rows={4} />
        <div class="flex w-full flex-row-reverse">
          <Button class="mr-2">发表评论</Button>
        </div>
      </div>
      <ul class="px-4 py-2">
        <For each={comments}>
          {(comment) => (
            <>
              <CommentItem {...comment} />
            </>
          )}
        </For>
      </ul>
    </>
  );
};
