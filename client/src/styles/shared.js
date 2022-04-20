import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Button, Dropdown, Parallax } from 'react-materialize';

export const SweatNav = styled(Navbar)`
  background: white;
  height: 80px;
  color: black;
`

export const SweatNavItem = styled(NavItem)`
  color: black;
  font-size: 18px;
`

export const DropdownId = styled(Dropdown)`
  color: black;
  width: 100%;

`

export const ParallaxId = styled(Parallax)`
  width: 100%;
  height: 400px;
`

export const ProfileView = styled.div`
  padding: 10px 50px 10px 50px;
  display: block;
  flex-direction: row;
  border-style: solid;
  margin: 20px 50% 20px 20px;
  position: relative;
  height: 350px;
  .grid-container {
    display: grid;
    grid-template-rows: 80px 200px;
  }
`

export const ProfileImg = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  max-width: 100%;
  padding: 5px;
  display: block;
`

export const H1 = styled.h1`
  font-size: 48px;
  margin: 0 auto;
`

export const H2 = styled.h2`
  font-size: 21px;
  margin: 0 auto;
`