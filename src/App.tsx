import { Route, Routes } from "react-router-dom"
import Layout from "./app/layout"
import Home from "./app/home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
