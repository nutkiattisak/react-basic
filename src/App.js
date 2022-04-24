import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListReactHook from './page/react-hook/List'
import UseEffectPage from './page/react-hook/use-effect'

function App() {
  return (
    <div className="App">
      <header className="">
        <h1 className="text-4xl">React basic</h1>
      </header>
      <Routes>
        <Route path="/" element={<ListReactHook />} />
        <Route path="/react-hook/use-effect" element={<UseEffectPage />} />
        <Route path="/react-hook" element={<ListReactHook />} />
      </Routes>
    </div>
  )
}

export default App
