import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

const CloseBtn = styled(AiOutlineClose)`
	position: absolute;
	top: 0;
	right: 0;
	color: white;	
`

const ModalWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`

const Modal = ({ isOpen, handleClose, children }) => {
	return (
		<>
			{isOpen && 
			<ModalWrapper>
				{children}
				<CloseBtn onClick={handleClose}/>
			</ModalWrapper>}
		</>
	)
}

export default Modal;