import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ArrowImg from '../../assets/arrow.svg'

const LandingWrapper = styled.section`
    height: 100vh;
`

const MainWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextWrapper = styled.div`
    text-transform: uppercase;
    font-family: GothicBlack;
    font-size: 5vw;
`

const BottomWrapper = styled.div`
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
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

const ExploreWrapper = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const ExploreText = styled.div`
    position: relative;
    z-index: 9;
    background: none;
    text-transform: uppercase;
    font-family: GothicBlack;
    margin-right: 3vw;
    font-size: 2vw;
`

const Box = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background-color: #FF8C5B;

    position: absolute;
    top: 0;
    right: 0;
`

const LandingPage = () => {
    return (
        <LandingWrapper>
            <Navbar/>
            <MainWrapper>
                <div>
                    <TextWrapper>
                        University Network<br/>
                        For Cryptocurrency<br/>
                        & Blockchain.<br/>
                    </TextWrapper>

                    <BottomWrapper>
                        <Button to="/blog">Check out our blog! <Arrow src={ArrowImg} alt="arrow"/></Button>
                        <ExploreWrapper>
                            <ExploreText>
                                Explore.
                            </ExploreText>
                            <Box/>
                        </ExploreWrapper>
                    </BottomWrapper>
                </div>
            </MainWrapper>
        </LandingWrapper>
    )
}

export default LandingPage