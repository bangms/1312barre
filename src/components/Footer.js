import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f3f3f3;
  border-top: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);    /* 블러 처리 */
  color: #333;
  text-align: left;
  font-size: 3rem;
`;

const FooterContent = styled.div`
  padding: 30px 100px;
  line-height: 2rem;
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const FooterTitle = styled.h2`
  margin-bottom: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>1312barre (1312바레)</FooterTitle>
        <p>대표자 | 이예린</p>
        <p>주소| 서울시 마포구 용강동 45-8 3F b호</p>
        <p>전화 | 010.2776.1312</p>
        <p>사업자등록번호 | 493-64-00693</p>
        <br />
        <p>
          Copyright 2023. 1312barre
          All rights reserved.
        </p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
