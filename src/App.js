

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './com/nav'
import Home from './com/home'

function App() {
  return (
    <>

<Router>
        <Nav />
     
        <Routes>
          <Route
            path="/home" 
            element={<Home/>}
          />
          <Route
            path="/home"
            element={''}
          />
          <Route
            path="/about"
            element={''}
            
          />
          <Route
            path="/contact"
            element={''}
            
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
