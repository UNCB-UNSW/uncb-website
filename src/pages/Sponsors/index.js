import Navbar from '../../components/Navbar'
import { useState } from 'react'
import styled from 'styled-components'
import SponsorsColumns from './SponsorsColumns'
import Shapes from './Shapes'
import Squares from '../../assets/squares.svg'

const JinsButton = styled.button`
    border: solid 3px black;
    cursor: pointer;
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    z-index: 1;
`
const SponsorsWrapper = styled.div`
    //background-color: #c2c8ff;
`

const Title = styled.h1`
    padding-top: 35vh;
    padding-bottom: 10vh;

    max-height: 35vh;
    text-align: center;
    background-color: #FFD700;

    //font-family: 'Gothic A1';
    position: relative;
    z-index: 999;
    font-size: 2em;
    font-weight: 900px;
    overflow-x: hidden;
`

const Graphic = styled.img`
    background-color: transparent;
    display: block;
    position: absolute;
    top: -55vh;
    left: 50vw;
`

const Sponsors = () => {
    const [show, setShow] = useState(true);
    const handleButt = () => {
        setShow(!show);
    }
    return (
        <SponsorsWrapper>
            <Shapes></Shapes>   
            {show && <Navbar/>}
            <Title>
                <Graphic src={Squares} alt="" />
                OUR SPONSORS
            </Title>
            <JinsButton onClick={handleButt}>
                    HIDE
            </JinsButton>
            <SponsorsColumns/>
        </SponsorsWrapper>
    )
}

export default Sponsors