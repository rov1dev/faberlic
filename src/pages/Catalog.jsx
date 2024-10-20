import React, { useState } from "react";
import "../styles/navbar.css";
import Filt1 from "../components/Filt1";
import Filt2 from "../components/Filt2";

const Catalog = () => {
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
  const [filt1, setFilt1] = useState(false);
  const [filt2, setFilt2] = useState(false);
  return (
    <div className=" container">
      <div className="row">
        <div className=" col-12 mds-filter d-flex justify-content-between py-3 border-bottom">
          <div>
            <p onClick={() => setFilt1(!filt1)}>
              Eng mashxurlari{" "}
              {filt1 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </p>
            {filt1 && <Filt1 />}
          </div>
          <div>
            <p onClick={() => setFilt2(!filt2)}>
              <i className="fa-solid fa-filter"></i>
              Saralash
            </p>
            {filt2 && <Filt2 />}
          </div>
        </div>

        <div className="col-lg-2 mt-4 filter">
          <h4>
            <i className="fa-solid fa-chevron-left me-3"></i>Katalog
          </h4>
          <h5 className="my-4">
            <i class="fa-solid fa-filter pe-2"></i>Saralash
          </h5>
          <p className="fw-bold">Maxsus takliflar</p>
          <p>
            <input type="checkbox" />
            Chegirmali
          </p>
          <br />
          <p className="fw-bold">Kategoriya</p>
          <p>
            <input type="checkbox" /> Ayollar{" "}
          </p>
          <p>
            <input type="checkbox" /> Erkaklar{" "}
          </p>
          <p>
            <input type="checkbox" /> Uniseks{" "}
          </p>{" "}
          <br />
          <p className="fw-bold">Turi</p>
          <p>
            <input type="checkbox" /> Parfymeria{" "}
          </p>
          <p>
            <input type="checkbox" /> Makiyaj{" "}
          </p>
          <p>
            <input type="checkbox" /> Tana parvarishi{" "}
          </p>
          <p>
            <input type="checkbox" /> Osvejitel{" "}
          </p>{" "}
          <br />
          <p className="fw-bold">Brand</p>
          <p>
            <input type="checkbox" /> Gucci{" "}
          </p>{" "}
          <br />
        </div>

        <div className="col-lg-10 col-md-12">
          <div className="row">
            {products.map((item) => (
              <div className="col-lg-3 col-md-4 mt-5 py-3 col-sm-12">
                <i className="fa-regular fa-heart float-end"></i> <br />
                <img width={"90%"} src={item.img} alt="" />
                <div className="card-text mx-3">
                  <h5>{item.name}</h5>
                  <p>{item.brand}</p>
                  <h5 className="pb-2">{item.price}</h5>
                  <button className="w-100 infor">Batafsil</button>
                  <button className="w-100 mt-2 add-busket">
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
