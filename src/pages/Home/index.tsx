import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <h1>Arona's Mysterious Shop</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};
