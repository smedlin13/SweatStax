import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import {Navbar, Icon, NavItem, Dropdown} from 'react-materialize';
import React from 'react';
// this next import is important for materialize to actually show up!
import 'materialize-css/dist/css/materialize.min.css';
import { SweatNav, SweatNavItem, DropdownId } from '../../styles/shared';
import Logo from '../images/Logo.jpg';

const MainNav = ({user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
          <SweatNavItem href='/profile'>
            {/* <Link to='/profile'> */}
              Profile
            {/* </Link> */}
          </SweatNavItem>
          <SweatNavItem href='/workouts'>
            {/* <Link to='/workouts'> */}
              Workouts
            {/* </Link> */}
          </SweatNavItem>
          <SweatNavItem onClick={ () => handleLogout() }>
            Logout
            {/* </Link> */}
          </SweatNavItem>
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
          <SweatNavItem herf='/login'>
              Login
          </SweatNavItem>
          <SweatNavItem href='/register'>
              Register
          </SweatNavItem>
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <>
      <SweatNav
        alignLinks="right"
        brand=
        {<a className="brand-logo left" href="/"> 
        <img src={Logo}
        height="80px" />
        </a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        {/* <NavItem href='/profile'>
          Profile
        </NavItem>
        
          { rightNavItems() } */}
          <DropdownId
            id="Dropdown_14"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={<a href="#!">Login</a>}
          >
        {/* <SweatNavItem> */}
            { rightNavItems() }
        {/* </SweatNavItem> */}
      </DropdownId>
      </SweatNav>
    </>
  )
}

const ConnectedMainNav = (props) => (
  <AuthConsumer> 
    { value => <MainNav { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedMainNav;