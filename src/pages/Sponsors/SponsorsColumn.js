import React from 'react'
import styled from 'styled-components'

const ColumnWrapper = styled.div`
  margin-top: ${props => props.margin}vh;
  display: flex;
  flex-direction: column;
  //border: 3px solid black;
  
  background-color: rgba(230, 230, 230, 0.22);
  backdrop-filter: blur(30px);
  
  border-radius: 1vw;
  padding: 1vw;
  align-items: center;
  border: transparent solid;
  box-sizing: border-box;
  
  box-shadow: -1px -1px white;

  &:hover {
    border: red solid;
  }
`
const Image = styled.img`
  max-width: 10vw;
  background-color: transparent;
`

const Text = styled.p`
  background-color: transparent;
`

const Name = styled.h1`
  text-align: center;
  background-color: transparent;
`

const SponsorsColumn = ({margin}) => {
  return (
    <ColumnWrapper margin={margin}>
      <Image src="https://upload.wikimedia.org/wikipedia/en/c/ce/Goomba.PNG" alt="" />
      <Name>GOOMBA</Name>
      <Text>
        testingsjdfklas;djf
        testingsjdfklas
        testingsjdfklas
        testingsjdfklas
        testingsjdfklas
      </Text>
    </ColumnWrapper>
  )
}

export default SponsorsColumn