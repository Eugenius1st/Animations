import styled from "styled-components";
import { motion } from "framer-motion";
// Variants_애니메이션의 무대이다. 한 장소에 설정을 넣어주기만 하면 되고, motion들은 알아서 찾아낸다.
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
    start: { scale: 0 },
    end: { scale: 1, rotateX: 360, transition: { type: "spring", delay: 1 } },
};

export default function App() {
    return (
        <Wrapper>
            <Box variants={myVars} initial="start" animate="end" />
            {/* myVars를 들여다 본 후 start와 end를 찾아준다. */}
        </Wrapper>
    );
}
