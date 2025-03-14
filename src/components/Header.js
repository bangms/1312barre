import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import {
  BlueLogo01,
  BlueLogo02,
  BlueLogo03,
  WhiteLogo01,
  WhiteLogo02,
  WhiteLogo03,
  HamburgerIcon,
  HamburgerIconOff,
  TopBtn,
  Logo
} from "../assets/import";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [dropDownOnOff, setDropDownOnOff] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const MotionLogo = motion(Logo);
  const HamburgerIconSvg = motion(HamburgerIcon);
  const HamburgerIconOffSvg = motion(HamburgerIconOff);

  const isPc = useMediaQuery({
    query: "(min-width:850px)",
  });
  const displayValue = useTransform(
    scrollY,
    [0, 600, 601],
    ["flex", "flex", "none"]
  );
  const colorValue = useTransform(
    scrollY,
    [0, 375, 376],
    ["rgba(14,118,188,0)", "rgba(14,118,188,100)", "rgba(14,118,188,0)"]
  );
  const txtColorValue = useTransform(
    scrollY,
    [0, 375, 376],
    ["rgb(14,118,188)", "#fff", "rgb(14,118,188)"]
  );

  // 0~300px 구간: 완전 투명 → 반투명 그라데이션
  // 그 이상: 짙은 메인 컬러 그라데이션으로 유지
  const gradientValue = useTransform(scrollY, [0, 300, 99999], [
    "linear-gradient(to bottom, rgba(14,118,188,0.5) 0%, rgba(14,118,188,0) 100%)",
    "linear-gradient(to bottom, rgba(14,118,188,0.8) 0%, rgba(14,118,188,0.3) 100%)",
    "linear-gradient(to bottom, rgba(14,118,188,1) 0%, rgba(14,118,188,1) 100%)"
  ]);

  const handleScroll = () => {
    const scrollYValue = scrollY.get();

    // 스크롤 위치에 따라 버튼 보이기/숨기기 처리
    if (scrollYValue > window.innerHeight / 2) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트되면 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 페이지 상단으로 스크롤
  };
  const scrollToTopVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
    return (
        <>
        <Wrapper
        style={{ background: colorValue, display: displayValue }}
      >
        <MenuContainer>
          <BtnList option={isPc}>
            <LogoBtn href="/">
              <MotionLogo
                style={{fill: txtColorValue}} 
              />
            </LogoBtn>
            {isPc ? (
              <>
                <MenuUl>
                  <MenuLi>
                    <motion.a href="/about" style={{ color: txtColorValue }}>
                      About
                    </motion.a>
                  </MenuLi>
                  <MenuLi>
                    <motion.a href="/founder" style={{ color: txtColorValue }}>
                    Founder/Instructor
                    </motion.a>
                    <SubMenuUl
                      style={{ background: colorValue, color: txtColorValue }}
                    >
                    <SubMenuLi>
                      <motion.a href="/founder" style={{ color: txtColorValue }}>
                        Founder
                      </motion.a>
                    </SubMenuLi>
                    <SubMenuLi>
                      <motion.a href="/founder" style={{ color: txtColorValue }}>
                        Instructor
                      </motion.a>
                    </SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <motion.a href="/classes" style={{ color: txtColorValue }}>
                      1312 CLASSES
                    </motion.a>
                    <SubMenuUl
                      style={{ background: colorValue, color: txtColorValue }}
                    >
                      <SubMenuLi>
                        <motion.a href="/classes" style={{ color: txtColorValue }}>
                          Align flow
                        </motion.a>
                      </SubMenuLi>
                      <SubMenuLi>
                        <motion.a href="/classes" style={{ color: txtColorValue }}>
                          Balance
                        </motion.a>
                      </SubMenuLi>
                      <SubMenuLi>
                        <motion.a href="/classes" style={{ color: txtColorValue }}>
                          Cardio boost
                        </motion.a>
                      </SubMenuLi>
                      <SubMenuLi>
                        <motion.a href="/classes" style={{ color: txtColorValue }}>
                          Power strength
                        </motion.a>
                      </SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <motion.a href="/faq" style={{ color: txtColorValue }}>
                      FAQ
                    </motion.a>
                  </MenuLi>
                  <MenuLi>
                    <motion.a href="/contact" style={{ color: txtColorValue }}>
                      Contact
                    </motion.a>
                  </MenuLi>
                </MenuUl>
                <Contact>
                  <motion.a href="/contact" color={txtColorValue}>
                    문의하기
                  </motion.a>
                </Contact>
              </>
            ) : (
              <>
              <HIconContainer
                onClick={() => {
                  setDropDownOnOff(!dropDownOnOff);
                }}
              >
                {dropDownOnOff ? (
                  <HamburgerIconOffSvg style={{fill: txtColorValue}} />
                ) : (
                  <HamburgerIconSvg style={{fill: txtColorValue}} />
                )}
                {dropDownOnOff && (
                  <HMenuContainer style={{ background: colorValue }}>
                    <HMenuEl>
                      <motion.span style={{ color: txtColorValue }}>
                        Service
                      </motion.span>
                      Service
                    </HMenuEl>
                    <HMenuEl>
                      <motion.span style={{ color: txtColorValue }}>
                        Technology
                      </motion.span>
                    </HMenuEl>
                    <HMenuEl>
                      <motion.span style={{ color: txtColorValue }}>
                        About
                      </motion.span>
                    </HMenuEl>
                    <HMenuEl>
                      <motion.span style={{ color: txtColorValue }}>
                        Contact
                      </motion.span>
                    </HMenuEl>
                  </HMenuContainer>
                )}
              </HIconContainer>
              </>
            )}
          </BtnList>
        </MenuContainer>
      </Wrapper>
      {(scrolling || isMobile) && (
        <ScrollToTopButton
          variants={scrollToTopVariants}
          initial="hidden"
          animate="visible"
          onClick={scrollToTop}
        >
          <TopBtn />
        </ScrollToTopButton>
      )}
    </>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 94px;
  z-index: 9999;
  background: linear-gradient(
  to bottom,
  rgba(255,255,255,0.7) 0%,   /* 헤더 상단 부분은 70% 불투명 흰색 */
  rgba(255,255,255,0.3) 70%,  /* 중간 정도 투명 */
  rgba(255,255,255,0) 100%    /* 하단으로 갈수록 완전 투명 */
  );
  border-bottom: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);    /* 블러 처리 */
  -webkit-backdrop-filter: blur(8px); /* 사파리 호환 */
  transition: background 0.3s ease-in-out;
  ${({ theme }) => theme.common.flexCenter};
  ${(props) =>
    props.option !== "hide" && (({ theme }) => theme.common.fixedTop)};
  transition: all 0.2s ease-in-out 0s;
  @media screen and (max-width: 768px) {
    height: 64px;
  }
