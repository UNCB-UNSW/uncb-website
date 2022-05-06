import React from 'react'
import styled from 'styled-components'
import SponsorsColumn from './SponsorsColumn'


const SponsorsGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 1vw;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background-color: transparent;
  overflow: hidden;
`


const SponsorsColumns = () => {
  return (
    <SponsorsGrid>
      <SponsorsColumn margin={30}/>
      <SponsorsColumn margin={0}/>
      <SponsorsColumn margin={40}/>
      <SponsorsColumn margin={20}/>
      <SponsorsColumn margin={10}/>
      <SponsorsColumn margin={30}/>
    </SponsorsGrid>
  )
}

export default SponsorsColumns