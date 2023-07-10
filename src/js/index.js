//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar, { Jumbotron, Card, Footer } from "./component/home.jsx";

//render your react application
const App = () => {
    return (
      <div>
        <Navbar />
        <div className="container-fluid py-5 jumbotron-container">
          <Jumbotron />
        </div>
        <div className="card-container">
        <Card title="Card 1 Title" description="This is the first card description." />
        <Card title="Card 2 Title" description="This is the second card description." />
        <Card title="Card 3 Title" description="This is the third card description." />
        <Card title="Card 4 Title" description="This is the fourth card description." />
        </div>
        <Footer />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.querySelector("#app"));