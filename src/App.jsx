import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'


function App() {
  return (
    <>
    <Navbar></Navbar>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
