import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <ContentWrapper>
        {children}
        </ContentWrapper>
        <Footer />
        </>
    )
};
const ContentWrapper = styled.div`
`;
export default Layout;
