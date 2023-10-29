import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { IconData } from "../../utils/constans/constants";
import { Btn, Title } from "../hero5/Hero5";
import { motion } from "framer-motion";

const Hero8Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Hero8 = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Flex>
          {IconData.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              custom={index + 1}
              variants={Hero8Animation}
            >
              <img src={item.img} alt="" />
            </motion.div>
          ))}
        </Flex>
        <Flex>
          <div>
            <motion.h6 custom={1} variants={Hero8Animation}>
              Follow us on Instagram
            </motion.h6>
            <Title custom={2} variants={Hero8Animation}>
              @createx_store
            </Title>
            <Btn custom={3} variants={Hero8Animation}>
              Follow instagram
            </Btn>
          </div>
          <Flex>
            {IconData.slice(4, 7).map((item, index) => (
              <Block key={item.id} custom={index + 1} variants={Hero8Animation}>
                <img src={item.img} alt="" />
              </Block>
            ))}
          </Flex>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Hero8;
export const Flex = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 20px;
`;
const Block = styled(motion.div)`
  margin-right: 20px;
`;
