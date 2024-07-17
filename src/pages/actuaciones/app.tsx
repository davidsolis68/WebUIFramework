import { useState } from "react";
import svelteLogo from "/svelte.svg";
import viteLogo from "/vite.svg";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full flex flex-row justify-center items-center">
        <a href="https://vitejs.dev" target="_blank" rel="noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={svelteLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Svelte</h1>
      <div className="card1 flex flex-col justify-center">
        <button
          className="!bg-blue-500 rounded-[5px] h-[50px] mb-[10px]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
