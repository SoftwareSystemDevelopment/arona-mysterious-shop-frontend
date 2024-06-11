import { CommentInfo } from "~/data/interface";

interface GoodCommentProps extends CommentInfo {}
export default (props: GoodCommentProps) => {
  return (
    <li class="space-y-2 border-b-2 py-2">
      <div class="flex w-full justify-between">
        <h1 class="text-xl font-semibold">{props.commentUserId}</h1>
        <h1 class="h-full text-sm text-gray-500">{props.commentCreateDate}</h1>
      </div>
      <p>{props.commentContent}</p>
    </li>
  );
};
