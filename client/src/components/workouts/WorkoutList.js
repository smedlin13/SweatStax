import {WorkoutConsumer} from '../../providers/WorkoutProvider';
import Workout from './Workout';
import WorkoutForm from './WorkoutForm';


const WorkoutList = ({workouts, addWorkout }) => {
  return(
    <>
      <h1>Workouts</h1>
      { workouts.map( w => 
        <Workout {...w} />
      )}
      <WorkoutForm addWorkout={addWorkout} />
    </>
  )
}

const connectedWorkoutList = (props) => (
  <WorkoutConsumer>
    { value => <WorkoutList {...props} {...value} />}
  </WorkoutConsumer>
)

export default connectedWorkoutList;