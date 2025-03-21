import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import {
  BlueLogo01,
  BlueLogo02,
  BlueLogo03,
  WhiteLogo01,
  WhiteLogo02,
  WhiteLogo03,
  TopBtn,
  Logo
} from "../assets/import";
import { motion, useScroll, useTransform } from "framer-motion";
import { MobileHeaderMenu } from "./MobileHeaderMenu";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Header = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolling, setScrolling] = useState(false);
  const MotionLogo = motion(Logo);


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
    ["#fff", "rgba(14,118,188,100)", "#fff"]
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
      <Wrapper style={{ background: colorValue, display: displayValue }}>
        <MenuContainer>
          <BtnList option={isPc}>
            <LogoBtn>
              <MotionLink to="/">
                <MotionLogo style={{ fill: txtColorValue }} />
              </MotionLink>
            </LogoBtn>
            {isPc ? (
              <>
                <MenuUl>
                  <MenuLi>
                    <MotionLink
                      to="/about"
                      style={{ color: txtColorValue }}
                    >
                      About
                    </MotionLink>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/founder"
                      style={{ color: txtColorValue }}
                    >
                      Founder/Instructor
                    </MotionLink>
                    <SubMenuUl
                      style={{ background: colorValue, color: txtColorValue }}
                    >
                      <SubMenuLi>
                        <MotionLink
                          to="/founder"
                          style={{ color: txtColorValue }}
                        >
                          Founder
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/founder"
                          style={{ color: txtColorValue }}
                        >
                          Instructor
                        </MotionLink>
                      </SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/classes"
                      style={{ color: txtColorValue }}
                    >
                      1312 CLASSES
                    </MotionLink>
                    <SubMenuUl
                      style={{ background: colorValue, color: txtColorValue }}
                    >
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                          style={{ color: txtColorValue }}
                        >
                          Align flow
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                          style={{ color: txtColorValue }}
                        >
                          Balance
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                          style={{ color: txtColorValue }}
                        >
                          Cardio boost
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                          style={{ color: txtColorValue }}
                        >
                          Power strength
                        </MotionLink>
                      </SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/faq"
                      style={{ color: txtColorValue }}
                    >
                      FAQ
                    </MotionLink>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/contact"
                      style={{ color: txtColorValue }}
                    >
                      Contact
                    </MotionLink>
                  </MenuLi>
                </MenuUl>
                <Contact>
                  <MotionLink
                    to="/contact"
                    style={{ color: colorValue }}
                  >
                    문의하기
                  </MotionLink>
                </Contact>
              </>
            ) : (
              <>
                <MobileMenuIconContainer>
                  <MobileHeaderMenu btnColor={txtColorValue} backColor={colorValue} />
                </MobileMenuIconContainer>
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
  border-bottom: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);    /* 블러 처리 */
  -webkit-backdrop-filter: blur(8px); /* 사파리 호환 */
  ${({ theme }) => theme.common.flexCenter};
  ${(props) =>
    props.option !== "hide" && (({ theme }) => theme.common.fixedTop)};
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
  justify-items:  ${(props) => props.option ? "center" : "space-between"};
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
  svg {
    width: 120px;
    height: 30px;
  }
`;

const MobileMenuIconContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  box-sizing: border-box;
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
