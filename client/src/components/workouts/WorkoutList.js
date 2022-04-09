import {WorkoutConsumer} from '../../providers/WorkoutProvider';
import {Link} from 'react-router-dom';



const WorkoutList = ({workouts, addWorkout, workout_type, date, id }) => {
  return(
    <>
      { workouts.map( w => 
        <>
        <Link to={`/workouts/${w.id}`}>{w.workout_type} {w.date}</Link>
        <br />
        </>
      )}
    </>
  )
}

const connectedWorkoutList = (props) => (
  <WorkoutConsumer>
    { value => <WorkoutList {...props} {...value} />}
  </WorkoutConsumer>
)

export default connectedWorkoutList;