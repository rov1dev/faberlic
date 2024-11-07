import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 13590,
    },
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 13590,
    },
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 13590,
    },
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 13500,
    },
  ]);
  return (
    <div className="products pt-5 pb-5">
    <div className="container ">
      <div className="text text-center">
        <h2>Ommabop atirlar</h2>
        <div className="prod-directs">
          <a className="fw-bold" href="">
            Hammasi
          </a>
          <a href="">Ayollar uchun</a>
          <a href="">Erkaklar uchun</a>
          <a href="">Uniseks</a>
          <a className="fw-bold" href="">
            To'liq katalog <i class="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="row mt-5 gap-4">
        {products.map((item, ind) => (
          <div className="shadow rounded-4 product col-lg-3 col-md-4 col-sm-6 mt-5 py-3 col-sm-12  " key={ind}>
            <i className="fa-regular fa-heart float-end "></i> <br />
            <div className=" text-center">
            <img width={"90%"} src={item.img} alt="" />
            </div>
            <div className="card-text mx-3">
              <h5>{item.name}</h5>
              <p>{item.brand}</p>
              <h5 className="pb-2 card-price">{item.price}</h5>
              <Link to={"/product"}>
                <button className="float-start infor w-50">Batafsil</button>
              </Link>
              <button className="float-end add-busket w-50">
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
