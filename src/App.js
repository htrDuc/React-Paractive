import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topmenu from "./Components/Topmenu";
import Products from "./Pages/Products";
import "./App.css";
import { CartProvider } from "./Contexts/Cart";

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <Topmenu />
            <Route path="/" exact component={() => <h2>Home</h2>} />
            <Route path="/products/" exact component={Products} />
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
