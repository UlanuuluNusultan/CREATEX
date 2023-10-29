import styled from "styled-components";
import gta from "../../assets/img/hero7/gta.png";
import { Container } from "../../routes/MainRoutes";
const Hero7 = () => {
  return (
    <Hero7Style>
      <Container></Container>
    </Hero7Style>
  );
};

export default Hero7;

const Hero7Style = styled.div`
  background-image: url(${gta});
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 100px;
`;
