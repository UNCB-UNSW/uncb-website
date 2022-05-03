import styled from 'styled-components'



const SponsorsWrapper = styled.div`
  display: inline-grid;
  box-sizing: border-box;
  border: solid 3px;
  width: 50%;
  flex-grow: 1;

  margin-left: auto;
  column-gap: 1vw;
  row-gap: 1vw;
  padding: 1vw;

  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto auto 1fr;
`

const SponsorsBoxWrapper = styled.div`
  background-color: #FFD3C0;
  overflow-wrap: break-word;
`
const content = "JLKSDJLKFJSLKDJLFKJ SLKDJFLSK:DJF SDKFJSLDKFJ SDLKFJSDLKFJ SLDKJFSDKFJJLKSDJLKFJSLKDJLFKJ SLKDJFLSK:DJF SDKFJSLDKFJ SDLKFJSDLKFJ SLDKJFSDKFJJLKSDJLKFJSLKDJLFKJ SLKDJFLSK:DJF SDKFJSLDKFJ SDLKFJSDLKFJ SLDKJFSDKFJJLKSDJLKFJSLKDJLFKJ SLKDJFLSK:DJF SDKFJSLDKFJ SDLKFJSDLKFJ SLDKJFSDKFJ ";

const SponsorsBox = ({name, content}) => {
  return (
    <SponsorsBoxWrapper>
      {name}
      {content}
    </SponsorsBoxWrapper>
  )
}



const SponsorsGrid = () => {
  return (
      <SponsorsWrapper>
        <SponsorsBox name={"UNSW"} content={content}></SponsorsBox>
        <SponsorsBox name={"UNSW"}></SponsorsBox>
        <SponsorsBox name={"UNSW"}></SponsorsBox>
        <SponsorsBox name={"UNSW"}></SponsorsBox>
        <SponsorsBox name={"UNSW"}></SponsorsBox>
        <SponsorsBox name={"UNSW"}></SponsorsBox>
        <SponsorsBox name={"UNSW"}></SponsorsBox>
      </SponsorsWrapper>
  )
}

export default SponsorsGrid