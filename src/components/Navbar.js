import React, { useState, useEffect} from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { FaBars } from 'react-icons/fa'
import Menu from '../images/menu.svg'

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0;
  padding: 3vh 5vw;
  z-index: 100;
  font-size: 17px;
  width: 100%;

  @media screen and (max-width: 1300px) {
    margin: 1rem 0 0;
    /* padding: 3vh 5vw; */
  }

  /* @media screen and (max-width: 868px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  } */
`
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`
const MenuBars = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;


  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavMenuLinks = styled(Link)`
  ${NavLink}

  &:hover {
    color: #89a5b7;
    transition: 0.3s;
    transform: translateY(-2px);
  }
`
const NavHr = styled.hr`
    width:90%;
    height: 5px;
    background: #fff;
    margin: 0 auto;
    margin-bottom: -5rem;

    @media screen and (max-width: 1300px) {
      margin-bottom: -12rem;
    }

   @media screen and (max-width: 868px) {
    margin-bottom: -12rem;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: -12rem;
    }
`

const Navbar = ({ toggle }) => {

  return (
    <>
    <Nav >
      <Logo to="/">IVY</Logo>
      <MenuBars src={Menu} onClick={toggle}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
    <NavHr />
    </>
  )
}

export default Navbar