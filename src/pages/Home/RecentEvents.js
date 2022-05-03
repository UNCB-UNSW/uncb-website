import styled from 'styled-components'
import Box from '../../assets/events_box.svg'

const RecentEventsSection = styled.section`
    height: 100vh;

    box-sizing: border-box;
    padding: 40px 60px 0 60px; // top right bottom left
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const TitleWrapper = styled.div`
`

const Subtitle = styled.div`
    font-size: 1vw;
    color: #7E7E7E;
    font-family: GothicBold;
    text-transform: uppercase;
`

const Title = styled.div`
    font-size: 4vw;
    font-family: GothicBlack;
`

const OrangeColor = styled.span`
    font-size: inherit;
    color: #FF8C5B;
`

const CubeImg = styled.img`
    width: 15vw;
`

const RecentEvents = () => {
    return (
        <RecentEventsSection>
            <TopWrapper>
                <TitleWrapper>
                    <Subtitle>(What we do)</Subtitle>
                    <Title>
                        Recent <br/> <OrangeColor>Events</OrangeColor>.
                    </Title>
                </TitleWrapper>
                <CubeImg src={Box} alt="Box"/>
            </TopWrapper>

        </RecentEventsSection>
    )
}

export default RecentEvents