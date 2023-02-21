import React, { useState, useEffect} from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem 1rem;
  z-index: 100;
  font-size: 17px;
  width: 100%;

  @media screen and (max-width: 1300px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 868px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
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
const MenuBars = styled(FaBars)`
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
    color: #8ec5fc;
    transition: 0.3s;
    transform: translateY(-2px);
  }
`

const Navbar = ({ toggle }) => {

  return (
    <Nav >
      <Logo to="/">IVY</Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Navbar