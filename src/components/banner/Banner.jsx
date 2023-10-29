import styled from "styled-components";
import ban from "../../assets/img/banner/ban.png";
import ban1 from "../../assets/img/banner/ban1.png";
import ban2 from "../../assets/img/banner/ban2.png";
import ban3 from "../../assets/img/banner/ban3.png";
import { Container } from "../../routes/MainRoutes";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Banner = () => {
  return (
    <BannerStyle
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      custom={1}
      variants={textAnimation}
    >
      <Container>
        <New custom={2} variants={textAnimation}>
          New collection
        </New>
        <Title custom={3} variants={textAnimation}>
          Menswear 2020
        </Title>
        <Btn custom={4} variants={textAnimation}>
          Shop sale
        </Btn>
        <Btn2 custom={5} variants={textAnimation}>
          Shop the menswear
        </Btn2>
        <Flex>
          <Line custom={6} variants={textAnimation}>
            01
          </Line>
          <Line custom={7} variants={textAnimation}>
            02
          </Line>
          <Line custom={8} variants={textAnimation}>
            03
          </Line>
          <Line custom={9} variants={textAnimation}>
            04
          </Line>
        </Flex>
        <IMG custom={10} variants={textAnimation}>
          <img src={ban1} alt="" />
          <img src={ban2} alt="" />
          <img src={ban3} alt="" />
        </IMG>
      </Container>
    </BannerStyle>
  );
};

export default Banner;

const BannerStyle = styled(motion.div)`
  background-image: url(${ban});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
`;
export const Title = styled (motion.h1)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 72px;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 12px 0 60px;
`;
export const New = styled(motion.h3)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-top: 140px;
`;
export const Btn = styled(motion.button)`
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
const Btn2 = styled(motion.button)`
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
const Line = styled(motion.h3)`
  margin-left: 20px;
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 28px;
  font-weight: 700;
  border-bottom: 4px solid #424551;
  width: 178px;
`;
const IMG = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding-top: 130px;
`;
