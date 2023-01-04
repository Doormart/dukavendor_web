import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        {/* <div> */}
          <Routes>
            <Route path='/' element={<Register/>} />
          </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
