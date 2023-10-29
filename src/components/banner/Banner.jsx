import styled from "styled-components";
import ban from "../../assets/img/banner/ban.png";
import ban1 from "../../assets/img/banner/ban1.png";
import ban2 from "../../assets/img/banner/ban2.png";
import ban3 from "../../assets/img/banner/ban3.png";
import { Container } from "../../routes/MainRoutes";

const Banner = () => {
  return (
    <BannerStyle>
      <Container>
        <New>New collection</New>
        <Title>Menswear 2020</Title>
        <Btn>Shop sale</Btn>
        <Btn2>Shop the menswear</Btn2>
        <Flex>
          <Line>01</Line>
          <Line>02</Line>
          <Line>03</Line>
          <Line>04</Line>
        </Flex>
        <IMG>
          <img src={ban1} alt="" />
          <img src={ban2} alt="" />
          <img src={ban3} alt="" />
        </IMG>
      </Container>
    </BannerStyle>
  );
};

export default Banner;

const BannerStyle = styled.div`
  background-image: url(${ban});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
`;
export const Title = styled.h1`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 72px;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 12px 0 60px;
`;
export const New = styled.h3`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-top: 140px;
`;
export const Btn = styled.button`
  border-radius: 4px;
  border: 1px solid var(--primary, #17696a);
  background: transparent;
  color: var(--primary, #17696a);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  width: 130px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 325% */
`;
const Btn2 = styled.button`
  margin-left: 64px;
  width: 250px;
  border-radius: 4px;
  border: none;
  background: var(--primary, #17696a);
  color: var(--white, #fff);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px; /* 325% */
  letter-spacing: 0.5px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 824px;
  margin-top: 180px;
`;
const Line = styled.h3`
  margin-left: 20px;
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 28px;
  font-weight: 700;
  border-bottom: 4px solid #424551;
  width: 178px;
`;
const IMG = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 130px;
`;
