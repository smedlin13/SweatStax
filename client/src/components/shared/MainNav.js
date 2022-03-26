import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';

const MainNav = ({user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when logged in
    if (user) {
      return (
        <>
          <Link to='/profile'>
            <li>
              Profile
            </li>
          </Link>
          <Link to='/workouts'>
            <li>
              Workouts
            </li>
          </Link>
          <li onClick={ () => handleLogout() }>
            Logout
          </li>
        </>
      )
    } else {
      // links to show up when Not logged in
      return (
        <>
          <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              Register
            </li>
          </Link>
        </>
      )
    }
  }
  
  // links that show up regardless of login or out
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>
              Home
            </li>
          </Link>
            { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedMainNav = (props) => (
  <AuthConsumer> 
    { value => <MainNav { ...props } { ...value } /> }
  </AuthConsumer>
)
 
export default ConnectedMainNav;