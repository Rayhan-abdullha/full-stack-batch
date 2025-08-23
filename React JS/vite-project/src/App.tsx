import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="w-[400px] flex p-12">
      <Routes>
        <Route path="/" element={<h1>Home React</h1>} /> 
        <Route path="/home-1" element={<h1>Home- 2 React</h1>} /> 
     </Routes>
   </div>
  )
}

export default App