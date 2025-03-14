import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Slogan, Center01 } from "../assets/import";
import AnimatedDesc from "../components/AnimatedDesc";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) {
      console.warn("sectionRef가 아직 할당되지 않았습니다.");
    } else {
      console.log("sectionRef 할당됨:", sectionRef.current.getBoundingClientRect());
    }
  }, []);

  const transition = {
    duration: 2,
    ease: [0.6, -0.05, 0.01, 0.9],
  };

  const textReveal = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
    },
  };

  return (
    <Wrapper>
      <Desc1
        ref={sectionRef}
        variants={textReveal}
        initial="initial"
        animate="animate"
        transition={transition}
      >
        <MainTxt>Welcome to 1312barre</MainTxt>
        <SubTxt>13(B)과 12(R), 두 숫자가 만난 특별한 공간,</SubTxt>
        <SubTxt>1312barre에서 바레와 함께하는 새로운 여정을 시작해보세요.</SubTxt>
      </Desc1>

      {/* 첫 번째 Desc 섹션 */}
      <Desc>
      <AnimatedDesc>
        <img src={Slogan} alt="slogan" />
      </AnimatedDesc>
      <AnimatedDesc>
        <SubTxt>
          “Barre with me” 라는 슬로건처럼,
          <br /> 함께하면 더 즐겁고 의미있는 시간이 될 거예요.
        </SubTxt>
      </AnimatedDesc>

      </Desc>

      {/* 두 번째 Desc 섹션 */}
      <AnimatedDesc>
        <SubTxt>
          바레는 단순한 운동이 아니에요.
          <br />
          몸과 마음을 동시에 깨우는 경험으로, 누구나 즐길 수 있는 운동입니다.
          <br />
          비트 있는 음악에 맞춰 리듬을 타며 몸을 움직이는 동안
          <br />
          힘든 순간 조차 신나고 즐거운 시간이 됩니다.
        </SubTxt>
    </AnimatedDesc>
    <AnimatedDesc>
        <img src={Center01} alt="center picture" />
      </AnimatedDesc>
      <AnimatedDesc>
        <SubTxt>
          1312barre에서 바레의 매력을 느끼고, 그 에너지를 나누세요.
          <br />
          더 나은 몸과 더 행복한 삶을 위한 첫걸음, 이곳에서 시작됩니다.
          <br />
          <br />
          <br />
          여러분의 바레 라이프, 함께 만들어 가요!
          <br />
          Barre with me!
        </SubTxt>
      </AnimatedDesc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  min-height: 200vh; /* 충분한 스크롤 공간 확보 */
  div {
    ${({ theme }) => theme.common.flexCenterColumn};
    width: 100%;
    position: relative;

  }
`;

const Desc1 = styled(motion.div)`
  width: 100%;
  height: 100vh;
`;
const Desc = styled.div`
    width: 100%;
    padding: 100px 0;
    img {
        width: 100%;
    }
`;
const MainTxt = styled(motion.div)`
  font-family: "TANHEADLINE";
  font-size: 7rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const SubTxt = styled(motion.div)`
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  font-weight: 500;
  font-style: normal;
  margin-top: 15px;
  font-size: 2rem;
  line-height: 3rem;
`;

const CenterPic = styled.div``;

export default About;
