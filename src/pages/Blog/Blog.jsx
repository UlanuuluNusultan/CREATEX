import React, { useState } from "react";
import { FAQ } from "../../utils/constans/constants";
import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const onTitleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderedItems = FAQ.map((item, index) => {
    const active = index === openIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <Title className={active} onClick={() => onTitleClick(index)}>
          {item.title}
        </Title>
        <Content className={active}>{item.content}</Content>
      </React.Fragment>
    );
  });

  return (
    <Container>
      <AccordionWrapper>{renderedItems}</AccordionWrapper>
    </Container>
  );
}

export default Accordion;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  width: 810px;
  height: 658px;
`;

const Title = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #f1f1f1;
  margin: 5px 0;

  &.active {
    background-color: #ccc;
  }
`;

const Content = styled.div`
  display: none;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;

  &.active {
    display: block;
  }
`;
