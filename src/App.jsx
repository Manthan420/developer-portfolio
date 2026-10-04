import { Outlet } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main className="page">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;