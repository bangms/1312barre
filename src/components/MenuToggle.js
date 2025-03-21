import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Path = ({ color, ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={color}
    strokeLinecap="round"
    {...props}
  />
);

const MenuBtn = styled.li`
  list-style: none;
`;

export const MenuToggle = ({ toggle, color }) => (
  <MenuBtn onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        color={color}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        color={color}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        color={color}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </MenuBtn>
);
