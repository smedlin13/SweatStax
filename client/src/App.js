import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import MainNav from './components/shared/MainNav';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import Profile from './components/auth/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Workouts from './components/workouts/Workouts';
import WorkoutShow from './components/workouts/WorkoutShow';
import Dashboard from './components/shared/Dashboard';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => (
  <>
    <MainNav />
    <FetchUser>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/:workoutId" element={<WorkoutShow />} />
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

