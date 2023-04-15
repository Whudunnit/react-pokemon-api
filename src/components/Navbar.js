import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import Icon from '../assets/home_icon.png'
import styled from 'styled-components';

const LogoLink = styled(Link)`
display: inline-block;
`;

const LogoImg = styled.img`
width: 50px;
height: 50px;

@media(max-width: 768px) {
  width: 30px;
  height: 30px;
}

@media(max-width: 480px) {
  width: 20px;
  height: 20px;
}
`;


const Navbar = () => {

  const [click, setClick] = useState(false);  
  const handleClick = () => setClick(!click);  

  const [bg, setBg] = useState(false);

  const changeBg = () => {

        if(window.scrollY >= 80){

            setBg(true);
        }
        else{

            setBg(false);
        }
  }

  window.addEventListener("scroll", changeBg);

  return (
    <header className={bg ? 'header header-bg' : 'header'}>
        <LogoLink to="/">
            <LogoImg src={Icon} alt="Pokémon" />
        </LogoLink>
        <ul className={click ? 'nav-menu nav-active' : 'nav-menu'} >
            <li> <Link to="/">Kezdőoldal</Link> </li>
            <li> <Link to="/pokemon">Összes Pokémon</Link> </li>
            <li> <Link to="/search">Pokémon Keresése</Link> </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {
                click ? <FaTimes size={20} style={{color: "#fff"}} />
                      : <FaBars size={20} style={{color: "#fff"}} />  
            }
        </div>
    </header>
  )
}

export default Navbar