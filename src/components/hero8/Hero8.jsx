import styled from "styled-components";
import { Container } from "../../routes/MainRoutes"
import { IconData } from "../../utils/constans/constants"
import { Btn, Title } from "../hero5/Hero5";

const Hero8 = () => {
  return (
    <div>
      <Container>
        <Flex>
          {IconData.slice(0,4).map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </Flex>
        <Flex>
          <div>
            <h6>Follow us on Instagram</h6>
            <Title>@createx_store</Title>
            <Btn>Follow instagram</Btn>
          </div>
          <Flex>
            {IconData.slice(4,7).map((item)=>(
                <Block key={item.id}>
                    <img src={item.img} alt="" />
                </Block>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default Hero8
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0 20px;
`
const Block = styled.div`
    margin-right: 20px;
`
