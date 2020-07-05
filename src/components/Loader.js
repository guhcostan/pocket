import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react-web";
import animationData from '../lotties/wallet-loading.json'
const FullScreenBackground = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    display: ${props => !props.show && 'none'};
    width: 100vw;
    height: 100vh;
`
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
    background: white;
`
const Loading = styled.div`
    z-index: 2;
    width: 100%;
`
const Loader = (props) => {
    return <FullScreenBackground {...props}>
        <Loading>
        <Lottie
            style={{'z-index': 20}} options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }}}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
        />
        </Loading>
        <Background/>
    </FullScreenBackground>
}
export default Loader