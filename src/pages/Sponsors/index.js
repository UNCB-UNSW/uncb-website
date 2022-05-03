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

const PageWrapper = styled.div`
    display: grid;
    flex-grow: 1;
    grid-template-columns: 1fr 1fr;
`

const Title = styled.h1`
  display: block;
  color: #FFD3C0;
  text-align: center;
  font-size: 3em;
  font-weight: 900;
  padding-top: 4vh;
`

const Sponsors = () => {
    const [show, setShow] = useState(true);
    const handleButt = () => {
        setShow(!show);
    }
    return (
        <SponsorsWrapper>
            
            {show && <Navbar/>}
            <PageWrapper>
                <Title>
                    OUR PARTNERS
                </Title>
                <SponsorsGrid>
                </SponsorsGrid>   
            </PageWrapper>

            
            
            <JinsButton onClick={handleButt}>
                    HIDE
            </JinsButton>

        </SponsorsWrapper>
    )
}

export default Sponsors