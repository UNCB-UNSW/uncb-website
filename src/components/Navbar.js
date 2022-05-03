import Logo from '../assets/logo.svg'
import Moon from '../assets/moon.svg'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 50px 10px 50px;
    border-bottom: 2px solid #cacac5;
`

const LinkWrapper = styled.ul`
    display: flex;
    align-items: center;
`

const LinkItems = styled(Link)`
    color: black;
    text-decoration: none;  
    font-size: 1.5vw;
    margin: 0 60px 0 60px;
`

const Img = styled.img`
    height: 40px;
`

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Img src={Logo} alt="logo" draggable="false"/>
            <LinkWrapper>
                <LinkItems to="/">Home</LinkItems>
                <LinkItems to="/team">Team</LinkItems>
                <LinkItems to="/events">Events</LinkItems>
                <LinkItems to="/sponsors">Sponsors</LinkItems>
                <LinkItems to="/blog">Blog</LinkItems>
            </LinkWrapper>
            <Img src={Moon} alt="darkMode" draggable="false"/>
        </NavbarWrapper>
    )
}

export default Navbar