import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { IconData } from "../../utils/constans/constants";
import { Title } from "../hero5/Hero5";
import { Flex } from "../hero8/Hero8";
import card from "../../assets/img/hero9/card3.svg";
import { motion } from "framer-motion";

const Hero9Animation = {
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

const Hero9 = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Title custom={1} variants={Hero9Animation}>
          Fashion blog
        </Title>
        <Flex>
          {IconData.slice(7).map((item, index) => (
            <Card key={item.id} custom={index + 1} variants={Hero9Animation}>
              <img src={item.img} alt="" width={550} />
              <H4 custom={2} variants={Hero9Animation}>
                {item.title}
              </H4>
              <Mess>
                <P custom={2} variants={Hero9Animation}>
                  Fashion |
                </P>
                <P custom={ 3} variants={Hero9Animation}>August 24, 2020 |</P>
                <P custom={ 4} variants={Hero9Animation}>
                  <img src={card} />
                  No comments
                </P>
              </Mess>
              <DSCR custom={ 5} variants={Hero9Animation}>{item.dscr}</DSCR>
            </Card>
          ))}
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Hero9;

const Card = styled(motion.div)`
  width: 550px;
  height: 402px;
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 80px 80px -20px rgba(154, 156, 165, 0.08);
`;
const Mess = styled(motion.div)`
  display: flex;
`;
const P = styled(motion.p)`
  color: var(--gray-700, #787a80);
  align-items: center;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0 0 10px;
`;
const H4 = styled(motion.h4)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 20px;
  font-weight: 700;
  padding: 5px 0 0 10px;
`;
const DSCR = styled(motion.p)`
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  padding: 0 0 0 10px;
`;
