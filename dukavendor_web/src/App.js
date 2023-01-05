import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Comfirmation from './pages/Comfirmation';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        {/* <div> */}
          <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/sign-in' element={<Login/>} />
            <Route path='/otp' element={<Comfirmation/>} />
          </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
