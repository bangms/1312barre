// Accordion.js
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Accordion = ({ item, index, expanded, setExpanded }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const isOpen = index === expanded;

  // 헤더 배경색 애니메이션: 열려있으면 빨간색, 닫혀있으면 파란색
  const headerVariants = {
    open: { backgroundColor: "#FF0088" },
    closed: { backgroundColor: "#0055FF" }
  };

  // 내용 섹션의 애니메이션 설정
  const sectionVariants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 }
  };

  const isPc = useMediaQuery({
    query: "(min-width:850px)",
  });

  return (
    <>
      <AccordionWrapper option={isPc}>
      {item && (
        <AccordionItem key={index}>
          <AccordionTitle onClick={() => toggleIndex(index)}>
            {item.title}
            <ToggleIcon>{activeIndex === index ? "−" : "+"}</ToggleIcon>
          </AccordionTitle>
          <AccordionContent isOpen={activeIndex === index}>
            <p>{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      )}
      </AccordionWrapper>
    </>
  );
};
const AccordionWrapper = styled.div`
  width: ${(props) => props.option ? "50%" : "80%"};
  margin: 2rem auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
`;

const AccordionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  background-color: #fff;
  color: #222;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(14, 118, 188, 0.9);
    color: #fff;
  }
  @media screen and (max-width: 850px) {
    font-size: 1.2rem;
  }
`;

const AccordionContent = styled.div`
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${props => (props.isOpen ? '10px 30px' : '0 30px')};
  background-color: #f9f9f9;
  font-size: 2rem;
  line-height: 2rem;
  color: #828282;
`;

const ToggleIcon = styled.span`
  font-size: 2rem;
`;

export default Accordion;
