import React from "react";
import "./style.css";
import foto1 from "../../images/fotos/foto1.jpg";
import foto2 from "../../images/fotos/foto2.jpg";
import foto3 from "../../images/fotos/foto3.jpg";
import foto4 from "../../images/fotos/foto4.jpg";
import foto5 from "../../images/fotos/foto5.jpg";
import foto6 from "../../images/fotos/foto6.jpg";

const Fotos = () => {
  return (
    <div className="container mt-5 flyinleft">
      <h1 className="text-center mb-5">Galerij</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href={foto1}
            data-mdb-toggle="lightbox"
            data-mdb-target="#lightbox"
          >
            <img
              src={foto1}
              alt="Table Full of Spices"
              className="img-fluid rounded shadow-1-strong"
            />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href={foto2}
            data-mdb-toggle="lightbox"
            data-mdb-target="#lightbox"
          >
            <img
              src={foto2}
              alt="Coconut with Strawberries"
              className="img-fluid rounded shadow-1-strong"
            />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href={foto5}
            data-mdb-toggle="lightbox"
            data-mdb-target="#lightbox"
          >
            <img
              src={foto5}
              alt="Dark Roast Iced Coffee"
              className="img-fluid rounded shadow-1-strong"
            />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href={foto4}
            data-mdb-toggle="lightbox"
            data-mdb-target="#lightbox"
          >
            <img
              src={foto4}
              alt="Dark Roast Iced Coffee"
              className="img-fluid rounded shadow-1-strong"
            />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href={foto3}
            data-mdb-toggle="lightbox"
            data-mdb-target="#lightbox"
          >
            <img
              src={foto3}
              alt="Dark Roast Iced Coffee"
              className="img-fluid rounded shadow-1-strong"
            />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href={foto6}
            data-mdb-toggle="lightbox"
            data-mdb-target="#lightbox"
          >
            <img
              src={foto6}
              alt="Dark Roast Iced Coffee"
              className="img-fluid rounded shadow-1-strong"
            />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <div
        id="lightbox"
        className="modal fade"
        tabIndex="-1"
        aria-labelledby="lightboxLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <img
                src=""
                className="img-fluid rounded shadow-1-strong"
                alt=""
                id="lightboxImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotos;
