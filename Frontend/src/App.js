import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


const Home = lazy(() => import('./pages/LandingPage'));
const Blog = lazy(() => import ('./pages/BlogsPage'));
const PostView = lazy(() => import('./pages/PostView'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/posts/:id' element={<PostView />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
