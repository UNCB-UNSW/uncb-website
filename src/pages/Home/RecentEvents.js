import styled from 'styled-components'
import Box from '../../assets/events_box.svg'
import {useState, useEffect} from "react";

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
                <div>
                    <Subtitle>(What we do)</Subtitle>
                    <Title>
                        Recent <br/> <OrangeColor>Events</OrangeColor>.
                    </Title>
                </div>
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
                                <LearnMore target="__blank" href={data.url}>Learn More <Yellow>{'>'}</Yellow></LearnMore>
                            </BottomInfo>
                        </RightWrapper>
                    </BlogWrapper>
                )
            })}
        </RecentEventsSection>
    )
}

const RecentEventsSection = styled.section`
    box-sizing: border-box;
    padding: 40px 60px 0 60px; // top right bottom left
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Subtitle = styled.div`
    font-size: 1vw;
    color: ${({ theme }) => theme.subtitle};
    font-family: GothicBold;
    text-transform: uppercase;
`

const Title = styled.div`
    font-size: 4vw;
    font-family: GothicBlack;
`

const OrangeColor = styled.span`
    font-size: inherit;
    color: ${({ theme }) => theme.highlight1};
`

const CubeImg = styled.img`
    width: 15vw;
    filter: ${({theme}) => theme.darkMode === true ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(324deg) brightness(105%) contrast(104%)' : 'none'}; // turn box to white for darkmode
`

const BlogWrapper = styled.div`
    border-top: 0.5px solid ${({ theme }) => theme.subText};
    border-bottom: 0.5px solid ${({ theme }) => theme.subText};
    padding: 30px 30px 30px 0;
    display: flex;
`

const BlogImg = styled.div`
    height: 35vh;
    width: 30vw;
    background-position: center center;
    background-repeat: no-repeat; /* Background image doesn’t tile */ 
    background-size: cover; /* This is what makes the background image rescale based on the container’s size */
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
    font-size: 1.5vw;
    flex-grow: 1;
`

const BottomInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const Date = styled.div`
    font-family: GothicMedium;
    color: ${({ theme }) => theme.subtitle};;
    font-size: 18px;
    align-self: flex-end;
`

const LearnMore = styled.a`
    border: 1px solid ${({ theme }) => theme.mainText};;
    padding: 10px;
    color: ${({ theme }) => theme.mainText};
    text-decoration: none;
    cursor: pointer;
`

const Yellow = styled.span`
    color: ${({ theme }) => theme.highlight1};;
`

export default RecentEvents