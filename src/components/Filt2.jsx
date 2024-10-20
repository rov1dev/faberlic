import React from "react";

const Filt2 = () => {
  return (
      <div className=" position-absolute bg-white shadow p-3 rounded mt-2 w-100 z-3 shadow-lg">
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
  );
};

export default Filt2;
