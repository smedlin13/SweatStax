import { useEffect, useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import {WorkoutConsumer} from '../../providers/WorkoutProvider';

const Workouts = ({ workouts, getAllWorkouts, addWorkout }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllWorkouts()
  }, [])
 
  return (
    <>
    <h1>Workouts</h1>
    { adding ? 
          <>
        <WorkoutForm addWorkout={addWorkout} />
        <button onClick={() => setAdding(false)}>Cancel</button>
          </>
        :
        <button onClick={() => setAdding(true)}>+</button>
      }
      <WorkoutList workouts={workouts} />
      </>
    )
  }

  const connectedWorkout = (props) => (
    <WorkoutConsumer>
      { value => <Workouts {...props} {...value} /> }
    </WorkoutConsumer>
  )

export default connectedWorkout;