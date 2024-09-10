import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


const Home = lazy(() => import('./pages/LandingPage'));
const Blog = lazy(() => import ('./pages/BlogsPage'));
const PostView = lazy(() => import('./pages/PostView'));
const Contacts = lazy(() => import ('./pages/ContactPage'));
const About = lazy(() => import('./pages/AboutPage'));
const NotFound = lazy(() => import('./pages/NotfoundPage'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const CodeVerify = lazy(() => import('./pages/Auth/CodeVerify'));

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
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/code-verification' element={<CodeVerify />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
