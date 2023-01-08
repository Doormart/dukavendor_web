import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Comfirmation from './pages/Comfirmation';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <Router>
        {/* <div> */}
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/wallet' element={<Wallet/>} />

            <Route path='/sign-up' element={<Register/>} />
            <Route path='/sign-in' element={<Login/>} />
            <Route path='/otp' element={<Comfirmation/>} />
          </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
