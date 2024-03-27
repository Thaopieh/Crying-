import React from "react";
import "../../Pages/MainPage/MainPage.css";

function InfoHotel() {
  return (
    <div className="inner">
      <div className="info-hotel">
        <div className="seo-htl-table-info pc ">
          <h2 className="title">Thông tin khách sạn</h2>
          <table>
            <tbody>
              <tr>
                <th>Số lượng khách sạn</th>
                <td>
                  <span>1,121</span>
                </td>
              </tr>
              <tr>
                <th>Số lượng đánh giá</th>
                <td>
                  <span>123,456</span>
                </td>
              </tr>
              <tr>
                <th>Mức giá thấp nhất</th>
                <td>
                  <span>VND 111,000</span>
                </td>
              </tr>
              <tr>
                <th>Mức giá cao nhất</th>
                <td>
                  <span>VND 17,102,173</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hotel-guide  ">
          <h2 className="title">Khách sạn trên LastingTrip.com </h2>
          <section id="guide_nav_v8">
            <div className="hotel-guide-detail">
              <div className="content-title">
                Khách sạn phù hợp với tất cả mọi người
              </div>
              <div className="content-content">
                Chúng ta đều biết, khách sạn có thể quyết định một kỳ nghỉ. Đó
                là lý do tại sao, tại LastingTrip.com, bạn có thể tìm thấy các
                khách sạn phù hợp với nhu cầu của mình. Với sự lựa chọn của hơn
                1.000 khách sạn, cho dù bạn đang bay hay ở gần nhà hơn, việc tìm
                chỗ ở chưa bao giờ dễ dàng hơn thế. Từ khách sạn đến nhà nghỉ,
                homestay, luôn luôn có chỗ ở cho tất cả mọi người tại
                LastingTrip.com. Cho dù bạn đang tìm kiếm ở chi phí thấp, sang
                trọng hay thứ gì đó ở giữa, bạn có thể tìm thấy mọi thứ từ kỳ
                nghỉ 5 sao xứng đáng với tuần trăng mật đến các nhà nghỉ thân
                thiện với du khách bình dân. Chỉ cần lọc, tìm kiếm và sẵn sàng
                đặt chỗ. thôi nào.
              </div>
              <div className="content-title">Đảm bảo mức giá tốt nhất</div>
              <div className="content-content">
                Không cần phải tìm kiếm trên một số trang web khác để tìm giá
                tốt nhất, với LastingTrip.com, bạn có thể chắc chắn rằng bạn
                đang nhận deal tốt nhất có thể. Nếu cuối cùng bạn tìm thấy một
                lựa chọn rẻ hơn ở nơi khác, chúng tôi thậm chí sẽ hoàn lại khoản
                chênh lệch. Tham gia chương trình khách hàng thân thiết
                LastingTrip.com cũng là một cách tuyệt vời để tiết kiệm tiền.
                Ngoài việc mở khóa giảm giá độc quyền chỉ dành cho thành viên,
                bạn có thể kiếm được xu chuyến đi mỗi khi đặt chỗ, có thể được
                sử dụng ngay lập tức để tiết kiệm tiền cho chuyến đi tiếp theo
                của bạn. Thêm vào đó, tư cách thành viên là miễn phí và kéo dài
                suốt đời. Nếu bạn cần bất kỳ trợ giúp nào trên đường đi, bộ phận
                hỗ trợ khách hàng 24/7 từng đoạt giải thưởng của chúng tôi sẽ
                cung cấp tất cả các hỗ trợ bạn cần.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InfoHotel;
