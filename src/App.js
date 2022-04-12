import React from "react";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes >
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" exact element={<Singlepost />} />
        </Routes >
    </div>
  );
}

export default App;