import React from "react";
import styled from "styled-components";
import {
  InstaIcon,
  KakaoIcon,
  BlogIcon,
  NaverIcon
} from "../assets/import";

const Contact = () => {
  return (
    <ContactContainer>
      <Title>CONTACT</Title>

      <ContactItem>
        <TextContainer>
          <ItemTitle>바로 예약을 원하신다면</ItemTitle>
          <ItemDesc>
            네이버예약을 선택해주세요. 1312barre 네이버지도로 연결됩니다.
            예약 탭에서 원하시는 프로그램을 선택해 예약 신청 해주세요.
            예약 신청 내역 확인 후 예약 확정 여부를 안내드리겠습니다.
          </ItemDesc>
        </TextContainer>
        <IconButton
          href="https://naver.me/IMy1WQaQ"
          bgColor="#35b01e"
          txtColor="#fff"
        >
          <img src={NaverIcon} alt="네이버 아이콘" />
          <span>네이버 예약</span>
        </IconButton>
      </ContactItem>

      <ContactItem>
        <TextContainer>
          <ItemTitle>문의 사항이 있으시다면</ItemTitle>
          <ItemDesc>
            카카오 채널을 선택해주세요. 1312 barre 카카오톡 채널로 연결됩니다.
            궁금한 사항을 남겨주시면 빠르게 확인 후 답변 드리도록 하겠습니다.
          </ItemDesc>
        </TextContainer>
        <IconButton
          onClick={() => window.open("http://pf.kakao.com/_zIxcjn", "_blank")}
          bgColor="#f6dc32"
        >
          <img src={KakaoIcon} alt="카카오 아이콘" />
          <span>카카오 채널</span>
        </IconButton>
      </ContactItem>

      <ContactItem>
        <TextContainer>
          <ItemTitle>인스타그램을 통해 소식 확인</ItemTitle>
          <ItemDesc>
            1312 barre 인스타그램에서 최신 소식과 이벤트 정보를 확인해보세요.
          </ItemDesc>
        </TextContainer>
        <IconButton
          onClick={() => window.open("https://www.instagram.com/...", "_blank")}
          bgColor="insta"
          txtColor="#fff"
        >
          <img src={InstaIcon} alt="인스타그램 아이콘" />
          <span>인스타그램</span>
        </IconButton>
      </ContactItem>

      <ContactItem>
        <TextContainer>
          <ItemTitle>자세한 상담을 원하신다면</ItemTitle>
          <ItemDesc>
            전화 문의를 선택해주세요. 1312 barre 전화로 연결됩니다.
            레슨 중일 경우에는 전화를 못 받을 수 있습니다.
            레슨 종료 후 회신 드리도록 하겠습니다. (010-2776-1312)
          </ItemDesc>
        </TextContainer>
        <IconButton href="tel:01027761312" bgColor="#0e76bc" txtColor="#fff">
          <img src={KakaoIcon} alt="전화 아이콘" />
          <span>전화문의</span>
        </IconButton>
      </ContactItem>

      <ContactItem>
        <TextContainer>
          <ItemTitle>블로그도 방문해 보세요</ItemTitle>
          <ItemDesc>
            다양한 운동 팁과 소식을 블로그에서 확인할 수 있습니다.
          </ItemDesc>
        </TextContainer>
        <IconButton
          href="https://blog.naver.com/1312barre"
          bgColor="#fff"
          txtColor="#10d567"
        >
          <img src={BlogIcon} alt="블로그 아이콘" />
          <span>블로그</span>
        </IconButton>
      </ContactItem>
    </ContactContainer>
  );
};
const ContactContainer = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 100px 0 20px 0;
  text-align: center;
  `;
  
  const Title = styled.h1`
  font-size: 2.5rem;
  color: #0e76bc;
  padding: 50px 0;
  `;
  
  const ContactItem = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  gap: 50px;
  padding: 30px 0;
  
  /* 반응형: 모바일에서는 세로 배치 */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    gap: 20px;
  }
    `;

const TextContainer = styled.div`
  width: 80%;
  text-align: left;
  margin-right: 1rem;
  p, h2{
    font-family: "Noto Sans KR", sans-serif;
  }
`;
  
const ItemTitle = styled.h2`
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 1rem;
`;

const ItemDesc = styled.p`
  font-size: 1rem;
  color: #828282;
  line-height: 1.4;
`;

const IconButton = styled.a`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 0 15px;
  color: ${(props) => props.txtColor};
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;

  background: ${(props) => props.bgColor === "insta" 
    ? `linear-gradient(
      45deg,
      #405DE6 0%,
      #5851DB 20%,
      #833AB4 40%,
      #C13584 60%,
      #E1306C 80%,
      #FD1D1D 100%
      )`
    : props.bgColor};

  border: ${(props) => props.bgColor === "#fff" ? "1px solid #10d567" : "none"};
      
  img {
    width: 30px;
    height: 30px;
  }
  span {
    display: block;
    font-family: "Noto Sans KR", sans-serif;
  }
        
  &:hover {
    opacity: 0.8;
  }
`;
export default Contact;