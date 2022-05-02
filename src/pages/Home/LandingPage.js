import styled from 'styled-components'
import { Link } from "react-router-dom";
import ArrowImg from '../../assets/arrow.svg'

const LandingWrapper = styled.section`
    height: 100vh;
`

const MainWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    text-transform: uppercase;
    font-family: GothicBlack;
    font-size: 100px;
`

const Button = styled(Link)`
    font-family: Raleway;
    text-decoration: none;  
    color: black;

    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;

    text-transform: none;
    display: inline-flex;
    align-items: center;
`

const Arrow = styled.img`
    margin-left: 20px;
`
const LandingPage = () => {
    return (
        <LandingWrapper>
            <MainWrapper>
                University Network <br/>
                For Cryptocurrency <br/>
                & Blockchain <br/>
                <Button to="/blog">Check out our blog! <Arrow src={ArrowImg} alt="arrow"/></Button>
            </MainWrapper>
        </LandingWrapper>
    )
}

export default LandingPage