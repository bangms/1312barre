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
    ["fixed", "fixed", "initial"]
  );


  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) =>
      console.log("scrollYProgress:", latest)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  
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
      <Wrapper style={{ position: displayValue }}>
        <MenuContainer>
          <BtnList option={isPc}>
            <LogoBtn>
              <MotionLink to="/">
                <MotionLogo style={{ fill: '#0E76BC' }} />
              </MotionLink>
            </LogoBtn>
            {isPc ? (
              <>
                <MenuUl>
                  <MenuLi>
                    <MotionLink
                      to="/about"
                    >
                      About
                    </MotionLink>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/founder"
                    >
                      Founder/Instructor
                    </MotionLink>
                    <SubMenuUl>
                      <SubMenuLi>
                        <MotionLink
                          to="/founder"
                        >
                          Founder
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/founder"
                        >
                          Instructor
                        </MotionLink>
                      </SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/classes"
                    >
                      1312 CLASSES
                    </MotionLink>
                    <SubMenuUl>
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                        >
                          Align flow
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                        >
                          Balance
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                        >
                          Cardio boost
                        </MotionLink>
                      </SubMenuLi>
                      <SubMenuLi>
                        <MotionLink
                          to="/classes"
                        >
                          Power strength
                        </MotionLink>
                      </SubMenuLi>
                    </SubMenuUl>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/faq"
                    >
                      FAQ
                    </MotionLink>
                  </MenuLi>
                  <MenuLi>
                    <MotionLink
                      to="/contact"
                    >
                      Location
                    </MotionLink>
                  </MenuLi>
                </MenuUl>
                <Contact>
                  <MotionLink
                    to="/contact"
                  >
                    Reservation
                  </MotionLink>
                </Contact>
              </>
            ) : (
              <>
                <MobileMenuIconContainer>
                  <MobileHeaderMenu btnColor={'#0E76BC'} backColor={'rbga(255,255,255,0.7)'} />
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
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);    /* 블러 처리 */
  -webkit-backdrop-filter: blur(8px); /* 사파리 호환 */
  ${({ theme }) => theme.common.flexCenter};
  background: rgba(255,255,255,0.7);
  position: fixed;
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
    font-size: 1.2rem;
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
