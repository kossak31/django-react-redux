
import './App.css';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import HomeScreen from "./screens/HomeScreen";
import CouponScreen from "./screens/CouponScreen";



function App() {
  return (
  

      <Container>
        <HomeScreen />
        <CouponScreen />
      </Container>

  );
}

export default App;
