import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const Container = styled(motion.div)`
  position: absolute;
  width: calc(50% - 20px) !important;
  height: calc(100vh - 95px);
  top: 95px;
  right: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    top: 65px;
    height: calc(100vh - 65px);
  }
`;

export const MobileHeaderMenu = ({ btnColor, backColor }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const location = useLocation();

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    if (isOpen) {
      toggleOpen();
    }
    // location이 변경될 때마다 실행
  }, [location]);

  // 메뉴 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (isOpen) {
          toggleOpen();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <MenuToggle toggle={() => toggleOpen()} color={btnColor} />
      <AnimatePresence>
        {isOpen && (
          <Container
            style={{ background: "#fff" }}
            color={backColor}
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <Navigation color={btnColor} />
          </Container>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
