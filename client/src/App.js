import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import MainNav from './components/shared/MainNav';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import Profile from './components/shared/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute'

const App = () => (
  <>
    <MainNav />
    <FetchUser>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/" element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
    </FetchUser>
  </>
)

export default App;

