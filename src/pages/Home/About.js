import styled from 'styled-components'
import Box from '../../assets/about_box.svg'

const AboutSection = styled.section`
    height: 100vh;
    box-sizing: border-box;
    padding: 30px 60px 0 60px; // top right bottom left
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const TopWrapper = styled.div`
`

const Subtitle = styled.div`
    font-family: GothicBold;
    color: ${({ theme }) => theme.subtitle};;
    font-size: 1vw;
    text-transform: uppercase;
`

const MainTitle = styled.div`
    font-family: GothicBlack;
    font-size: 5.3vw;
`

const OrangeText = styled.span`
    font-size: inherit;
    color: ${({theme}) => theme.highlight1};
`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: GothicMedium;
`

const CubeImg = styled.img`
    width: 15vw;
    filter: ${({theme}) => theme.darkMode === true ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(324deg) brightness(105%) contrast(104%)' : 'none'}; // turn box to white for darkmode
`

const BottomText = styled.div`  
    width: 50%;
    color: ${({ theme }) => theme.subText};;
    font-size: 1.9vw;
`

const About = () => {
    return (
        <AboutSection id="about">
            <TopWrapper>
                <Subtitle>
                    (Who we are)
                </Subtitle>
                <MainTitle>
                    Australia's pinnacle <br/>
                    society for <OrangeText>blockchain <br/>
                    discovery</OrangeText> and peer to <br/>
                    peer collaboration.
                </MainTitle>
            </TopWrapper>
            <BottomWrapper>
                <CubeImg src={Box}/>
                <BottomText>
                We know that navigating the new blockchain space is scary, and we are here to help. 
                We believe everyone should have fundamental knowledge on a technology as disruptive as the internet.
                </BottomText>
            </BottomWrapper>
        </AboutSection>
    )
}

export default About