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
    column-gap: 10px;
`

const MatrixItemWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const Team = () => {
    const stylesArr = [
        {gridRow: "1", gridColumn: "2", transform: "translate3d(0, 50%, 0) scale(0.9)"},
        {gridRow: "2", gridColumn: "1", transform: "translate3d(0, 0, 0) scale(0.7"},
        {gridRow: "2", gridColumn: "2",  transform: "translate3d(-10.5%, 40%, 0) scale(0.8)"},
        {gridRow: "2", gridColumn: "3", transform: "translate3d(-15%, 60%, 0) scale(0.7)"},
        {gridRow: "1", gridColumn: "3", transform: "translate3d(0, 60%, 0) scale(0.75)"},
        {gridRow: "1", gridColumn: "4", transform: "translate3d(-10%, 0, 0) scale(0.75"},
        {gridRow: "2", gridColumn: "4", transform: "translate3d(-10%, 0, 0) scale(0.85"},
        {gridRow: "3", gridColumn: "4", transform: "translate3d(-15%, 0, 0) scale(0.9"},
        {gridRow: "2", gridColumn: "5", transform: "translate3d(-20%, 0, 0) scale(0.8"},
        {gridRow: "3", gridColumn: "3", transform: "translate3d(-6%, 0, 0) scale(0.95"},
    ]

    return (
        <div>
            <Navbar/>
            <MatrixWrapper>
                {execData.map((ele, index) => {
                    return (
                        <MatrixItemWrapper style={stylesArr[index]} >
                            <Member memberData={ele}/>
                        </MatrixItemWrapper>
                    )
                })}
            </MatrixWrapper>
        </div>
    )
}

export default Team