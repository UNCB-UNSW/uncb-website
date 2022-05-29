import React, { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Modal from './Modal'

const ColourIn = keyframes`
    0% {
        filter: grayscale(0.8);
    }
    100% {
        filter: none;
    }
`

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
    transform: translateY(50%);
    opacity: 0;
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
        transform: translateY(0);
        color: white;
    }

    & > h2 {
        font-size: 1.1rem;
        line-height: calc(2rem + 10px);
    }

    & > h4 {
        font-size: 0.8rem;
        line-height: calc(2rem + 10px);
    }

    & > h6 {
        font-size: 0.7rem;
        line-height: calc(2rem + 10px);
    }
`

const MemberPic = styled.div`
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat; /* Background image doesn’t tile */ 
    background-size: cover; /* This is what makes the background image rescale based on the container’s size */
    background-image: url(${props => (props.src)});
    filter: grayscale(0.8);
    transition: 0.5s ease-in-out;
    &:hover {
        filter: none;
    }
`

const ViewProfileBtn = styled.button`
    width: 200px;
    height: auto;
    z-index: 4;
    color: white;
`

const Profile = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ProfileDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfilePic = styled(MemberPic)`
    width: 25%;
    height: 60%;
    border-radius: 20px;
    -webkit-animation: ${ColourIn} 2s ease-in-out forwards;
`

const Member = ({memberData, style}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MemberWrapper style={style}>
            <MemberPic src={memberData.imgPath}></MemberPic>
            <Overlay>
                <MemberDetails>
                    <h2>{memberData.name}</h2>
                    <h4>{memberData.description}</h4>
                    <h6>{memberData.role}</h6>
                </MemberDetails>
                <ViewProfileBtn onClick={() => setIsOpen(true)}>View {memberData.name + '\'s'} Profile</ViewProfileBtn>
            </Overlay>
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                <Profile>
                    <ProfilePic src={memberData.imgPath}></ProfilePic>
                    <div>
                        <span>Hi, I'm {memberData.name}</span>
                    </div>
                </Profile>
            </Modal>
        </MemberWrapper>
    )
}

export default Member