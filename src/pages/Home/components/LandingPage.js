import Navbar from '../../../components/Navbar'
import styled from 'styled-components'
import ArrowImg from '../../../assets/arrow.svg'

const LandingWrapper = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
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

const Button = styled.a`
    font-family: Raleway;
    text-decoration: none;  
    color: ${({ theme }) => theme.mainText};

    padding: 20px;
    border: 1.5px solid ${({ theme }) => theme.mainText};
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
    background-color: ${({ theme }) => theme.highlight1};

    position: absolute;
    top: 0;
    right: 0;
`

const LandingPage = () => {
    const scrollHandler = () => {
        let element = document.querySelector('#about');
        element.scrollIntoView({ behavior: 'smooth' })
    }
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
                        <Button href="https://www.uncb.xyz/blog" target='_blank'>Check out our blog! <Arrow src={ArrowImg} alt="arrow"/></Button>
                        <ExploreWrapper onClick={scrollHandler}>
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