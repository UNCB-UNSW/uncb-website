import styled from 'styled-components'
import Box from '../../assets/articles_box.svg'
import {useState, useEffect} from "react";

const ArticlesSection = styled.section`
    display: flex;
    border-bottom: 1px solid black;
`

const LeftWrapper = styled.div`
    width: 25vw;
    border-right: 1px solid black;

    display: flex;
    justify-content: center;
`

const Container = styled.div`
    text-align: center;
    margin-top: 30px;
`

const Subtitle  = styled.div`
    text-align: left;
    text-transform: uppercase;
    font-family: GothicBold;
    font-size: 18px;
    color: #7E7E7E;
`

const Cube = styled.img`
    width: 10vw;
`

const ArticlesTitle = styled.div`
    font-size: 3.5vw;
    font-family: GothicBlack;
`

const Orange = styled.span`
    font-size: inherit;
    color: #ff8c5b;
`

const ArticlesButton = styled.button`
    padding: 10px 25px 10px 25px;
    border: 1px solid black;
`

const RightWrapper = styled.div`
    flex-grow: 1;
    padding: 30px;
    display: flex;
    justify-content: center;
`

const ArticleGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
`

const ArticleItem = styled.div`
    padding: 30px;
`

const ArticleImg = styled.img`
    height: 40vh;
    width: 32vw;
    background-position: center center;
    background-repeat: no-repeat; /* Background image doesn’t tile */ 
    background-size: cover; /* This is what makes the background image rescale based on the container’s size */
    background-image: url(${props => props.backgroundImg});
    filter: saturate(10%) contrast(120%) hue-rotate(90deg) brightness(100%);
`

const Title = styled.h1`
    padding: 1.5vh 0 5vh 0;
`

const ReadArticleButton = styled.a`
    text-decoration: none;
    cursor: pointer;
    padding: 10px;
    border: 1px solid black;
    font-family: Raleway;
    font-weight: 500;
    color: #4F4F4F;
`

const Yellow = styled.span`
    color: #FFD700;
`

const RecentArticles = () => {
    const [Data, setData] = useState([])

    const fetchData = () => {
        fetch('https://uncb.xyz/blog/ghost/api/v3/content/posts/?key=837c5e73ef5b72d3b5e9e23be8&fields=title,url,feature_image,published_at&limit=4')
        .then(response => response.json())
        .then(result => {
            result.posts.forEach((post) => {
                setData(prevData => {
                    return [...prevData, {
                        "url": post.url,
                        "title": post.title,
                        "feature_image": post.feature_image,
                    }];
                });
            }) 
        })
    }
    
    useEffect(() => {
        fetchData()
    }, []);
    
    console.log(Data)
    return (
        <ArticlesSection>
            <LeftWrapper>
                <Container>
                    <Subtitle>(what we do)</Subtitle>
                    <Cube src={Box}/>
                    <ArticlesTitle>Recent <br/><Orange>Articles</Orange>.</ArticlesTitle>
                    <ArticlesButton>All Articles</ArticlesButton>
                </Container>
            </LeftWrapper>
            <RightWrapper>
                <ArticleGrid>
                    {Data.map(item => (
                        <ArticleItem>
                            <ArticleImg src={item.feature_image}/>
                            <div>
                                <Title>{item.title}</Title>
                                <ReadArticleButton target="__blank" href={item.url}>Read Article <Yellow>{'>'}</Yellow></ReadArticleButton>
                            </div>
                        </ArticleItem>
                    ))}
                </ArticleGrid>
            </RightWrapper>
        </ArticlesSection>
    )
}

export default RecentArticles;