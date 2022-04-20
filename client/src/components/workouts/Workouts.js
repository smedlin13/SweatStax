import { useEffect, useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import {WorkoutConsumer} from '../../providers/WorkoutProvider';
import { Button, Icon, Modal } from 'react-materialize';

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
        // <Button
        //   className="red"
        //   floating
        //   icon={<Icon>+</Icon>}
        //   large
        //   node="button"
        //   waves="light"
          
        // >
          <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">Close</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Modal Header"
          id="Modal-10"
          open={false}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
          
          trigger={<Button node="button">+</Button>}>
            <WorkoutForm onClick={() => setAdding(true)} />
          </Modal>

        // </Button>
      }
      <br />
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