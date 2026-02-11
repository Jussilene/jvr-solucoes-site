import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import TermosDeUso from "./pages/TermosDeUso"
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/privacidade" element={<PoliticaDePrivacidade />} />
      </Route>
    </Routes>
  )
}
