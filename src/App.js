import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="">
        <h1 className="text-4xl">React basic</h1>
      </header>
      <div class="container mt-4 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
            <div class="m-3">
              <h2 class="text-lg mb-2">React Hook</h2>
              <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
