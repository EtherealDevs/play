// import logo from './logo.svg';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import CompShowBlogs from './blog/ShowBlogs.jsx';
import CompCreateBlog from './blog/CreateBlog.jsx';
import CompEditBlog from './blog/EditBlog.jsx';
import Nav from './components/Nav.jsx';
// import Footer from './components/Footer';
import Form from './SignIn/SignIn'
import UploadImage from './Image/UploadImage'
import Welcome from './Welcome/Welcome'
import CompShowImages from './Image/ShowImages';
import CompRegister from './Register/Register';
import CreateUser from './Users/CreateUser';
import ShowUsers from './Users/ShowUsers';
import EditUser from './Users/EditUser';
import Login from './SignIn/Login';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoutes';
import MenuBar from './components/Test';
import { Cookie } from '@mui/icons-material';
// import Footer from './components/Footer.jsx';

const URI = 'http://localhost:8000/checkAuth'

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(Cookies.get('auth'))
  let { state } = useLocation();
  console.log(isAuthenticated)
  console.log(state)

  useEffect(()=>{
    if (state == 2){
      userHasAuthenticated(false);
    }
    if (state == 1){
      userHasAuthenticated(true);
      checkAuth();
    }
  }, [state])


  const checkAuth = async ()=>{
    if (Cookies.get('auth')){
      await axios.get(URI).then((response)=>{
        console.log(response)
        console.log(state)
        console.log(isAuthenticated)
      }, (error)=>{
        console.log(error)
        console.log(isAuthenticated)
      })

    }
  }


  return (
    <div className="App">
      <header>
        <Nav isAuthenticated={isAuthenticated} state={state}/>
      </header>
      <div className='container mx-auto'>
            <Routes>
              <Route path='/' element={ <Welcome/>} />
              <Route path="/register" element={ <CompRegister/> }/>
              <Route path='/login' element={<Login />} />
              <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/blogs" element={<CompShowBlogs/>} />
                <Route path="/blogs/create" element={<CompCreateBlog/>} />
              </Route>
              {/* <Route path='/blogs' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CompShowBlogs/>
                </ProtectedRoute>} /> */}
              {/* <Route path="/blogs/create" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CompCreateBlog/>
                </ProtectedRoute> }/> */}
              <Route path="/blogs/edit/:id" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CompEditBlog/>
                </ProtectedRoute> }/>
              <Route path='/image' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CompShowImages />
                </ProtectedRoute>} />
              <Route path='/image/upload' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UploadImage />
                </ProtectedRoute>} />
              <Route path='/users' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ShowUsers/>
                </ProtectedRoute>
              } />
              <Route path='/users/create' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CreateUser/>
                </ProtectedRoute>
              } />
              <Route path='/users/edit/:id' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <EditUser/>
                </ProtectedRoute>
              } />
            </Routes>
      </div>
      {/* {<Footer/>} */}
    </div>
  );
}

export default App;
