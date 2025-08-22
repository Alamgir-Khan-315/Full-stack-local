import Sign_up from "./Pages/Sign_up/sign";
import Log from "./Pages/Log in/Log";
import Dashboard from "./Pages/Dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="h-screen bg-slate-500">

      <Router>
        <Routes>

          <Route path="/sign_up" element={<Sign_up />} />
          <Route path="/" element={<Log />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>

    </div>
   )
}

export default App