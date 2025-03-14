import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedDesc = ({
  children,
  transition = { duration: 0.7, ease: [0.175, 0.885, 0.32, 1] }
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: "50px", opacity: 0 }}
      animate={isInView ? { y: "0px", opacity: 1 } : { y: "200px", opacity: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDesc;
