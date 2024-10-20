import React from "react";

const Busket = () => {
  return (
    <div className="container border-bottom pb-5">
      <div className="mb-5">
        <p>
          <i class="fa-solid fa-arrow-left me-3 fs-4"></i>
          <span className="fs-3">Shaxsiy ma'lumotlar</span>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p className=" fw-medium fs-5">Sizning korzinkangiz bush</p>
          <p>Tabingizga mos keladigon mahsulotni katalogdan tanlang</p>
        </div>
        <div className="col-lg-6">
          <div className="d-flex pb-4 w-75 justify-content-between flex-wrap border-bottom">
            <p className=" w-50 fw-bold">{"Mahsulot(0)"}</p>
            <p className=" w-50 text-end">0 sum</p>
            <p className=" w-50">Chegirma</p>
            <p className=" w-50 text-end">-0 sum</p>
          </div>
          <div className="d-flex mt-4 w-75 justify-content-between flex-wrap">
          <p className=" w-50 fw-bold fs-5">Jami</p>
          <p className=" w-50 fw-bold text-end">0 sum</p>
          </div>
          <button  className="base-btn float-start w-75 mt-3 ">Buyurtmani tasdiqlash</button>
        </div>
      </div>
    </div>
  );
};

export default Busket;
