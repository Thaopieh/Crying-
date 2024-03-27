import React from "react";
import "../../Pages/MainPage/MainPage.css";

function RecommendHomePage() {
  return (
    <div className="inner">
      <div className="recommended">
        <div className="thetitle">
          <h2>Gợi ý</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="inforall">
                {/* Set initial button styles for the first button */}
                <button
                  className="btn btn-outline-info"
                  type="button"
                  onclick="toggleCollapse(1)"
                  style={{
                    border: "none",
                    color: "#fff",
                    backgroundColor: "#10294D",
                  }}
                >
                  Thành phố nổi tiếng
                </button>
                {/* Other buttons */}
                <button
                  style={{ border: "none" }}
                  className="btn btn-outline-info"
                  type="button"
                  onclick="toggleCollapse(2)"
                >
                  Khách sạn phổ biến
                </button>
                <button
                  style={{ border: "none" }}
                  className="btn btn-outline-info"
                  type="button"
                  onclick="toggleCollapse(3)"
                >
                  Khám phá nhiều hơn
                </button>
              </div>
              {/* Collapsible content */}
              <div className="collapse show" id="noi-dung-collapse1">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <a href="#">Khách sạn ở Thành phố Hồ Chí Minh</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn ở Đà Nẵng</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn ở Hà Nội</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn ở Phú Quốc</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Khách sạn ở Bà Rịa - Vũng Tàu</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn ở Hội An</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn ở Ninh Bình</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn ở Nha Trang</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">HANZ Lagoon Sunset Boutique Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Hong Bin Bungalow</a>
                    </div>
                    <div className="col">
                      <a href="#">Hampton by Hilton Gullin Lingui</a>
                    </div>
                    <div className="col">
                      <a href="#">Yutianlou Ou Yue International</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Khách sạn có quầy bar</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn gần biển</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn có suối nước nóng</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn 5 sao</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Palm Bay Resort</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn gần sân bay</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn gần trung tâm</a>
                    </div>
                    <div className="col">
                      <a href="#">Resort</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse" id="noi-dung-collapse2">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <a href="#">Rex Hotel Saigon</a>
                    </div>
                    <div className="col">
                      <a href="#">Caravelle Saigon Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Tan Son Nhat Saigon Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">8h-hostel</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">New World Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Bin BIn Mimosa Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Old Quarter Hotel 1961</a>
                    </div>
                    <div className="col">
                      <a href="#">Holiday Lakeview Hotel</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Thang Long Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">ConMeoNho Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Grand Cititel Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Adaline Hotel</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Hanami Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Dana Marina Boutique Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">New Orient Da Nang Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Lavender Riverside Hotel</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Luxury The Song Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Cen Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">BOBO Boutique Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Malibu Hotel</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Annata Beach Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Hai Duong Vung Tau Hotel</a>
                    </div>
                    <div className="col">
                      <a href="#">Bali Motel</a>
                    </div>
                    <div className="col">
                      <a href="#">V Boutique Hotel</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse" id="noi-dung-collapse3">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <a href="#">Mã khuyến mãi của LastingTrip.com</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn giá rẻ đêm nay</a>
                    </div>
                    <div className="col">
                      <a href="#">Cách để đặt giá rẻ</a>
                    </div>
                    <div className="col">
                      <a href="#">Du lịch Hà Nội</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Gần biển</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn gần trung tâm</a>
                    </div>
                    <div className="col">
                      <a href="#">Romantic Getaways in Florida</a>
                    </div>
                    <div className="col">
                      <a href="#">Kì nghỉ Hội An</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Khách sạn cho thú cưng</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn sang trọng ở Hà Nội</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn gần biển</a>
                    </div>
                    <div className="col">
                      <a href="#">Khách sạn sang trọng ở Đà Nẵng</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="#">Căn hội</a>
                    </div>
                    <div className="col">
                      <a href="#">Nhà nghỉ</a>
                    </div>
                    <div className="col">
                      <a href="#">Homestay</a>
                    </div>
                    <div className="col">
                      <a href="#">Villas</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendHomePage;
