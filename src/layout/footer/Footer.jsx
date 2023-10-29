import styled from "styled-components";
import {Container} from "../../routes/MainRoutes.jsx";
import appStore from "../../../src/assets/img/footer/app-store.png"
import googlePlay from "../../../src/assets/img/footer/google-play.png"
const Footer = () => {
  return (
    <Footers>
      <Container>
        <div className="footer">
          <div className="footer-text">
            <h1>HELP</h1>
            <p>Delivery & returns</p>
            <p>FAQ</p>
            <p>Track order</p>
            <p>Contacts</p>
            <p>Blog</p>
          </div>

          <div className="footer-text">
            <h1>Shop</h1>
            <p>New arrivals</p>
            <p>Trending now</p>
            <p>Sales</p>
            <p>Brands</p>
          </div>

          <div className="footer-text">
            <h1>Get in touch</h1>
            <p><span style={{ fontWeight: '700', opacity: 1 }}>Get in touch</span>(405) 555-0128</p>
            <p><span style={{ fontWeight: '700', opacity: 1 }}>Email:</span>hello@createx.com</p>
            <div className="footer-icon">
              <a href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicnUifQ%3D%3D%22%7D"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="https://www.youtube.com/"><ion-icon name="logo-youtube"></ion-icon></a>
            </div>
          </div>

          <div className="footer-text">
            <h1>Download our app</h1>
            <a href="https://www.apple.com/app-store/"><img src={appStore} /></a>
            <a href="https://www.apple.com/app-store/"><img src={googlePlay} /></a>
          </div>
        </div>

      </Container>
      <hr className="footer-hr"/>

      <Container>
        <div className="footer2">
          <p>© All rights reserved. Made with by Createx Studio </p>
          <p>Go to top</p>
        </div>
      </Container>
    </Footers>
  )
}

export default Footer

const Footers = styled.div`

  background: var(--gray-900, #1E212C);
  height: 358px;
  width: 100%;
  margin-top: 70px;
  
  
  .footer {
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
  }
  
  .footer-text h1 {
    color: var(--white, #FFF);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:hover {
      color: gray;
    }
  }
  
  .footer-text p {
    color: var(--white, #FFF);
    font-size: 16px;
    font-weight: 400;
    padding-top: 10px;
    opacity: 0.6;
    &:hover {
      color: greenyellow;
    }
  }
  
  .footer-text img {
    padding: 20px 10px;
  }
  
  .footer-icon {
    font-size: 19px;
    padding: 20px 0;
    display: flex;
    gap: 10px;
  }
  
  .footer-icon ion-icon {
    color: red;
  }
  
  .footer-icon ion-icon:hover {
      transform: scale(1.2);
      color: greenyellow;
  }
  
  .footer-hr {
    width: 100%;
    height: 1px;
    opacity: 0.15;
    background: #FFF;
    margin-top: 40px;
  }
  
  .footer2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .footer2 p {
    color: var(--white, #FFF);
    font-size: 16px;
    font-weight: 700;
    opacity: 0.6;
  }
`