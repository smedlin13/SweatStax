import {WorkoutConsumer} from '../../providers/WorkoutProvider';
import {Link} from 'react-router-dom';
import { Row, Col, Card, Icon, CardTitle, Modal, Button} from 'react-materialize';
import WorkoutForm from './WorkoutForm';


const WorkoutList = ({workouts, updateWorkout, addWorkout, workout_type, date, img, location, note, calories, elevation, duration, id }) => {
  return(
    <>
      { workouts.map( w => 
        <>
        <Row>
          <Col
            m={6}
            s={12}
          >
            <Card
              actions={[
                <a key="1" href="#">
                <Modal
                actions={[
                  <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Edit"
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
                // root={[object HTMLBodyElement]}
                trigger={<Button node="button">Edit</Button>}
              >
               <WorkoutForm {...w} updateWorkout={updateWorkout}/>
              </Modal>
              </a>
              ]}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={w.img}>
                {w.workout_type} <br />
                {w.date} <br />
                {w.location} <br />
              </CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              {w.note} <br />
              Calories Burned: {w.calories} <br />
              Elevation Gained: {w.elevation} <br />
              Duration: {w.duration} <br />
            </Card>
          </Col>
        </Row>
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