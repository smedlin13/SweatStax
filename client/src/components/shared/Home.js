import { Parallax } from 'react-materialize';
import HomePic from '../images/HomePic.jpg';
import HomePic2 from '../images/HomePic2.jpg';
import {ParallaxId, HomeButton, Homediv} from '../../styles/shared';

const Home = () => (
  <div>
    <ParallaxId
      image={<img alt="" src={HomePic} width="100%"/>}
      options={{
        responsiveThreshold: 5
      }}
    />
  <Homediv>
    <h1>Workout, Don't Stress Out</h1>
    <HomeButton href="/register" node="a"
    waves="light">
      Get Started
    </HomeButton>
  </Homediv>
    <ParallaxId
      image={<img alt="" src={HomePic2} width="100%"/>}
      options={{
        responsiveThreshold: 0
      }}
    />
  
  </div>
)

export default Home;