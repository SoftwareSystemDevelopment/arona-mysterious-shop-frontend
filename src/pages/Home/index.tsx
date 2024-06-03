import { createSignal } from "solid-js";
import { Button, Card } from "~/components";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="flex justify-center">
      <Card class="flex w-4/5 max-w-[1080px] flex-col items-center space-y-4">
        <h1 class="text-3xl font-bold">Arona's Mysterious Shop</h1>
        <Button onClick={() => setCount((c) => c + 1)}>
          count is {count()}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
    </div>
  );
};
