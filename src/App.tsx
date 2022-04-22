import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

// MotionValue

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
    // useEffect를 이용하면 x 값을 알 수 있다.
    useEffect(() => {
        x.onChange(() => console.log(x.get()));
    }, [x]);
    //const x 기 업데이트 되니 계속 console.log가 찍힌다.
    return (
        <Wrapper>
            <button onClick={() => x.set(200)}>Click Me</button>
            {/* 이런 식으로 x 값을 조절할 수 있기도 하다. */}
            <Box style={{ x }} drag="x" dragSnapToOrigin />
            {/* x의 좌표가 바뀔 때 마다 style도 바뀔 것이다. 하지만 motionValue 바뀌어도 재렌더링 되지 않는다.*/}
        </Wrapper>
    );
}
