import { useState, useEffect } from 'react';


const WorkoutForm = ({id, img, note, workout_type, calories, elevation, duration, date, location, dif_level, tag, addWorkout, updateWorkout, setAdding}) => {
  const [workout, setWorkout] = useState({img: '', note: '', workout_type: '', calories: 0, elevation: 0, duration: 0, date: '', location: '', dif_level: 0, tag: ''})


  useEffect( () => {
    if (id) {
      setWorkout({ img, note, workout_type, calories, elevation, duration, date, location, dif_level, tag })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorkout(id, workout)
    } else {
      addWorkout(workout)
    } 
    setWorkout({img: '', note: '', workout_type: '', calories: 0, elevation: 0, duration: 0, date: '', location: '', dif_level: 0, tag: ''})
    }
  

  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <title>New Activity</title>
      <label>Activity Type</label>
        <input
          type="text"
          name="workout_type"
          value={workout.workout_type}
          onChange={(e) => setWorkout({ ...workout, workout_type: e.target.value})}
          required
        />
      <label>Date:</label>
        <input
            type="date"
            name="date"
            value={workout.date}
            onChange={(e) => setWorkout({ ...workout, date: e.target.value})}
          />
      <label>Description</label>
        <textarea
          type="text"
          name="note"
          value={workout.note}
          placeholder="How many reps did you do?"
          onChange={(e) => setWorkout({ ...workout, note: e.target.value})}
        ></textarea>
      <label>Difficulty Level - How did the workout feel 1 out of 5?</label>
        <select
          type="integer"
          name="dif_level"
          value={workout.dif_level}
          onChange={(e) => setWorkout({ ...workout, dif_level: e.target.value})}
        >
        <option value="1">
          1
        </option>
        <option value="2">
          2
        </option>
        <option value="3">
          3
        </option>
        <option value="4">
          4
        </option>
        <option value="5">
          5
        </option>
        </select>
      <label>Tags:</label>
        <input
            type="text"
            name="tags"
            value={workout.tag}
            onChange={(e) => setWorkout({ ...workout, tag: e.target.value})}
          />
      <label>Location:</label>
        <input
            type="text"
            name="location"
            value={workout.location}
            onChange={(e) => setWorkout({ ...workout, location: e.target.value})}
          />
      <label>Images:</label>
        <input
            type="text"
            name="img"
            value={workout.img}
            onChange={(e) => setWorkout({ ...workout, img: e.target.value})}
            required
          />
      <label>Calories Burned:</label>
        <input
            type="integer"
            name="calories"
            value={workout.calories}
            onChange={(e) => setWorkout({ ...workout, calories: e.target.value})}
          />
      <label>Elevation Gained:</label>
        <input
            type="integer"
            name="elevation"
            value={workout.elevation}
            onChange={(e) => setWorkout({ ...workout, elevation: e.target.value})}
          />
      <label>Duration:</label>
        <input
            type="integer"
            name="duraction"
            value={workout.duration}
            onChange={(e) => setWorkout({ ...workout, duration: e.target.value})}
          />
      <button type="submit">Submit</button>
    </form>
    </>
  )

}

export default WorkoutForm;

