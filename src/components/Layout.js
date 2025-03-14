import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";

const Layout = ({children, location}) => {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };
    return (
        <>
        <Header />
        <div key={location.pathname}>
            <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </div>
        <Footer />
        </>
    )
};
export default Layout;
