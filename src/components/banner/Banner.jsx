import styled from "styled-components";
import ban from "../../assets/img/banner/ban.png";
import { Container } from "../../routes/MainRoutes";

const Banner = () => {
  return (
    <BannerStyle>
      <Container>
        <h3>New collection</h3>
        <h1>Menswear 2020</h1>
        <button>Shop sale</button>
        <button>Shop the menswear</button>
        <div>
            <p>01</p>
            <p>02</p>
            <p>03</p>
            <p>04</p>
        </div>
      </Container>
    </BannerStyle>
  );
};

export default Banner;

const BannerStyle = styled.div`
  background-image: url(${ban});
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
`;
