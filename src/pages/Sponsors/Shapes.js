import React from 'react'
import styled from 'styled-components'
import PinkCircle from '../../assets/Pink_Circle.png'

const ShapesWrapper = styled.div`
  filter: blur(100px);
`

const Squaretwo = styled.div`
  position: absolute;
  top: 100vh;
  left: 75%;
  height: 100vh;
  width: 100vh;
  border-radius: 50vh;
  background-color: #ff45e3;
`

const Squarethree = styled.div`
  position: absolute;
  top: 90vh;
  left: 10%;
  height: 30vh;
  width: 30vh;
  background-color: #272D4A;
`
const Shape = styled.img`
  position: absolute;
  top: 50vh;
  left: 55%;
  background-color: transparent;
`

const Shapetwo = styled.img`
  position: absolute;
  top: 40%;
  left: 10%;
  background-color: transparent;
`


const Shapes = () => {
  return (
    <ShapesWrapper>
      <Shape src={PinkCircle}/>
      <Shapetwo src={PinkCircle}/>
      <Squarethree></Squarethree> 
    </ShapesWrapper>
  )
}

export default Shapes