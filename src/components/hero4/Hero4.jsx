import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { Hero4Data } from "../../utils/constans/constants";
import { Title } from "../hero2/Arrivals";
import { motion } from "framer-motion";

const Hero4Animation = {
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
const Hero4 = () => {
  return (
    <div>
      <Container>
        <Title custom={1} variants={Hero4Animation}>
          Popular categories
        </Title>
        <Flex
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          {Hero4Data.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index + 1}
              variants={Hero4Animation}
            >
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </motion.div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Hero4;

export const Flex = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 300px;
`;

