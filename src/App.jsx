import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Vite + React + Tailwind</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
        >
          Count is {count}
        </button>
        <p className="text-gray-700">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500">
        Click the button above to increase the counter
      </p>
    </div>
  );
}

export default App;

