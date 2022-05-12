import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListReactHook from './page/react-hook/List'
import UseStatePage from './page/react-hook/use-state'
import UseEffectPage from './page/react-hook/use-effect'
import UseContextPage from './page/react-hook/use-context'
import UseRefPage from './page/react-hook/use-ref'
import Sample from './page/sample'

function App() {
  return (
    <div className="App">
      <header className="">
        <h1 className="text-4xl">React basic</h1>
      </header>
      <Routes>
        <Route path="/" element={<ListReactHook />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/react-hook/use-state" element={<UseStatePage />} />
        <Route path="/react-hook/use-effect" element={<UseEffectPage />} />
        <Route path="/react-hook/use-context" element={<UseContextPage />} />
        <Route path="/react-hook/use-ref" element={<UseRefPage />} />
        <Route path="/react-hook" element={<ListReactHook />} />
      </Routes>
    </div>
  )
}

export default App
