import React from "react";
import "../../Pages/MainPage/MainPage.css";

function FAQ() {
  return (
    <div className="inner">
      <div className="faq-hotel">
        <div className="faq-title">
          <h2 className="title">FAQ</h2>
        </div>
        <div className="faq-content">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {/* Accordion Item #1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                  style={{ backgroundColor: "white" }}
                >
                  Làm cách nào để tôi có thể đặt phòng trên LastingTrip.com?{" "}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  Để đặt phòng khách sạn trên LastingTrip.com, bạn chỉ cần nhập
                  điểm đến, ngày đi, ngày về và số lượng khách. Sau đó, dạo xem
                  các khách sạn có sẵn và chọn khách sạn bạn muốn đặt. Thực hiện
                  từng bướcnhập thông tin thanh toán của bạn và hoàn tất việc
                  đặt phòng.
                </div>
              </div>
            </div>
            {/* Accordion Item #2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                  style={{ backgroundColor: "white" }}
                >
                  Làm thế nào để có được khách sạn giá rẻ trên LastingTrip.com?{" "}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Có nhiều cách để tìm được các khách sạn giá cả phải chăng trên
                  LastingTrip.com. Bạn có thể thu hẹp phạm vi tìm kiếm của mình
                  bằng cách lọc khách sạn theo mức giá phù hợp, hoặc bạn có thể
                  sắp xếp kết quả theo giá để xem các tùy chọn ít giá rẻ trước
                  tiên.
                </div>
              </div>
            </div>
            {/* Accordion Item #3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                  style={{ backgroundColor: "white" }}
                >
                  Tôi có thể tìm những ưu đãi khách sạn ở đâu trên
                  LastingTrip.com?{" "}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  LastingTrip.com cung cấp nhiều ưu đãi và khuyến mãi khách sạn
                  có sẵn trong suốt cả năm. Bạn có thể dễ dàng tìm thấy những ưu
                  đãi đặc biệt này trên trang ưu đãi của chúng tôi. Hơn nữa, nếu
                  bạn là thành viên của chương trình khách hàng thân thiết của
                  chúng tôi, bạn có thể đăng nhập vào tài khoản của mình và khám
                  phá mức giá chiết khấu độc quyền tại các trang danh sách khách
                  sạn.
                </div>
              </div>
            </div>
            {/* Accordion Item #4 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                  style={{ backgroundColor: "white" }}
                >
                  Cách để có được giá thấp hơn khi đặt phòng là gì?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Đôi khi đặt phòng khách sạn vào giữa tuần rẻ hơn, nhưng nó
                  cũng phụ thuộc vào mùa.{" "}
                </div>
              </div>
            </div>
            {/* Accordion Item #5 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                  style={{ backgroundColor: "white" }}
                >
                  Có bao nhiêu khách sạn trên LastingTrip.com vậy?{" "}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  There are over 5,000,000 Khách sạn ở more than 230 countries
                  or regions on Trip.com. Don't know which hotel to book? Browse
                  the site to get ideas! Có hơn 1000 khách sạn trên
                  LastingTrip.com. Bạn không biết nên đặt khách sạn nào? Hãy dạo
                  xem một vòng nhé!
                </div>
              </div>
            </div>
            {/* Accordion Item #6 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSix"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSix"
                  style={{ backgroundColor: "white" }}
                >
                  Tôi có thể hủy hoặc thay đổi phòng trên LastingTrip.com không?{" "}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSix"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Điều này phụ thuộc vào chính sách khách sạn và thời gian hủy.
                  Bạn hãy kiểm tra phần chính sách của khách sạn liên quan. Để
                  hủy hoặc thay đổi đặt phòng của bạn, hãy đăng nhập vào tài
                  khoản LastingTrip.com của bạn, đi tới "Đặt chỗ của tôi" và làm
                  theo hướng dẫn.
                </div>
              </div>
            </div>
            {/* Accordion Item #7 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSeven"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSeven"
                  style={{ backgroundColor: "white" }}
                >
                  Làm sao để liên hệ với dịch vụ chăm sóc khách hàng của
                  LastingTrip.com?{" "}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSeven"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Bạn có thể liên hệ với chúng tôi 24/7 bằng cách truy cập trung
                  tâm trợ giúp LastingTrip.com và gửi yêu cầu hỗ trợ. Bạn cũng
                  có thể liên hệ qua điện thoại hoặc trò chuyện, tùy thuộc vào
                  vị trí của bạn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
