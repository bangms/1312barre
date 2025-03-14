// Contact.js
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <Title>CONTACT</Title>
      <ContactCard onClick={() => window.open("http://pf.kakao.com/_zIxcjn", "_blank")}>
        카카오채널: pf.kakao.com/_zIxcjn
      </ContactCard>
      <ContactItem href="tel:01027761312">
        전화연결: 010.2776.1312
      </ContactItem>
      <ContactItem href="https://naver.me/IMy1WQaQ" target="_blank" rel="noopener noreferrer">
        네이버지도: 네이버 지도 보기
      </ContactItem>
      <ContactItem href="https://maps.app.goo.gl/DKTWGKCRndYeQKgK9?g_st=com.iwilab" target="_blank" rel="noopener noreferrer">
        구글맵: 구글 지도 보기
      </ContactItem>
      <ContactItem href="https://your-blog-link.com" target="_blank" rel="noopener noreferrer">
        블로그 보기
      </ContactItem>
    </ContactContainer>
  );
};
const ContactContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0E76BC;
  margin-bottom: 2rem;
`;

const ContactCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ContactItem = styled.a`
  display: block;
  font-size: 1.6rem;
  color: #0E76BC;
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;
export default Contact;
