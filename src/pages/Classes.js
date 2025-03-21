import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { motion, useScroll, useTransform } from "framer-motion";

const Classes = () => {
    const isPc = useMediaQuery({
    query: "(min-width:850px)",
    });

    return (
        <>
            <Wrapper>
                <Section>
                    <MainText>1312 Classes</MainText>
                    <SubText>Section heading</SubText>
                    <ClassListContainer option={isPc}>
                        <Article>
                            <ClassName>Align flow</ClassName>
                            <Description>정렬에 포커스를 맞추어 스스로의 움직임에 집중해보는 클래스<br /><br />
자세를 바로잡고, 플로우에 맞추어 부드럽게 흐르는 동작들의 연결에 집중합니다. 관절과 척추의 정렬을 맞추어 불필요한 부하를 줄여 나가 신체의 균형을 회복하고 근육의 긴장도를 조절해요. 동작 하나하나에 집중하여 심신의 균형을 맞추는 시간을 통해 안정감을 기르고 ‘나’에게 귀기울여 보세요.</Description>
                        </Article>
                        <Article>
                            <ClassName>Balance</ClassName>
                            <Description>근육의 밸런스를 맞추어 균형감각을 강화하는 동시에 몸의 중심을 강화하는 ‘밸런스 + 코어강화’ 클래스<br /><br />

다양한 동적 밸런스 동작을 통해 신체의 중심을 잡고, 상체와 하체의 상호작용을 최적화하여 균형잡힌 몸을 만듭니다. 또한 코어기반의 심부 근육을 활성화시켜 몸의 안정성을 높이고, 전신의 균형감을 향상시킵니다. 
바디 컨트롤을 통해 신체의 기능적 균형을 돕고 부상 예방 및 자세 교정 효과를 느껴보세요.
일상에서 느끼는 불균형을 개선해가요!</Description>
                        </Article>
                        <Article>
                            <ClassName>Cardio boost</ClassName>
                            <Description>체력 향상을 위한 에너지 넘치는 클래스<br /><br />

바와 함께 소도구를 활용한 인터벌 트레이닝을 통해 높은 심박수를 유지합니다. 이 수업은 Full body movement로 전신의 근육을 활성화시켜 효율적으로 칼로리를 태우고 몸을 활력있게 만들어 줍니다. 리듬감 있는 음악과 함께 조금 더 빠르게 움직여보는 Cardio Boost!
높은 칼로리 소모와 동시에 체력과 지구력을 강화해보아요.</Description>
                        </Article>
                        <Article>
                            <ClassName>Power strength</ClassName>
                            <Description>근력을 증진 시키는 Power Strength 클래스<br /><br />

덤벨, 밴드 등을 사용해 웨이트를 더한 강도 높은 운동을 통해 근육을 강화하고 몸의 힘을 극대화 합니다. 이 수업은 바레의 기본 동작에 저항훈련을 접목시켜 하체, 상체, 코어를 포함한 주요 근육군을 타겟으로 하며, 신체의 기능성 향상과 함께 근육을 밀도 있게 만들어 줍니다. 강력한 체력과 함께 운동의 진정한 힘을 경험하게 될 거에요!</Description>
                        </Article>
                    </ClassListContainer>
                </Section>
            </Wrapper>
        </>
    )
};
const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  padding-top: 95px;
  ${({ theme }) => theme.common.flexCenterColumn};
  div {
    font-family: "Noto Sans KR", sans-serif;

  }
`;
const Section = styled.div`
    width: 80%;
`;
const MainText = styled.div`
    font-size: 3rem;
    padding: 30px 0;
    font-weight: bold;
    text-align: left;
    margin: 50px 0;
`;
const SubText = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
`;
const ClassListContainer = styled.div`
    ${({ theme }) => theme.common.flexCenterColumn};
    display: grid;
    grid-template-columns: ${(props) => props.option ? "1fr 1fr" : "1fr"};
    gap: 10%;
`;
const Article = styled.div`

`;
const ClassName = styled.div`
    font-size: 1.8rem;
    padding: 10px 0;
`;
const Description = styled.div`
    color: #828282;
    font-size: 1.5rem;
    line-height: 2rem;
`;

export default Classes;
