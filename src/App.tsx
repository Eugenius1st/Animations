import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

// 사각형을 x 축에서 드래그하면서 커지고 작아지도록 하기, useTransform 이용

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(2, 1fr);
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 45px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function App() {
    const x = useMotionValue(0);
    const potato = useTransform(x, [-800, 0, 800], [2, 1, 2]);
    //인자를 3개로 받는데, x 가 -800이면 2를 얻고, x 가 0 이면 1 을 얻는다 ...
    // 따라서 입력값들과 출력값들의 수가 같아야 한다.
    useEffect(() => {
        potato.onChange(() => console.log(potato.get()));
    }, [x]);
    return (
        <Wrapper>
            <Box style={{ x, scale: potato }} drag="x" dragSnapToOrigin />
            {/* scale 값과 potato를 연결하여 크기를 변경하자 */}
        </Wrapper>
    );
}
