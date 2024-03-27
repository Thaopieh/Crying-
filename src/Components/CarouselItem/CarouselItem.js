import React from "react";
import "../../Pages/MainPage/MainPage.css";

function CarouselItem() {
  return (
    <div className="inner">
      <div className="topPick">
        <div id="carouselExampleControls1" className="carousel">
          <h2>Lựa chọn hàng đầu về khách sạn 5 sao sang trọng</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="../html/min_item.html" target="_blank"></a>
              <div className="card">
                <a href="../html/min_item.html" target="_blank">
                  <div className="img-wrapper">
                    <img
                      src="../img/TopPicks/Hotel_1.webp"
                      alt="Cozrum Homes - Sonata Residence"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <a href="../html/min_item.html" target="_blank"></a>
                  <a
                    className="click-item"
                    href="../html/min_item.html"
                    target="_blank"
                  >
                    <h5 className="card-title">
                      Cozrum Homes - Sonata Residence
                    </h5>
                  </a>
                  <p className="card-text">
                    Đường Nguyễn Thị Thập, Phường Tân Phú, Quận 7, TP.HCM | Cách
                    trung tâm thành phố 5.2 km
                  </p>
                  <a href="#" className="btn btn-primary">
                    <span className="from">From</span> VND 1,015,000
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <a href="#"></a>
              <div className="card">
                <a href="#">
                  <div className="img-wrapper">
                    <img
                      src="../img/TopPicks/Hotel_2.webp"
                      alt="Holiday Inn & Suites Saigon Airport"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <a href="#"></a>
                  <a className="click-item" href="#">
                    <h5 className="card-title">
                      Holiday Inn &amp; Suites Saigon Airport
                    </h5>
                  </a>
                  <p className="card-text">
                    Đường Cộng Hòa, Quận Tân Bình, TP.HCM | Cách trung tâm thành
                    phố 4.7 km
                  </p>
                  <a href="#" className="btn btn-primary">
                    <span className="from">From</span> VND 2,324,245
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <a href="#"></a>
              <div className="card">
                <a href="#">
                  <div className="img-wrapper">
                    <img
                      src="../img/TopPicks/Hotel_3.webp"
                      alt="LA VELA SAIGON HOTEL"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <a href="#"></a>
                  <a className="click-item" href="#">
                    <h5 className="card-title">LA VELA SAIGON HOTEL</h5>
                  </a>
                  <p className="card-text">
                    Đường Nam Kỳ Khởi Nghĩa, Quận 3, TP.HCM | Cách trung tâm
                    thành phố 1.8 km
                  </p>
                  <a href="#" className="btn btn-primary">
                    <span className="from">From</span> VND 3,438,555
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <a href="#"></a>
              <div className="card">
                <a href="#">
                  <div className="img-wrapper">
                    <img
                      src="../img/TopPicks/Hotel_4.webp"
                      alt="Wink Hotel Saigon Centre"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <a href="#"></a>
                  <a className="click-item" href="#">
                    <h5 className="card-title">Wink Hotel Saigon Centre</h5>
                  </a>
                  <p className="card-text">
                    Đường Nguyễn Bỉnh Khiêm, Quận 1, TP.HCM | Cách trung tâm
                    thành phố 1.3 km
                  </p>
                  <a href="#" className="btn btn-primary">
                    <span className="from">From</span> VND 1,234,568
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <a href="#"></a>
              <div className="card">
                <a href="#">
                  <div className="img-wrapper">
                    <img
                      src="../img/TopPicks/Hotel_5.webp"
                      alt="Oakwood Hotel & Apartments Saigon"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <a href="#"></a>
                  <a className="click-item" href="#">
                    <h5 className="card-title">
                      Oakwood Hotel &amp; Apartments Saigon
                    </h5>
                  </a>
                  <p className="card-text">
                    Đường Ung Văn Khiêm, Quận Bình Thạnh, TP.HCM | Cách trung
                    tâm thành phố 4.5 km
                  </p>
                  <a href="#" className="btn btn-primary">
                    <span className="from">From</span> VND 2,081,226
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <a href="#"></a>
              <div className="card">
                <a href="#">
                  <div className="img-wrapper">
                    <img
                      src="../img/TopPicks/Hotel_6.webp"
                      alt="M City Hotel Saigon"
                    />
                  </div>
                </a>
                <div className="card-body">
                  <a href="#"></a>
                  <a className="click-item" href="#">
                    <h5 className="card-title">M City Hotel Saigon</h5>
                  </a>
                  <p className="card-text">
                    {" "}
                    Đường Phạm Hồng Thái, Quận 1, TP.HCM | Cách trung tâm thành
                    phố 500 m
                  </p>
                  <a href="#" className="btn btn-primary">
                    <span className="from">From</span> VND 4,234,455
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls1"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls1"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
