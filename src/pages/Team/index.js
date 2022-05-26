import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import pinkCircle from '../../assets/Pink_Circle.png'
import Member from './components/Member'
import {execData, dirData, advisorData} from './components/MembersData'

const Box = styled.div`
    border: 1px solid black;
    background-color: blue;
    width: 90%;
    height: 100%;
`

const MatrixWrapper = styled.div`
    margin: 15px;
    position: relative;
    display: grid;
    grid-template-rows: repeat(6, 200px);
    grid-template-columns: repeat(10, 1fr);
    row-gap: 25px;
    column-gap: 15px;
`

const Team = () => {
    const stylesArr = [
        {gridRow: "1", gridColumn: "2"},
        {gridRow: "2", gridColumn: "1"},
        {gridRow: "2", gridColumn: "2"},
        {gridRow: "2", gridColumn: "3"},
        {gridRow: "1", gridColumn: "3"},
        {gridRow: "3", gridColumn: "3"},
        {gridRow: "2", gridColumn: "4"},
        {gridRow: "3", gridColumn: "4"},
        {gridRow: "4", gridColumn: "4"},
        {gridRow: "3", gridColumn: "3"},

        // {gridRow: "2", gridColumn: "2"}, 
        // {gridRow: "1", gridColumn: "3", transform: "translateY(60%)"}, 
        // {gridRow: "2", gridColumn: "3", transform: "translate(20%, 80%)", width: "80%", height: "70%"}, 
        // {gridRow: "2", gridColumn: "4", transform: "translateY(50%)", width: "110%"},
        // {gridRow: "1", gridColumn: "4", transform: "translateY(60%)", width: "90%"},
        // {gridRow: "1", gridColumn: "4", transform: "", height: "55%"},
        // {gridRow: "1", gridColumn: "5", transform: "translateY(60%)", width: "105%"},
        // {gridRow: "2", gridColumn: "5", transform: "translate(20%, 50%, 0)", width: "105%"},
        // {gridRow: "1", gridColumn: "5 / span 2", justifyItems: "center"},
        // {gridRow: "1 / span 2", gridColumn: "3 / span 2", marginTop: "40%"},
        // {gridRow: "2", gridColumn: "7 / span 2", marginTop: "-50%"},
        // {gridRow: "2", gridColumn: "7 / span 2", marginTop: "-50%"},
        // {gridRow: "2", gridColumn: "5 / span 2"},
        // {gridRow: "3", gridColumn: "3 / span 2", marginLeft: "50%"},
        // {gridRow: "3", gridColumn: "5 / span 2", marginLeft: "50%"},
        // {gridRow: "3", gridColumn: "7 / span 2", marginLeft: "50%"},  
    ]

    return (
        <div>
            <Navbar/>
            <MatrixWrapper>
                {execData.map((ele, index) => <Member style={stylesArr[index]} memberData={ele}/>)}
                {/* <Member style={{gridRow: "1", gridColumn: "5 / span 2",
                            justifyItems: "center"}}
                        membersData={execData[0]}/>
                <Member style={{gridRow: "2", gridColumn: "7 / span 2",
                            marginTop: "-50%"}} 
                        membersData={execData[1]}/>
                <Member style={{gridRow: "2", gridColumn: "3 / span 2"}}
                        membersData={execData[2]}/>
                <Member style={{gridRow: "3", gridColumn: "3 / span 2", 
                            marginLeft: "50%"}}
                        membersData={execData[3]}/>
                <Member style={{gridRow: "3", gridColumn: "5 / span 2", 
                            marginLeft: "50%"}}
                        membersData={execData[4]}/>
                <Member style={{gridRow: "2", gridColumn: "5 / span 2"}}
                        membersData={execData[5]}/> */}
            </MatrixWrapper>
        </div>
    )
}

export default Team