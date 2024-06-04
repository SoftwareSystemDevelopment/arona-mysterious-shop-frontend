import { Card } from "~/components";
import SearchBar from "~/components/Header/SearchBar";
import { GoodBrief } from "./GoodBrief";
export default () => {
  return (
    <>
      <Card class="mx-auto max-w-[80%]">
        <SearchBar />
      </Card>
      <Card class="mx-auto my-4 flex max-w-[80%] flex-wrap">
        <GoodBrief
          goodId="123"
          title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
          image="/arona-mysterious-shop-frontend/img1.webp"
          price={1.235}
        />
        <GoodBrief
          goodId="456"
          title="商品标题"
          image="/arona-mysterious-shop-frontend/img1.webp"
          price={2.421}
        />
        <GoodBrief
          goodId="789"
          title="商品标题"
          image="/arona-mysterious-shop-frontend/img1.webp"
          price={3.924}
        />
        <GoodBrief
          goodId="1012"
          title="商品标题"
          image="/arona-mysterious-shop-frontend/img1.webp"
          price={5.213}
        />
        <GoodBrief
          goodId="123"
          title="商品标题"
          image="/arona-mysterious-shop-frontend/img1.webp"
          price={6.123}
        />
        <GoodBrief
          goodId="123"
          title="商品标题"
          image="/arona-mysterious-shop-frontend/img1.webp"
          price={612.213}
        />
      </Card>
    </>
  );
};
