import React, { useState } from "react";
import Info from "./Info";
import Info2 from "./Info2";
import Div from "./Div";
const Product = () => {
  const [first, setFirst] = useState({
    key1: true,
    key2: false,
    key3: false,
  });
  return (
    <div className="solo-card py-5">
        <div className="container">
          <i class="fa-solid fa-chevron-left"></i>
          <div className="row">
            <div className="col-lg-6 text-center">
              <img src="products.png" width={"50%"} alt="" />
              <div className="w-100 d-flex justify-content-evenly">
                <img width={"20%"} src="products.png" alt="" />
                <img width={"20%"} src="products.png" alt="" />
                <img width={"20%"} src="products.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="solo-card-txt">
                <h2>Gucci Guilty Pour Femme</h2>
                <p>Gucci</p>
                <p>ayol uchun</p>
                <p>Eau de Toilette</p>
                <p className=" fw-bold">1 485 000 so'm</p> <br />
                <p>Hajmi ml:</p>
                <div className="my-3">
                  <span className="gram-btn active">50</span>
                  <span className="gram-btn ms-2">90</span>
                </div>
                <p>Soni</p>
                <div className=" d-flex align-items-center mb-3">
                  <div className=" d-flex align-items-center">
                    <button className="count-btn">-</button>
                    <span className="mx-3 fs-4">1</span>
                    <button className="count-btn">+</button>
                  </div>
                  <p className="ms-5">
                    <i class="fa-solid fa-check me-2 ms-3"></i>
                    Mavjud
                  </p>
                </div>
                <button className="base-btn">Savatga Qo'yish</button>
              </div>
            </div>
          </div>
          <div>
            <div className="top border-bottom d-flex py-4">
              <p onClick={()=> setFirst({key1:!first.key1,key2:false,key3:false})} className=" fw-bold">Mahsulot Haqida</p>
              <p onClick={()=> setFirst({key1:false,key2:!first.key2,key3:false})}className="px-4 text-secondary">Xususiyatlari</p>
              <p onClick={()=> setFirst({key1:false,key2:false,key3:!first.key3})} className="text-secondary">Brend</p>
            </div>
            <div className="mt-4">
              {first.key1?<Div/>:first.key2? <Info />:<Info2 />}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Product;
