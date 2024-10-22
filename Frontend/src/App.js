import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import './index.css'
import PrivateRoutes from './Routes/PrivateRoutes';
import DashboardRoutes from './Routes/DashboardRoutes';


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
const SetPassword = lazy(() => import('./pages/Auth/SetPassword'));
const Dashboard = lazy(() => import('./pages/user/Dashboard'));
const BlogEditor = lazy(() => import('./pages/user/BlogEditor'));
const UserPosts = lazy(() => import('./pages/user/UserPosts'));
const Settings = lazy(() => import('./pages/user/Settings'));
const SavedPosts = lazy(()=> import('./pages/user/SavedPosts'));



function App() {

  return (
    <AuthProvider>
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
              <Route path='/set-new-password' element={<SetPassword />} />
              <Route path='/dashboard/*' element={<PrivateRoutes> <Dashboard /> </PrivateRoutes>} />
              <Route path='/new-post/' element={<PrivateRoutes> <BlogEditor /> </PrivateRoutes>} />
              <Route path='/edit/:postId/' element={<PrivateRoutes> <BlogEditor /></PrivateRoutes>} />
              <Route path='/user-posts/' element={<PrivateRoutes> <UserPosts /> </PrivateRoutes>} />
              <Route path='/saved-posts/' element={<PrivateRoutes> <SavedPosts /> </PrivateRoutes>} />
              <Route path='/settings/' element={<PrivateRoutes> <Settings /> </PrivateRoutes>} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
