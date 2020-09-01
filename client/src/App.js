import React from "react";
import { Navbar, Notification } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Notification />
      {/* <Navbar /> */}
      <Home />
    </div>
  );
}

export default App;
