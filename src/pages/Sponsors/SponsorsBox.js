import React from 'react'
import styled from 'styled-components'

const NewspaperText = styled.p`
  box-sizing: border-box;
  padding: 1em;
  font-size: 0.3em;
  background-color: transparent;
  text-align: justify;
  text-justify: inter-word;
`

const SponsorsBoxWrapper = styled.div`
  padding-top: 1vh;
  background-color: #FFD3C0;
  flex: 1 1 auto;
  display: inline-block;
  &:hover {
    background-color: red;
  }
`

const Name = styled.h1`
  text-align: center;
  background-color: transparent;
`

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1vh;
`

const SponsorsBox = ({name, content, logo}) => {
  return (
    <SponsorsBoxWrapper>
      <Logo src={logo} ></Logo>
      <Name>{name}</Name>
      <NewspaperText>{content}</NewspaperText>
    </SponsorsBoxWrapper>
  )
}

export default SponsorsBox;