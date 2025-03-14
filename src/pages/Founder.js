import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { motion, useScroll, useTransform } from "framer-motion";
import Ledger from "../components/Ledger";
import Instructor from "../components/Instructor";

const Founder = () => {
    return (
        <>
        <Ledger />
        <Instructor />
        </>
    )
};
export default Founder;
