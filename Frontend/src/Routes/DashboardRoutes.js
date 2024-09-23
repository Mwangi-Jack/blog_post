import { Route, Router } from "react-router-dom";
import { lazy } from "react";



const Dashboard = lazy(() => import('../pages/user/Dashboard'));
const BlogEditor = lazy(() => import('../pages/user/BlogEditor'));
const UserPosts = lazy(() => import('../pages/user/UserPosts'));
const Settings = lazy(() => import('../pages/user/Settings'));


function DashboardRoutes() {
	return (
            <Router>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='new-post/' element={<BlogEditor />} />
                  <Route path='edit/:postId/' element={<BlogEditor />} />
                  <Route path='user-posts/' element={<UserPosts />} />
                  <Route path='settings/' element={<Settings />} />
            </Router>
	)
};

export default DashboardRoutes;
