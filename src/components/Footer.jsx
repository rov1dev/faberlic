import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row py-5">
          <div className="col-lg-3 col-md-6 col-6">
            <p className="fs-5 fw-bold ">Mahsulotlar</p>
            <div className="links">
              <p>Katalog</p>
              <p>Parfyumeriya</p>
              <p>Makiyaj</p>
              <p>Yuz parfarishi</p>
              <p>Osvejitel</p>
            </div>
            </div>
          <div className="col-lg-3 col-md-6 col-6">
            <p className="fs-5 fw-bold">Biz haqimizda</p>
            <div className="links">
              <p>Kompaniya haqida</p>
              <p>Manzil</p>
              <p>Savol va javoblar</p>
              <p>Aloqaga chiqish</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-6">
            <p className="fs-5 fw-bold">Foydali</p>
            <div className="links">
              <p>Aksiya va chegirmalar</p>
              <p>Rasmlar to'plami</p>
              <p>Dunyo brendlari</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-6">
            <p className="fs-3 d-flex align-items-center">
              <i class="fa-solid fa-phone fs-5 pe-2"></i>33 702 44 41
            </p>
            <p>Ish graffigi Call-center 10:00 - 22:00</p>
            <p>г. Ташкент, Мирзо-Улугбекский р-н, Массив Олой 5, 100000</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p>© 1990 – 2024 Begim Parfum gallery</p>
          <p>Политика конфиденциальности</p>
          <p>Политика возврата</p>
          <p>
            {" "}
            <i class="fs-3 fa-brands fa-instagram"></i>
            <i class=" fs-3 fa-brands fa-telegram mx-3"></i>
            <i class="fs-3 fa-brands fa-facebook"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
