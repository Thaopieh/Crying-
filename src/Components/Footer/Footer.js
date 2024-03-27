import React from "react";
import "../../Pages/MainPage/MainPage.css";
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer__main">
          <div className="footer__item">
            <h3>Liên hệ</h3>
            <a href className="footer_links">
              Chăm sóc khách hàng
            </a>
            <br />
            <a href className="footer_links">
              Đảm bảo dịch vụ
            </a>
            <br />
            <a href className="footer_links">
              Thêm thông tin về dịch vụ
            </a>
            <br />
            <a href className="footer_links">
              Website Feedback
            </a>
            <br />
          </div>
          <div className="footer__item">
            <h3>Về chúng tôi</h3>
            <a href className="footer_links">
              Giới thiệu về LastingTrip.com
            </a>
            <br />
            <a href className="footer_links">
              Tin tức
            </a>
            <br />
            <a href className="footer_links">
              Tuyển dụng
            </a>
            <br />
            <a href className="footer_links">
              Điều khoản &amp; Điều kiện
            </a>
            <br />
            <a href className="footer_links">
              Chính sách quyền riêng
            </a>
            <br />
          </div>
          <div className="footer__item">
            <h3>Dịch vụ khác</h3>
            <a href className="footer_links">
              Nhà đầu tư
            </a>
            <br />
            <a href className="footer_links">
              Phần thưởng Lasting.com
            </a>
            <br />
            <a href className="footer_links">
              Chương trình liên kết
            </a>
            <br />
            <a href className="footer_links">
              Liệt kê tài sản của tôi
            </a>
            <br />
            <a href className="footer_links">
              Tất cả khách sạn
            </a>
            <br />
            <a
              href="../html/becomesupplier.html"
              target="_blank"
              className="footer_links"
            >
              Trở thành nhà cung cấp
            </a>
            <br />
            <a href className="footer_links">
              An ninh
            </a>
          </div>
          <div className="footer__item tt">
            <h3>Thanh toán</h3>
            <a href className="footer_links">
              <img src="../img/PaymentMethod/visa.webp" alt />
            </a>
            <a href className="footer_links">
              <img src="../img/PaymentMethod/momo.png" alt />
            </a>
            <a href className="footer_links">
              <img src="../img/PaymentMethod/zlpay.png" alt />
            </a>
          </div>
        </div>
        <div className="Copyright">
          <p>
            Copyright © 2024 LastingTrip.com. Nhóm 11 - NT208. All rights
            reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
