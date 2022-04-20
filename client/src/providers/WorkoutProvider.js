import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const WorkoutContext = React.createContext();
export const WorkoutConsumer = WorkoutContext.Consumer;

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([])

  const navigate = useNavigate()

  const getAllWorkouts = () => {
    axios.get('/api/workouts')
      .then( res => setWorkouts(res.data))
      .catch( err => console.log(err))
  }

  const addWorkout = (workout) => {
    axios.post('/api/workouts', { workout })
      .then( res => setWorkouts([...workouts, res.data]))
      .catch( err => console.log(err))
      navigate('/workouts')
  }

  const updateWorkout = (id, workout) => {
    axios.put(`/api/workouts/${id}`, { workout })
      .then( res => {
        const newUpdatedWorkouts = workouts.map( r => {
          if (r.id === id) {
            return res.data
          } 
            return r
        })
        setWorkouts(newUpdatedWorkouts)
        navigate('/workouts')
      })
      .catch( err => console.log(err))
  }

  const deleteWorkout = (id) => {
    axios.delete(`/api/workouts/${id}`)
      .then( res => {
        setWorkouts(workouts.filter( r => r.id !== id))
        alert(res.data.message)
        navigate('/dashboard')
      })
      .catch( err => console.log(err))
  }

  return(
    <WorkoutContext.Provider value={{
      workouts,
      getAllWorkouts: getAllWorkouts,
      addWorkout: addWorkout,
      updateWorkout: updateWorkout,
      deleteWorkout: deleteWorkout,
    }}>
      { children }
    </WorkoutContext.Provider>
  )
}

export default WorkoutProvider;