import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


const Home = lazy(() => import('./pages/LandingPage'));
const Blog = lazy(() => import ('./pages/BlogsPage'));
const PostView = lazy(() => import('./pages/PostView'));
const Contacts = lazy(() => import ('./pages/ContactPage'));
const About = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/posts/:id' element={<PostView />} />
            <Route path='/contact' element= {<Contacts />} />
            <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
