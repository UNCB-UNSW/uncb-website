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
    color: #7E7E7E;
    font-size: 1vw;
    text-transform: uppercase;
`

const MainTitle = styled.div`
    font-family: GothicBlack;
    font-size: 5.3vw;
`

const OrangeText = styled.span`
    font-size: inherit;
    color: #FF8C5B;
`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: GothicMedium;
`

const CubeImg = styled.img`
    width: 15vw;
`

const BottomText = styled.div`  
    width: 50%;
    color: #646464;
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
                    We know that choosing the unconventional path of entrepreneurship is hard. 
                    Which is why we serve as a clearinghouse of opportunities for founders and 
                    investors to retain the potential that our city needs.
                </BottomText>
            </BottomWrapper>
        </AboutSection>
    )
}

export default About