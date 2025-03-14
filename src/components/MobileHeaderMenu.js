import React, { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    x: "100%", // 오른쪽에서 숨겨짐
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren", // 자식 exit 후에 부모 exit 시작
    }
  }
};

const Container = styled(motion.div)`
  position: absolute;
  width: calc(40% - 20px) !important;
  height: calc(100vh - 95px);
  top: 95px;
  right: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  @media screen and (max-width: 768px) {
    top: 65px;
    height: calc(100vh - 65px);
  }
`;

export const MobileHeaderMenu = ({ btnColor, backColor }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

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
