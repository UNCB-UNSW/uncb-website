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

const BlogWrapper = styled.div`

`
const BlogImg = styled.img`
`

const BlogTitle = styled.div`
`

const Date = styled.div`
`

const LearnMore = styled.div`
`
let apiData = []

fetch('https://uncb.xyz/blog/ghost/api/v3/content/posts/?key=837c5e73ef5b72d3b5e9e23be8&fields=title,url,feature_image,excerpt&limit=3')
.then(response => response.json())
.then(result => {
    result.posts.forEach((post) => {
        apiData.push({
            "url": post.url,
            "title": post.title,
            "feature_image": post.feature_image,
            "date": post.published_at
        });
    })
})
console.log(apiData);

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
            {apiData.map((data) => {
                console.log('ffff');
                return (
                    <BlogWrapper>
                        <BlogImg src={data.feature_image}/>
                        <BlogTitle>{data.title}</BlogTitle>
                        <Date>{data.date}</Date>
                        <LearnMore href={data.url}>Learn More '{'>'}'</LearnMore>
                    </BlogWrapper>
                )
            })}
        </RecentEventsSection>
    )
}

export default RecentEvents