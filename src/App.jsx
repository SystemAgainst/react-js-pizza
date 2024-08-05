import './App.css'
import { Header } from "./components/index.js";
import { Home, Cart } from "./pages/index.js";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5173/db.json`)
            .then(({ data }) => {
                setItems(data.pizzas);
            });
    }, []);

  return (
      <>
        <div className="wrapper">
          <Header />
          <div className="content">
              <Routes>
                  <Route path="/" element={<Home items={items} />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>
          </div>
        </div>
      </>
  )
}

export default App
