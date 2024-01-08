import {
  CallbackPage,
  ContextPage,
  EffectPage,
  HooksPage,
  LayoutEffectPage,
  MemoPage,
  ReducerPage,
  RefPage,
  StatePage,
  HomePage
} from './pages'
import { Header } from './components'


import {
  BrowserRouter, Routes, Route, 
} from "react-router-dom";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/state' element={<StatePage />} />
        <Route path='/effect' element={<EffectPage />} />
        <Route path='/context' element={<ContextPage />} />
        <Route path='/ref' element={<RefPage />} />
        <Route path='/reducer' element={<ReducerPage />} />
        <Route path='/layouteffect' element={<LayoutEffectPage />} />
        <Route path='/memo' element={<MemoPage />} />
        <Route path='/callback' element={<CallbackPage />} />
        <Route path='/hooks' element={<HooksPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
