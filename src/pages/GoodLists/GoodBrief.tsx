import { useNavigate } from "@solidjs/router";

interface GoodBriefProps {
  /**
   * 商品Id
   */
  goodId: string;
  /**
   * 商品标题
   */
  title: string;
  /**
   * 商品图片url
   */
  image: string;
  /**
   * 商品价格
   */
  price: number;
}

export const GoodBrief = (props: GoodBriefProps) => {
  const nav = useNavigate();
  const gotoDetail = () => nav(`/details/${props.goodId}`);
  return (
    <div class="min-w-[150px] max-w-[20%] p-2">
      <button onClick={gotoDetail}>
        <img src={props.image} alt="商品图片" />
      </button>
      <button
        onClick={gotoDetail}
        class="h-20 overflow-hidden text-xl text-blue-700 hover:text-blue-500"
      >
        {props.title}
      </button>
      <h1 class="text-2xl text-red-600">{`¥ ${Math.round(props.price * 100) / 100}`}</h1>
    </div>
  );
};