`;
const MenuContainer = styled.div`
  ${({ theme }) => theme.common.ContainerDiv};
`;
const BtnList = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.option ? "120px 1fr 120px" : "1fr 1fr"};
  align-content: center;
  justify-items: center;
`;
const SubMenuUl = styled(motion.ul)`
  position: fixed;
  width: 100%;
  left: 50%;
  top: 60px;
  background: #000;
  height: 114px;
  transform: translateX(-50%);
  display: none;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: #000;

  &:hover {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    top: 84px;
  }
`;
const MenuLi = styled(motion.li)`
  padding:0 60px;
  @media screen and (max-width: 1260px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1060px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
  &:last-child {
    margin-right: 0;
  }
  a {
    position: relative;
    display: block;
    color: #000;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;
  }
  &:hover {
    a {
      color: #32A0D2 !important;
      transition: all 0.3s;
    }
  }

  &:nth-child(2) a:hover + ${SubMenuUl} {
    display: flex;
  }
  & a:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const SubMenuLi = styled.li`
  position: relative;
  width: fit-content;
  font-weight: 400;
  font-size: 2rem;
  line-height: 24px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;

  &:hover {
    display: flex;
  }

`;
const MenuUl = styled.ul`
  ${({ theme }) => theme.common.flexCenterRow};
  padding: 0 20px;
`;
const Contact = styled.div`
  width: 100px;
  height: 100%;
  ${({ theme }) => theme.common.flexCenterRow};
  color: #fff;
  a {
    color: #fff;
    display: block;
    background: #0e76bc;
    border:${(props => props.color == "#fff" ? "1px solid #fff" : "none")};
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
  }
    a:hover {
      background: rgb(10,90,142);
      transition: all 0.3s;
    }
`;
const LogoBtn = styled.a`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
   @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }

  svg {
    width: 120px;
    height: 30px;
  }
`;

const HIconContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const HMenuContainer = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 64px;
  left: 0;
  ${({ theme }) => theme.common.flexCenterColumn};
  align-items: flex-start;
  gap: 32px;
  padding: 32px 60px;
  background: #000;
  @media screen and (max-width: 600px) {
    padding: 32px 20px;
  }
`;
const HMenuEl = styled(motion.div)`
  width: 100vw;
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  & span {
    z-index: 2;
    ${({ theme }) => theme.common.mobileTxt};
    color: #000;
    font-weight: 500;
  }
  &:after {
    background: ${(props) =>
      props.option === "black" ? "rgb(20, 20, 20)" : "rgb(246, 247, 248)"};
    display: block;
    content: "";
    position: absolute;
    left: 0;
    width: 100vw;
    height: 51px;
    transform-origin: 0px 0px;
    ${({ theme }) => theme.common.transition};
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0px 0px;
    backface-visibility: hidden;
  }
  @media screen and (max-width: 600px) {
    left: -20px;
  }
`;
const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 232, 235);
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(rgba(0, 0, 0, 0.12) 0px 4px 12px);
  z-index: 1200;
`;
export default Header;
