import { WorkoutConsumer } from '../../providers/WorkoutProvider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WorkoutShow = ({updateWorkout}) => {
  const params = useParams()
  const [workout, setWorkout] = useState({img: '', note: '', workout_type: '', calories: 0, elevation: 0, duration: 0, date: '', location: '', dif_level: 0, tag: ''}) 
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/workouts/${params.workoutId}`)
      .then( res => setWorkout(res.data))
      .catch( err => console.log(err) )
}, [])

  const { img, note, workout_type, calories, elevation, duration, date, location, dif_level, tag, id } = workout

  return (
    <>
    <h1>{workout_type}</h1>
    <h3>{date}</h3>
    <h3>{location}</h3>
    <h5>Tags: {tag}</h5>
    <h5>Calories Burned: {calories}</h5>
    <h5>Elevation Gained: {elevation}</h5>
    <h5>Duration: {duration}</h5>
    <h5>Difficulty Rating: {dif_level}</h5>
    <h5>Notes: {note}</h5>
    <img src={img} style={{ width: '500px'}} />


    </>
  )
}

const ConnectedWorkoutShow = (props) => (
  <WorkoutConsumer>
    { value => <WorkoutShow {...props} {...value} />}
  </WorkoutConsumer>
)

export default ConnectedWorkoutShow;