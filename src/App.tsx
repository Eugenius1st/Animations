import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

//Box 들을 클릭하면 중앙 정렬되도록 하고 animate도 적용되도록 한다.

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 253));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 100%;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  // 오버레이 되었을때 배경을 흐리게 해주는 효과
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  //클릭된 요소를 position absoulte 된 element 상태로 만들어줘야 한다.
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        <Box layoutId="hello" />
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence>
        {clicked ? (
          <Overlay
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            <Box layoutId="hello" style={{ width: 500, height: 250 }} />
            {/* 같은 layout아이디를 가지고 있으므로 애니매이션이 달라진다
            Box 의 가장 위에서 Overlay의 중앙으로 갈 것이다.  
            이 모든 것은 layoutId 덕분에 멋진 motion을 가질 수 있게 된 것이다.*/}
          </Overlay>
        ) : null}
      </AnimatePresence>
      {/* animate될 div 이므로 (motion.div)로 Overlay를 바꿔주어야 한다. */}
    </Wrapper>
  );
}
