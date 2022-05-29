import React from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'

const popSwirl = keyframes`
	0% {
		transform: scale(0) rotate(360deg);
	}
	60% {
		transform: scale(0.8) rotate(-10deg);
	}
	100% {
		transform: scale(1) rotate(0deg);
	}
`

const CloseBtn = styled(AiOutlineClose)`
	position: absolute;
	top: 20%;
	right: 20%;
	color: black;
	z-index: 999;
`

const ModalWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(243, 244, 247);
	display: flex;
	align-items: center;
	justify-content: center;
	-webkit-animation: ${popSwirl} 1s ease forwards;
`

const Modal = ({ isOpen, handleClose, children }) => {

	return ReactDOM.createPortal(
		<>
			{isOpen &&
				<ModalWrapper>
					{children}
					<CloseBtn size={50} onClick={handleClose} />
				</ModalWrapper>}
		</>,
		document.getElementById('portal')
	)
}

export default Modal;