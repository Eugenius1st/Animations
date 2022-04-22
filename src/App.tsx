import styled from "styled-components";
import { motion } from "framer-motion";

// npm install framer-motion

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function App() {
    return (
        <Wrapper>
            <Box />
            {/* 뭐든 animate 하길 원한다면 motion패키지로부터 나와야 한다 */}
            <motion.div></motion.div>
        </Wrapper>
    );
}
