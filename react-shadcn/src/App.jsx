import { Button} from "@/components/ui/button";
import Navbar from "./components/ui/Navbar";
import * as ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Editor from "./components/ui/Editor";
import Home from "./components/Home";
import About from "./components/About";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
function App() {
 
   const [isLoading, setIsLoading] = useState(true);
  return (
    <>
     <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/editor" element={<Editor isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
     </Routes>
    </>
  )
}

export default App
