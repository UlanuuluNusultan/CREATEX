import styled from "styled-components";
import last from "../../assets/img/hero11/last.png";
import { Container } from "../../routes/MainRoutes";
import { Title } from "../hero5/Hero5";
import { Flex } from "../hero8/Hero8";
import { useState } from "react";
const Hero11 = () => {
      const [activeButton, setActiveButton] = useState(null);

      const handleClick = (buttonId) => {
        setActiveButton(buttonId);
      };
  return (
    <>
      <Container>
        <Flex>
          <div>
            <Title>Subscribe for updates</Title>
            <Text>
              Subscribe for exclusive early sale access and new arrivals.
            </Text>
            <br />
            <Btn
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleClick(1)}
            >
              Women
            </Btn>
            <Btn
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleClick(2)}
            >
              Men
            </Btn>
            <Btn
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleClick(3)}
            >
              Girls
            </Btn>
            <Btn
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleClick(4)}
            >
              Boys
            </Btn>
            <br />
            <form action="">
              <Label htmlFor="">Email</Label>
              <br />
              <Input type="text" placeholder="Your working email" />
              <Submit type="submit" />
            </form>

            <FlexCheck>
              <input type="checkbox" />
              <p>I agree to receive communications from Createx Store.</p>
            </FlexCheck>
          </div>
          <Flex>
            <img src={last} alt="" />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Hero11;

const Text = styled.p`
  color: var(--gray-700, #787a80);
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
`;
const Btn = styled.button`
  padding: 5.5px 16px;
  border-radius: 4px;
  border: 1px solid var(--gray-400, #d7dadd);
  background-color: transparent;
  color: var(--gray-700, #787a80);
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  margin-bottom: 20px;
  &.active {
    background: var(--primary, #17696a);
    color: white;
    border: 1px solid var(--primary, #17696a);
  }
`;
const Label = styled.label`
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid var(--gray-400, #d7dadd);
  background: var(--white, #fff);
  padding: 13px 344px 13px 16px;
`;
const Submit = styled.input`
  padding: 10px 34px 13px 16px;
  border-radius: 4px;
  background: var(--primary, #17696a);
  color: var(--white, #fff);
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  outline: none;
  border: none;
`;
const FlexCheck = styled.div`
    display: flex;
    margin-top: 20px;
`