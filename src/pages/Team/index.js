import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import pinkCircle from '../../assets/Pink_Circle.png'

const Box = styled.div`
    border: 1px solid black;
    background-color: blue;
    width: 90%;
    height: 100%;
`
const ProfilePic = styled.img`
    display: block;
    margin: 0;
    height: 50px;
    width: 50px;
`
const MatrixWrapper = styled.div`
    margin: 15px;
    position: relative;
    display: grid;
    grid-template-rows: repeat(6, 200px);
    grid-template-columns: repeat(10, 1fr);
    row-gap: 25px;
`

const Team = () => {
    return (
        <div>
            <Navbar/>
            <MatrixWrapper>
                <Box style={{gridRow: "1", gridColumn: "5 / span 2",
                            justifyItems: "center"}}/>
                <Box style={{gridRow: "2", gridColumn: "7 / span 2",
                            marginTop: "-50%"}}/>
                <Box style={{gridRow: "2", gridColumn: "3 / span 2"}}/>
                <Box style={{gridRow: "2", gridColumn: "5 / span 2"}}/>
                <Box style={{gridRow: "3", gridColumn: "3 / span 2", 
                            marginLeft: "50%"}}/>
                <Box style={{gridRow: "3", gridColumn: "5 / span 2", 
                            marginLeft: "50%"}}/>        
                <Box style={{gridRow: "3", gridColumn: "6 / span 2",
                            marginLeft: "100%"}}/> 
            </MatrixWrapper>
        </div>
    )
}

export default Team