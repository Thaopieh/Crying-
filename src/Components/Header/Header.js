import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "../../Pages/MainPage/MainPage.css";

function Header(props) {
  return (
    <div>
      <header>
        <div className=" container-fluid navi">
          <div className="row">
            <div className="col-lg-2">
              <h1 style={{ color: "white" }}>
                <a href="../html/index.html" target="_blank">
                  LastingTrip
                </a>
              </h1>
            </div>
            <div className="col-lg-5">
              <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm justify-content-start">
                <div className="navbar1">
                  <ul className="navi navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="../html/item.html"
                        target="_blank"
                      >
                        Khách sạn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Xem gần đây
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Danh sách đặt phòng
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="../html/becomesupplier.html"
                        target="_blank"
                      >
                        Trở thành nhà cung cấp
                      </a>
                    </li>
                    <li className="nav-item" />
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-5">
              <nav className="navi2 navbar navbar-expand-lg navbar-expand-md navbar-expand-sm justify-content-end">
                <div className="navbar1">
                  <ul className="navi navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Hỗ trợ khách hàng
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Trợ giúp
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        VND
                      </a>
                    </li>
                    <li className="nav-item ">
                      <button
                        type="button"
                        className="header-search-booking-btn"
                      >
                        Search
                      </button>
                    </li>
                    <li className="nav-item ">
                      <button type="button" className="header-register-btn">
                        Sign in/ Sign up
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="toggle_btn">
                <i className="fa fa-bars" />
              </div>
            </div>
          </div>
          <div className="dropdown_menu">
            <li>
              <a className="nav-link" href="../html/item.html" target="_blank">
                Khách sạn
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Xem gần đây
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Danh sách đặt phòng
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="../html/becomesupplier.html"
                target="_blank"
              >
                Trở thành nhà cung cấp
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Hỗ trợ khách hàng
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Trợ giúp
              </a>
            </li>
            <li>
              <button type="button" className="header-register-btn">
                Sign in/ Sign up
              </button>
            </li>
          </div>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
