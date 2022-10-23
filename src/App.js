import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";


function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
