import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
//constraint(제약) 쓰기! ex)좌표 내에서만 드래그 되도록
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
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

const boxVariants = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { scale: 1, borderRadius: "100px" },
    drag: { backgroundColor: "#fdcb6e", transition: { duration: 10 } },
};

export default function App() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
                <Box drag dragElastic={0.3} dragSnapToOrigin dragConstraints={biggerBoxRef} variants={boxVariants} whileHover={"hover"} whileDrag="drag" whileTap="click" />
                {/* drag만 쓰면 어느 방향으로나 drag할 수 있다는 뜻이다. dragConstraints를 이용하여 top right bottom left를 제한하자.*/}
                {/* 숫자를 일일히 계산하는 것은 귀찮다. Ref를 사용하자 */}
            </BiggerBox>
        </Wrapper>
    );
}
