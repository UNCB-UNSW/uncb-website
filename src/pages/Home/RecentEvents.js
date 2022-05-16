import styled from 'styled-components'
import Box from '../../assets/events_box.svg'
import {useState, useEffect} from "react";

const RecentEventsSection = styled.section`
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
    border-top: 0.5px solid black;
    border-bottom: 0.5px solid black;
    padding: 30px 30px 30px 0;
    display: flex;
`

const BlogImg = styled.div`
    height: 30vh;
    width: 30vw;
    background-position: center;
    background-image: url(${props => props.backgroundImg});
    filter: saturate(10%) contrast(120%) hue-rotate(90deg) brightness(100%);

`

const RightWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    margin-left: 30px;
`

const TopInfo = styled.div`
    font-family: GothicBlack;
    font-size: 32px;
    flex-grow: 1;
`

const BottomInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const Date = styled.div`
    font-family: GothicMedium;
    color: #656565;
    font-size: 18px;
    align-self: flex-end;
`

const LearnMore = styled.a`
    border: 2px solid black;
    border-radius: 5px;

    padding: 10px;
    color: black;
    text-decoration: none;
    cursor: pointer;
`

const Yellow = styled.span`
    color: #FFD700;
`

const RecentEvents = () => {
    const [Data, setData] = useState([])

    const fetchData = () => {
        fetch('https://uncb.xyz/blog/ghost/api/v3/content/posts/?key=837c5e73ef5b72d3b5e9e23be8&fields=title,url,feature_image,published_at&limit=3')
        .then(response => response.json())
        .then(result => {
            result.posts.forEach((post) => {
                setData(prevData => {
                    return [...prevData, {
                        "url": post.url,
                        "title": post.title,
                        "feature_image": post.feature_image,
                        "date": post.published_at
                    }];
                });
            })      
        })
    }

    
    useEffect(() => {
        console.log('WTFFF')
        fetchData()
    }, []);
    
    console.log(Data)
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
            {Data.map((data) => {
                let date = new window.Date(data.date)
                date = date.toLocaleDateString('en-AU')
                return (
                    <BlogWrapper>
                        <BlogImg backgroundImg={data.feature_image}/>
                        <RightWrapper>
                            <TopInfo>{data.title}</TopInfo>
                            <BottomInfo>
                                <Date>{date}</Date>
                                <LearnMore href={data.url}>Learn More <Yellow>{'>'}</Yellow></LearnMore>
                            </BottomInfo>
                        </RightWrapper>
                    </BlogWrapper>
                )
            })}
        </RecentEventsSection>
    )
}

export default RecentEvents