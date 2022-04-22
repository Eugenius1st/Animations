import styled from "styled-components";
import { motion } from "framer-motion";

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
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 45px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    background-color: white;
    height: 70px;
    width: 70px;
    place-self: center;
    //오!!!place-self /???? 새로운 CSS 알게 되었다 !!! 대박
    border-radius: 50%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.2,
            //자식 애니매이션 까지도 컨트롤 가능하다.
        },
    },
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 10,
        //아래 좌표로부터 애니매이션이 나오도록 적용, 이는 Motion에만 국한되는 것이다.
    },
    end: {
        opacity: 1,
        transition: {
            y: 0,
            //motion의 공식문서에 orchestrarion을 보면 애니매이션(자식들)을 지연시키는 방법이 있다.
            //variant의 부모 내에서 모든 자식들에게 delay할 수 있다. 'delaychildren:' 을 이용해서
            // staggerChildern은 자식들을 돌아가면서 지연시킬 수 있다.
        },
    },
};

export default function App() {
    return (
        <Wrapper>
            <Box variants={boxVariants} initial="start" animate="end">
                {/* 자식들에게 자동으로 initial="start" animate="end"이것들은 기본적으로 상속된다. */}
                {/* 사용방법은, initial과 animate의 이름인 start와 end를 새로운 variant를 이용해 circleVariants 를 이용하여 붙여넣기 할 것이다. */}
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
            </Box>
        </Wrapper>
    );
}
