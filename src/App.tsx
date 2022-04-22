import styled from "styled-components";
import { motion } from "framer-motion";
//이벤트를 listen 하기
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 45px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    background-color: white;
    height: 70px;
    width: 70px;
    place-self: center;
    border-radius: 50%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { scale: 1, borderRadius: "100px" },
    drag: { backgroundColor: "#fdcb6e", transition: { duration: 10 } },
};

export default function App() {
    return (
        <Wrapper>
            <Box drag variants={boxVariants} whileHover={"hover"} whileDrag="drag" whileTap="click" />
            {/* drag 하는 방법은 정말 쉽다! */}
        </Wrapper>
    );
}
