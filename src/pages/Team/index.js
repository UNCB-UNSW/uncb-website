import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import Member from './components/Member'
import { execData, dirData } from './components/MembersData'

const MainContainer = styled.section`
    display: flex;
    max-width: 100vw;
    overflow: clip;
`

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-family: GothicBlack;
    font-size: 6vh;
    width: 60vh;
    color: ${({ theme }) => theme.mainText};
    text-align: center;
    transform: ${props => props.director ? "rotate(90deg)" : "rotate(-90deg)"}
`

const MatrixWrapper = styled.div`
    flex: 4;
    display: flex;
    justify-content: center;
`

const MatrixContainer = styled.div`
    margin: 15px;
    position: relative;
    display: grid;
    grid-template-rows: repeat(3, 28vh);
    grid-template-columns: repeat(5, 13vw);
    row-gap: 25px;
    column-gap: 10px;
`

const MatrixItemWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const Team = () => {
    const stylesArr = [
        {gridRow: "1", gridColumn: "2", transform: "translate3d(0, 50%, 0) scale(0.83)"},
        {gridRow: "2", gridColumn: "1", transform: "translate3d(0, 0, 0) scale(0.9)"},
        {gridRow: "2", gridColumn: "2",  transform: "translate3d(-10.5%, 40%, 0) scale(0.78)"},
        {gridRow: "2", gridColumn: "3", transform: "translate3d(-15%, 60%, 0) scale(0.81)"},
        {gridRow: "1", gridColumn: "3", transform: "translate3d(0, 60%, 0) scale(0.79)"},
        {gridRow: "1", gridColumn: "4", transform: "translate3d(-10%, 0, 0) scale(0.82)"},
        {gridRow: "2", gridColumn: "4", transform: "translate3d(-10%, 0, 0) scale(0.85)"},
        {gridRow: "3", gridColumn: "4", transform: "translate3d(-15%, 0, 0) scale(0.83)"},
        {gridRow: "2", gridColumn: "5", transform: "translate3d(-20%, 0, 0) scale(0.81)"},
        {gridRow: "3", gridColumn: "5", transform: "translate3d(-20%, -10%, 0) scale(0.93)"},
    ]   

    return (
        <div>
            <Navbar/>
            <MainContainer>
                <Wrapper>
                    <Title>
                        Meet the Execs
                    </Title>
                </Wrapper>
                <MatrixWrapper>
                    <MatrixContainer>
                        {execData.map((ele, index) => {
                            return (
                                <MatrixItemWrapper style={stylesArr[index]} >
                                    <Member memberData={ele}/>
                                </MatrixItemWrapper>
                            )
                        })}
                    </MatrixContainer>
                </MatrixWrapper>
            </MainContainer>

            <MainContainer>
                <MatrixWrapper>
                    <MatrixContainer>
                        {dirData.map((ele, index) => {
                            return (
                                <MatrixItemWrapper style={stylesArr[index]} >
                                    <Member memberData={ele}/>
                                </MatrixItemWrapper>
                            )
                        })}
                    </MatrixContainer>
                </MatrixWrapper>
                <Wrapper>
                    <Title director>
                        Meet the Directors
                    </Title>
                </Wrapper>
            </MainContainer>
        </div>
    )
}

export default Team