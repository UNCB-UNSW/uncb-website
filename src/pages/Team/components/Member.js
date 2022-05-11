import React from 'react'
import styled from 'styled-components'
import pinkCircle from '../../../assets/Pink_Circle.png'

const MemberWrapper = styled.div`
    width: 100%;
    border: 1px solid red;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`
const Overlay = styled.div`
    background-color: rgba(20,20,20,.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;

    ${MemberWrapper}:hover &{
        opacity: 1;
        transform: translateY(-50%);
	    color: white;
    }
`

const MemberDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    position: absolute;
    top: 50%;
    left: 0;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    ${MemberWrapper}:hover & {
        opacity: 1;
        transform: translateY(-50%);
        color: white;
    }
`

const MemberPic = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    object-fit: contain;
`

const Member = ({membersData, style}) => {
    return (
        <MemberWrapper style={style}>
            <MemberPic src={pinkCircle}></MemberPic>
            <Overlay>
                <MemberDetails>
                    <p>Placeholder text</p>
                </MemberDetails>
            </Overlay>
        </MemberWrapper>
    )
}

export default Member