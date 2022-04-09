import { AuthConsumer } from '../../providers/AuthProvider';
import { useEffect } from 'react';

const Dashboard = ({ user }) => {


}

const ConnectedAuthDashboard = (props) => (
  <AuthConsumer>
  { value => <Dashboard { ...props } { ...value } />}
  </AuthConsumer>
)

export default ConnectedAuthDashboard;