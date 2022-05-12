import { AuthConsumer } from '../../providers/AuthProvider';
import { useEffect } from 'react';
import Workouts from '../workouts/Workouts.js';

const Dashboard = ({ user, workouts }) => {

  return (
    <>
    <Workouts workouts={workouts}/>
    </>
  )

}

const ConnectedAuthDashboard = (props) => (
  <AuthConsumer>
  { value => <Dashboard { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedAuthDashboard;