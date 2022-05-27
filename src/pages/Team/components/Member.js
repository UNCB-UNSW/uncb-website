import React from 'react'
import styled from 'styled-components'
import Eric from '../teamPhotos/eric.jpg'

const MemberWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    }

    & * {
        background-color: transparent;
    }
`

const MemberDetails = styled.div`
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 0;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    text-align: center;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    ${MemberWrapper}:hover & {
        opacity: 1;
        transform: translateY(-50%);
        color: white;
    }

    & > h2 {
        font-size: 1rem;
        line-height: calc(1rem + 10px);
    }

    & > h4 {
        font-size: 0.7rem;
        line-height: calc(1rem + 10px);
    }

    & > h6 {
        font-size: 0.5rem;
        line-height: calc(1rem + 10px);
    }
`

const MemberPic = styled.div`
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat; /* Background image doesn’t tile */ 
    background-size: cover; /* This is what makes the background image rescale based on the container’s size */
    background-image: url(${props => props.src});
    filter: grayscale(0.9);
    transition: 0.5s ease-in-out;
    &:hover {
        filter: none;
    }
`

const Member = ({memberData, style}) => {
    return (
        <MemberWrapper style={style}>
            <MemberPic src={Eric}></MemberPic>
            <Overlay>
                <MemberDetails>
                    <h2>{memberData.name}</h2>
                    <h4>{memberData.description}</h4>
                    <h6>{memberData.role}</h6>
                </MemberDetails>
            </Overlay>
        </MemberWrapper>
    )
}

export default Member