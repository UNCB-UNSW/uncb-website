import styled from 'styled-components'
import { Link } from "react-router-dom";
import FullLogo from "../assets/FullLogo.svg"

const FooterWrapper = styled.footer`
    background: black;
    height: 20vh;
`

const Logo = styled.img`
    width: 12vw;
    margin: 5vh 0 0 5vw;
    background: black;
`

const Navbar = () => {
    return (
        <FooterWrapper>
            <Logo src={FullLogo} draggable="false"/>
        </FooterWrapper>
    )
}

export default Navbar