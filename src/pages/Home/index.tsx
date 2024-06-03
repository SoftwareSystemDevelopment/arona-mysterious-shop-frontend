import { createSignal } from "solid-js";
import { Badge, Carousel } from "~/components";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="bg-gray-50">
      <div class="py-20">
        <div class="px-10">
          <Carousel
            interval={2000}
            urls={["/img1.webp", "/img2.webp", "img3.webp"]}
          />
        </div>

        <h1>Arona's Mysterious Shop</h1>
        <Badge>qwq</Badge>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count()}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
};
