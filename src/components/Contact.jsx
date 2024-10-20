import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div className="contact ">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 cont">
            <h5>Mahsulotlar</h5>
            <a href="">Katalog</a>
            <a href="">Parfyun</a>
            <a href="">Pardoz</a>
            <a href="">Teri parvarishi</a>
            <a href="">Sertifikat</a>
            <a href="">Uy uchun</a>
          </div>
          <div className="col-lg-2 cont">
            <h5>Biz haqimizda</h5>
            <a href="">Kompaniya haqida</a>
            <a href="">Do'kon manzillar</a>
            <a href="">Savol va javoblar</a>
            <a href="">Qayta aloqa</a>
          </div>
          <div className="col-lg-3 cont">
            <h5>Foydali</h5>
            <a href="">Aksiya va chegirmalar</a>
            <a href="">Maqolalar galereyasi</a>
            <a href="">Dunyo Brendlari</a>
          </div>

          <div className="col-lg-5 cont">
            <h5>
              {" "}
              <i class="fa-solid fa-phone"></i> 90 000 12 34
            </h5>
            <p>call markazini ish vaqti 10:00 - 12:00</p>
            <p className="text-dark">
              Toshkent sh., Mirzo-Ulug'bek tumani, Oloy massiv 5, 100000
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-between mt-5">
          <p>© 1990 – 2024 Begim Parfum gallery</p>
          <p>Maxfiylik siyosati</p>
          <p>Qaytarish siyosati</p>
          <p className="brands-dir">
            <i className="fa-brands fa-instagram "></i>
            <i className="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-facebook"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
