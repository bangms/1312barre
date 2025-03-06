import Header from "../components/Header";
import styled from "styled-components";
import {
    BlueLogo01,
    BlueLogo02,
    BlueLogo03,
    WhiteLogo01,
    WhiteLogo02,
    WhiteLogo03,
    HamburgerIcon,
    HamburgerIconOff,
    TopBtn,
    Logo,
    Center01
  } from "../assets/import";

const Main = () => {
    return (
        <>
        <Header />
        <Wrapper>
            <Div01>1</Div01>
            <Div02></Div02>
        </Wrapper>
        </>
    )
};
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;
const Div01= styled.div`
    height:100%;
    width:100%;
    background-image: url(${Center01});
    background-color: rgba(0,0,0,.5);
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
`;
const Div02 = styled.div`
    height: 800px;
    width: 100%;
`;
export default Main;
