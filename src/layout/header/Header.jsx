import styled from "styled-components";
import flag from "../../assets/img/header/flag-usa.png"
import {Container} from "../../routes/MainRoutes.jsx";
import {Link, useLocation} from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../../src/assets/img/header/logo.png"
import {useState} from "react";
import Modal from "./Modal.jsx";
import { INITIAL_PATH } from "../../utils/constans/constants";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const cloceModal = () => {
        setModalOpen(false)
    }

    const location = useLocation()
    const { t, i18n } = useTranslation();

    return (
      <Headers>
        <div className="header-bag">
          <Container>
            <div className="header-box">
              <div className="header-text">
                <h3>Available 24/7 at (405) 555-0128</h3>
              </div>

              <div className="header-list">
                <Link
                  className={`header ${
                    location.pathname === "/" ? "red-bg" : ""
                  }`}
                  to="/"
                >
                  <a href="">{t("Delivery & returns")}</a>
                </Link>
                <Link
                  className={`header ${
                    location.pathname === "/track" ? "red-bg" : ""
                  }`}
                  to="/track"
                >
                  <a href="">{t("Track order")}</a>
                </Link>
                <Link
                  className={`header ${
                    location.pathname === "/blog" ? "red-bg" : ""
                  }`}
                  to="/blog"
                >
                  <a href="">{t("FAQ")}</a>
                </Link>
                <Link
                  className={`header ${
                    location.pathname === "/contacts" ? "red-bg" : ""
                  }`}
                  to="/contact"
                >
                  <a href="">{t("Contacts")}</a>
                </Link>
              </div>

              <div className="header-translate">
                <img src={flag} alt="flag-img" />
                <select
                  className="header-select"
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                  <option value="en">Rus</option>
                  <option value="ru">Eng</option>
                </select>
              </div>

              <div className="header-register">
                <ion-icon name="person-outline"></ion-icon>
                <span onClick={() => setModalOpen(true)}>
                  Log in / Register
                </span>

                {isModalOpen && <Modal closeModal={cloceModal} />}
              </div>
            </div>
          </Container>
        </div>

        <div className="header-bag2">
          <Container>
            <div className="header-box">
              <div>
                <Link to={INITIAL_PATH.main_page}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>

              <div className="header-list2">
                <Link
                  className={`header ${
                    location.pathname === "/women" ? "red-bg2" : ""
                  }`}
                  to="/women"
                >
                  <a href="">Women</a>
                </Link>
                <Link
                  className={`header ${
                    location.pathname === "/men" ? "red-bg2" : ""
                  }`}
                  to="/men"
                >
                  <a href="">Men</a>
                </Link>
                <Link
                  className={`header ${
                    location.pathname === "/girls" ? "red-bg2" : ""
                  }`}
                  to="/girls"
                >
                  <a href="">Girls</a>
                </Link>
                <Link
                  className={`header ${
                    location.pathname === "/boys" ? "red-bg2" : ""
                  }`}
                  to="/boys"
                >
                  <a href="">Boys</a>
                </Link>
                <Link
                  className={`header ${
                    location.pathname === "/sale" ? "red-bg2" : ""
                  }`}
                  to="/sale"
                >
                  <a href="">Sale</a>
                </Link>
              </div>
              <SearchContainer className="header-search">
                <input type="search" placeholder="Search for products..." />
                <ion-icon name="search-outline"></ion-icon>
              </SearchContainer>

              <div className="header-icons">
                <span>
                  <ion-icon name="heart-outline"></ion-icon>
                </span>
                <span>
                  <ion-icon name="bag-remove-outline"></ion-icon>
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div className="header-bag3">
          <Container>
            <p>
              Up to 70% Off.
              <span>Shop our latest sale styles</span>
            </p>
          </Container>
        </div>
      </Headers>
    );
}

export default Header

const Headers = styled.div`

  .header-bag {
    background: var(--gray-900, #1E212C);
    width: 100%;
    height: 44px;
    padding: 15px 0;
  }

  .header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-text h3 {
    color: var(--white, #FFF);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  .header-list a {
    color: var(--white, #FFF);
    font-size: 14px;
    font-weight: 400;
    padding: 0 16px;
    text-decoration: none;

    &:hover {
      color: gold;
    }

    &:active {
      color: var(--white, rgba(199, 31, 31, 0.8));
    }
  }

  .red-bg {
    background: blue;
    border-radius: 10px;
    color: white;
  }

  .red-bg2 {
    background: red;
    border-radius: 10px;
    color: white;
  }

  .header-translate select {
    color: var(--white, #FFF);
    font-size: 14px;
    font-weight: 400;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    & option {
      color: #9a1616;
      font-size: 16px;
      font-weight: 600;
      background: none;
      cursor: pointer;
    }
  }

  .header-register ion-icon {
    color: white;
    font-size: 14px;
    font-weight: 400;
  }

  .header-register span {
    color: white;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    padding-left: 8px;
  }
  
  .header-bag2 {
    width: 100%;
    margin: 31px 0;
  }

  .header-list2 a {
    color: var(--gray-800, #424551);    
    font-size: 14px;
    font-weight: 700;
    padding: 0 10px;
    text-decoration: none;

    &:hover {
      color: gold;
    }

    &:active {
      color: var(--white, rgba(199, 31, 31, 0.8));
    }
  }
  
  .header-icons span {
    font-size: 20px;
    padding-left: 18px;
    cursor: pointer;
  }
  
  .header-bag3 {
    background: var(--primary, #17696A);
    padding: 8px 0;
    text-align: center;
  }
  
  .header-bag3 p {
    color: var(--white, #FFF);
    font-size: 19px;
    font-weight: 400;
  }

  .header-bag3 span {
    text-decoration-line: underline;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px; 
  border: 1px solid #ccc;
  border-radius: 5px;

  ion-icon {
    margin: 0 10px;
    color: gray; 
  }

  input[type="search"] {
    border: none; 
    width: 100%; 
    padding: 10px; 
    outline: none;
  }
`