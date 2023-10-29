import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import hero1 from "../../assets/img/hero3/hero1.png";
import hero2 from "../../assets/img/hero3/hero2.png";
import hero3 from "../../assets/img/hero3/hero3.png";
import hero4 from "../../assets/img/hero3/hero4.png";

const Hero3 = () => {
  return (
    <div>
      <Container>
        <Flex>
          <Banner1></Banner1>
          <Banner2></Banner2>
          <Banner3></Banner3>
          <Banner4></Banner4>
        </Flex>
      </Container>
    </div>
  );
};

export default Hero3;

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 260px;
`
const Banner1 = styled.div`
  background-image: url(${hero1});
  background-size: cover;
  background-repeat: no-repeat;
  width: 514px;
  height: 400px;
  flex-shrink: 0;
  margin: 0 16px 16px 0;
`;
const Banner2 = styled.div`
  background-image: url(${hero2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 670px;
  height: 400px;
  flex-shrink: 0;
`;
const Banner3 = styled.div`
  background-image: url(${hero3});
  background-size: cover;
  background-repeat: no-repeat;
  width: 670px;
  height: 400px;
  flex-shrink: 0;
`;
const Banner4 = styled.div`
  background-image: url(${hero4});
  background-size: cover;
  background-repeat: no-repeat;
  width: 514px;
  height: 400px;
  flex-shrink: 0;
  margin: 0 0 180px 16px;
`;
