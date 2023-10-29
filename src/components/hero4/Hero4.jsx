import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { Hero4Data } from "../../utils/constans/constants";
import { Title } from "../hero2/Arrivals";


const Hero4 = () => {
  return (
    <div>
      <Container>
        <Title>Popular categories</Title>
        <Flex>
          {Hero4Data.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Hero4;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 300px;
`
