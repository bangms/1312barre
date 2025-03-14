import { useEffect, useRef } from "react";

// DOM 요소의 너비와 높이를 측정하기 위한 커스텀 훅
// 휴대폰 메뉴가 열릴 때 clipPath의 값이 컨테이너의 높이에 따라 달라지므로 실제 요소 높이 측정 위해 사용
export const useDimensions = ref => { // 매개변수로 ref(참조 객체)를 받음
  const dimensions = useRef({ width: 0, height: 0 }); // dimensions 객체 초기값 설정

  useEffect(() => {
    // 요소의 offsetWidth값과 Height값 dimensions.current에 저장
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
