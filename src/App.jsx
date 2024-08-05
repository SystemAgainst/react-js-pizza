import './App.css'
import { Header } from "./components/index.js";
import { Home, Cart } from "./pages/index.js";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5173/db.json`)
            .then((resp) => resp.json())
            .then((json) => {
                setItems(json.pizzas);
            })
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
