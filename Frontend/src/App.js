import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


const Home = lazy(() => import('./pages/LandingPage'));
const Blog = lazy(() => import ('./pages/BlogsPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
