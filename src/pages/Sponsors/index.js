import Navbar from '../../components/Navbar'
import { useState } from 'react'
import styled from 'styled-components'
import SponsorsGrid from './SponsorsGrid'

const JinsButton = styled.button`
    border: solid 3px black;
    cursor: pointer;
    position: absolute; 
    display: block;
    top: 50%;
    left: 50%;
`
const SponsorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Sponsors = () => {
    const [show, setShow] = useState(true);
    const handleButt = () => {
        setShow(!show);
    }
    return (
        <SponsorsWrapper>
            {show && <Navbar/>}
            <SponsorsGrid>
            </SponsorsGrid>
            <JinsButton onClick={handleButt}>
                    HIDE
            </JinsButton>
        </SponsorsWrapper>
    )
}

export default Sponsors