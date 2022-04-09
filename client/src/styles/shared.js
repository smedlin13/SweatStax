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
