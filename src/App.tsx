import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// 어떤것을 또 transform 할 수 있는지 알아보자, 숫자뿐만 아니라 색깔도 transform 할 수 있다.

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 253));
    flex-direction: column;
`;

const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    top: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
    entry: (isBack: boolean) => ({
        x: isBack ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: (isBack: boolean) => ({
        x: isBack ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: { duration: 0.2 },
    }),
};

export default function App() {
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextPlease = () => setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    const prevPlease = () => setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    return (
        <Wrapper>
            <AnimatePresence exitBeforeEnter custom={back}>
                <Box custom={back} variants={box} initial="entry" animate="center" exit="exit" key={visible}>
                    {visible}
                </Box>
            </AnimatePresence>
            {/* visible index에 따라 하나만 보인다 */}
            <button onClick={nextPlease}>next</button>
            <button onClick={prevPlease}>prev</button>
        </Wrapper>
    );
}
