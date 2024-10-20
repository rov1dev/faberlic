import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ setSideF, side }) => {
  return (
    <div className="vh-100 w-100 position-absolute z-3 sidebar d-flex">
      <div className="w-50 main-side  overflow-y-scroll h-100 bg-light">
        <div className="container ">
          <div className="text-end my-4">
            <i
              onClick={() => setSideF(!side)}
              className="fa fa-close fs-2 "
            ></i>
          </div>
          <div className="side-dir d-flex flex-column ">
            <Link to={"/profile"}>
              <i className="fa-regular fa-user"></i>
              <p>Shaxsiy kabinet</p>
            </Link>
            <Link to={"/order"}>
              <i className="fa-solid fa-bag-shopping"></i>
              <p>Buyurtmalar</p>
            </Link>
            <Link to={"/order"}>
              <i className="fa-solid fa-heart"></i>
              <p>Sevimli mahsulotlar</p>
            </Link>
            <Link to={"/profile"}>
              <i className="fa-solid fa-basket-shopping"></i> <p>Savat</p>
            </Link>
          </div>
          <div className="side-topages mt-4">
            <Link to={"/katalog"}>
              <p>katalog</p>
            </Link>
            <Link to={"/katalog"}>
              <p>Aksiya va chegirmalar</p>
            </Link>
            <Link to={"/katalog"}>
              <p>Brendlar</p>
            </Link>
            <Link to={"/katalog"}>
              <p>Biz haqimizda</p>
            </Link>
          </div>
          <div className=" text-center mt-4">
            <p className="fs-2 fw-bold">
              <i className="fa fa-phone pe-2"></i>33 702 44 41
            </p>
            <div className="mt-3">
              <i className="fs-3 fa fa-instagram"></i>
              <i className="fs-3 mx-3 fa fa-telegram"></i>
              <i className="fs-3 fa fa-facebook"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-side w-50 h-100 "style={{ background: "#1818184e" }} onClick={() => setSideF(!side)}></div>
    </div>
  );
};

export default Sidebar;
