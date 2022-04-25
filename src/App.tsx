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
`;

const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    position: absolute;
    top: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateZ: 360,
    },
    leaving: {
        opacity: 0,
        scale: 0,
        y: 50,
    },
};

export default function App() {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);
    return (
        <Wrapper>
            <button onClick={toggleShowing}>Click</button>
            <AnimatePresence>{showing ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" /> : null}</AnimatePresence>
            {/* AnimatePresence 는 Box가 사라지는 것을 animate 한다 */}
        </Wrapper>
    );
}
