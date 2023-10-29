import { Container } from "../../routes/MainRoutes";
import { LogoData } from "../../utils/constans/constants";
import { Flex } from "../hero8/Hero8";

const Hero10 = () => {
  return (
    <div>
      <Container>
        <Flex>
          {LogoData.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Hero10;
