import React from "react";

// Create your first component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const Jumbotron = () => {
  return (
    <div className="container-fluid py-5" style ={{width: "76rem", height: "20rem", backgroundColor: "#f2f2f2"}}>
      <h1 className="display-5 fw-bold">Custom jumbotron</h1>
      <p className="col-md-12 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
      <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
    </div>
  );
};

export const Card = ({ title, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-img-top" style={{ width: "287px", height: "185px", backgroundColor: "gray" }}></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};
export const Footer = () => {
  return (
    <footer className="navbar navbar-dark bg-dark fixed-bottom">
      <div className="container-fluid d-flex justify-content-center">
        <span className="navbar-brand">Copyright © Your Website 2018</span>
      </div>
    </footer>
  );
};
