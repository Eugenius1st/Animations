import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";

// 어떤것을 또 transform 할 수 있는지 알아보자, 숫자뿐만 아니라 색깔도 transform 할 수 있다.

const Wrapper = styled(motion.div)`
    height: 200vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 253));
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
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
    const gradient = useTransform(
        x,
        [-800, 0, 800],
        ["linear-gradient(135deg, rgb(0, 63, 238), rgb(38, 142, 226)", "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 253)", "linear-gradient(135deg, rgb(41, 238, 117), rgb(249, 253, 0)"]
    );
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

    return (
        <Wrapper style={{ background: gradient }}>
            <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
        </Wrapper>
    );
}
