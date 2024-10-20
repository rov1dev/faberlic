import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../styles/navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [side, setSide] = useState(false);
  return (
    <>
    <nav className=" py-3 shadow-sm border-bottom main-nav">
      <div className="container d-flex justify-content-between align-items-center ">
        <Link to={"/"}>
          <h3>Elyor parfyume</h3>
        </Link>
        <div>
          <Link to={"/katalog"}> Katalog</Link>
          <Link to={"/katalag"}> Aksiyalar</Link>
          <Link to={"/katalog"}> Do'konlar</Link>
          <Link to={"/katalag"}> Brendlar</Link>
        </div>
        <div className="nav-search px-3 py-1">
          <i className="fa-solid  fa-magnifying-glass"></i>
          <input
            className="px-3 py-1 "
            placeholder="Qidirish..."
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="nav-directions">
          <Link to={"/profile"}>
            <i className="fa-regular fa-user"></i>
          </Link>
          <Link to={"/order"}>
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to={"/Busket"}>
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <p className="fw-bold ">UZ</p>
          <div className="line"></div>
          <p>RU</p>
        </div>
      </div>
    </nav>
      <nav className="py-3 shadow-sm border-bottom md-nav">
        {side && <Sidebar setSideF={setSide} side={side} />}
        <div className="container d-flex justify-content-between align-items-center">
          <i onClick={() => setSide(!side)} className="fa fa-bars fs-2"></i>
          <p className="fs-2">Elyor parfyum</p>
          <div className="nav-directions">
            <i className="fa-solid fa-bag-shopping fs-2"></i>
          </div>
        </div>
      </nav>
    </>

  );
};

export default Navbar;
