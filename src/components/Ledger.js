import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Yerin,
  BarreLogo
} from "../assets/import";
const Ledger = () => {
    return (
        <>
        <Wrapper>
          <Greeting>
            <ImageWrapper>
              <img src={Yerin} alt="yelin picture"/>
            </ImageWrapper>
            <Name>
              Yelin Lee / Founder
            </Name>
            <KorTxt>
              바레라는 운동을 처음 접했던 날을 저는 잊지 못할거에요. <br />
              오랜만에 쿵쾅쿵쾅 심장이 뛰었답니다. <br /><br />
              간만에 찾아온 설렘에 <br />
              그렇게 한참을 고민했던 것 같아요. <br />
              내가 원하는, 내가 가르치고 싶은 수업의 방향성. <br />
              더 나아가 어떤것을 나누는 사람이고 싶은가에 대해서요. <br />
              아직도, 그리고 시간이 지나도 <br />
              그 답을 찾아가는 여정은 이 일을 하는 내내 계속 되겠죠?<br />
              하지만 명확한 건, 제 수업을 통해 함께 땀 흘리고 에너지를 나누는 순간, 순간이 
              저에게는 가장 의미있는 시간이더라구요. <br /><br />

              저는 제가 만든 공간에서 ‘바레’라는 매개체로 하여금 <br />
              함께 움직이며 한 번 더 웃고, 한 순간이라도 더 행복하기를 바라요. <br />
              혼자가 아닌 함께 하는 삶에서, 함께의 가치를 느끼면서요. <br />
              스튜디오의 슬로건을 “Barre with me” 로 내건 이유기도 해요.<br />

              2017년을 시작으로 회원님들을 만난지 벌써 9년차가 됐어요. <br />
              함께해주시는 분들께 늘 감사, 또 감사하다는 이야기를 전합니다. <br />
              늘 배움의 자세를 잊지않고, 1312barre에서 밀도있는 수업으로 만나뵐게요!
            </KorTxt>
            <EngTxt>
              I can't forget the first day I did barre. I've felt so excited. <br />
              I was excited, but at the same time, I thought about the direction of my class and what I wanted to share with people through my class. <br />
              As time goes by, the answer to that question will continue to be something I think about as an instructor. <br />
              But what is clear is that the moments when people sweat and share energy through my classes are the happiest times for me. <br />
              I hope that people in my studio will laugh more and be happier as they move together while doing barre. <br />
              Life is not alone. Feel the value of being together. That's why the studio's slogan is barre with me. <br />
              I have been working with people as an instructor since 2017, so it has already been 9 years. Thanks to everyone who was with me. I will always be a better instructor than yesterday. I can’t wait to see you again in a perfect class. <br />
            </EngTxt>
          </Greeting>
          <Certificate>
            Barre intensity의 국내 최초 인증 강사
            South Korea‘s first certificated instructor, Yelin Lee
            {/* 인증 로고 이미지 */}
            <img src={BarreLogo} alt="barre certificated instructor logo" />

            {/* 링크 버튼 */}
            {/* https://www.barreintensity.com/instructors/2024/10/31/yelin-lee */}
          </Certificate>
        </Wrapper>
        </>
    )
};
const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  div {
    ${({ theme }) => theme.common.flexCenterColumn};
    width: 100%;
    position: relative;

  }
`;
const Greeting = styled.div`
`;
const ImageWrapper = styled.div`
`;
const Name = styled.div`
`;
const KorTxt = styled.div`
`;
const EngTxt = styled.div`
`;
const Certificate = styled.div`
`;
export default Ledger;
