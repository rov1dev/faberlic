import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 1359000,
    },
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 1359000,
    },
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 1359000,
    },
    {
      img: "products.png",
      name: "Hugo Man",
      brand: "Hugo Boss",
      price: 1359000,
    },
  ]);
  return (
    <div className="container mt-5 mb-4">
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
      <div className="row mt-5">
        {products.map((item, ind) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-5 py-3 col-sm-12 " key={ind}>
            <i className="fa-regular fa-heart float-end "></i> <br />
            <img width={"90%"} src={item.img} alt="" />
            <div className="card-text mx-3">
              <h5>{item.name}</h5>
              <p>{item.brand}</p>
              <h5 className="pb-2">{item.price}</h5>
              <Link to={"/product"}>
                <button className="float-start infor w-100">Batafsil</button>
              </Link>
              <button className="float-end add-busket w-100">
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
