import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
};

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const submenuVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Container = styled(motion.ul)`
  height: 100%;
  border-radius: 10px;
  padding: 20px;
`;

const MenuLi = styled(motion.li).attrs(() => ({
  variants: liVariants,
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
}))`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; /* 자식(서브메뉴 포함) 세로로 정렬 */
  cursor: pointer;

  div {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.color || "#000"};
  }
  
  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.color || "#000"};
  }
`;

const SubMenuUl = styled(motion.ul)`
  list-style: none;
  padding: 0 0 0 20px;
  margin: 10px 0 0 0;
  overflow: hidden;
`;

const SubMenuLi = styled(motion.li)`
  margin-bottom: 10px;
  
  a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: normal;
    color: ${(props) => props.color || "#000"};
  }
`;

export const Navigation = ({ color }) => {
  const [openSubMenu, setOpenSubMenu] = useState({});

  const toggleSubMenu = (menuIndex) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [menuIndex]: !prev[menuIndex],
    }));
  };

  return (
    <Container variants={containerVariants}>
      <MenuLi color={color}>
        <MotionLink
          to="/about"
          style={{ color: color }}
        >
          About
        </MotionLink>
      </MenuLi>
      {/* Founder/Instructor 메뉴 */}
      <MenuLi color={color} onClick={() => toggleSubMenu("founder")}>
        <motion.div style={{ color: color }}>
          Founder/Instructor
        </motion.div>
        <AnimatePresence initial={false}>
          {openSubMenu["founder"] && (
            <SubMenuUl
              variants={submenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <SubMenuLi color={color}>
                <MotionLink to="/founder" style={{ color: color }}>
                  Founder
                </MotionLink>
              </SubMenuLi>
              <SubMenuLi color={color}>
                <MotionLink to="/founder" style={{ color: color }}>
                  Instructor
                </MotionLink>
              </SubMenuLi>
            </SubMenuUl>
          )}
        </AnimatePresence>
      </MenuLi>
      {/* 1312 CLASSES 메뉴 */}
      <MenuLi color={color} onClick={() => toggleSubMenu("classes")}>
        <motion.div style={{ color: color }}>
          1312 CLASSES
        </motion.div>
        <AnimatePresence initial={false}>
          {openSubMenu["classes"] && (
            <SubMenuUl
              variants={submenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <SubMenuLi color={color}>
                <MotionLink to="/classes" style={{ color: color }}>
                  Align flow
                </MotionLink>
              </SubMenuLi>
              <SubMenuLi color={color}>
                <MotionLink to="/classes" style={{ color: color }}>
                  Balance
                </MotionLink>
              </SubMenuLi>
              <SubMenuLi color={color}>
                <MotionLink to="/classes" style={{ color: color }}>
                  Cardio boost
                </MotionLink>
              </SubMenuLi>
              <SubMenuLi color={color}>
                <MotionLink to="/classes" style={{ color: color }}>
                  Power strength
                </MotionLink>
              </SubMenuLi>
            </SubMenuUl>
          )}
        </AnimatePresence>
      </MenuLi>
      <MenuLi color={color}>
        <MotionLink to="/faq" style={{ color: color }}>
          FAQ
        </MotionLink>
      </MenuLi>
      <MenuLi color={color}>
        <MotionLink to="/contact" style={{ color: color }}>
          Contact
        </MotionLink>
      </MenuLi>
    </Container>
  );
};
