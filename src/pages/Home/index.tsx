import { createSignal } from "solid-js";
import { Badge, Navbar } from "~/components";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="bg-gray-50">
      <Navbar />
      <div>
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
