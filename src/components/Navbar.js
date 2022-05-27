import BlackLogo from '../assets/blackLogo.svg'
import WhiteLogo from '../assets/whiteLogo.png'
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useContext } from 'react';

const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px 10px 50px;
    border-bottom: 1px solid ${({ theme }) => theme.mainText};

    background-color:  ${({ theme }) => theme.background}; 
    position: sticky;
    top: 0;

    opacity: 0.85;
    z-index: 999;
`

const LinkWrapper = styled.ul`
    display: flex;
    align-items: center;
`

const LinkItems = styled(Link)`
    color: ${({ theme }) => theme.mainText};
    text-decoration: none;  
    font-size: 1.7vw;
    margin: 0 60px 0 60px;
`

const BlogLink = styled.a`
    color: ${({ theme }) => theme.mainText};
    text-decoration: none;  
    font-size: 1.7vw;
    margin: 0 60px 0 60px;
`

const ThemeButton = styled.button`
    background: none;
    cursor: pointer;
`

const Img = styled.img`
    height: 40px;
`

const Navbar = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const ThemeChange = () => {
        if (darkMode)
            theme.dispatch({ type: "LIGHTMODE" });
        else
            theme.dispatch({ type: "DARKMODE" });
    }

    return (
        <NavbarWrapper>
            <Img src={darkMode ? WhiteLogo : BlackLogo} alt="logo" draggable="false" />
            <LinkWrapper>
                <LinkItems to="/">Home</LinkItems>
                <LinkItems to="/team">Team</LinkItems>
                <LinkItems to="/events">Events</LinkItems>
                <LinkItems to="/sponsors">Sponsors</LinkItems>
                <BlogLink href="https://www.uncb.xyz/blog" target='_blank'>Blog</BlogLink>
            </LinkWrapper>
            <ThemeButton onClick={ThemeChange}><Img src={darkMode ? Moon : Sun} alt="darkMode" draggable="false" /></ThemeButton>
        </NavbarWrapper>
    )
}

export default Navbar