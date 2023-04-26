// import logo from './logo.svg';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import CompShowBlogs from './blog/ShowBlogs.jsx';
import CompCreateBlog from './blog/CreateBlog.jsx';
import CompEditBlog from './blog/EditBlog.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
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
import { USER_STATUS } from './constDictionary';

const URI = 'http://localhost:8000/checkAuth'

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(Cookies.get('auth'))
  let { state } = useLocation();

  useEffect(()=>{
    if (state == USER_STATUS.ONLINE){
      checkAuth();
    }
    if (state == USER_STATUS.OFFLINE){
      userHasAuthenticated(false);
    }
  }, [state])


  const checkAuth = async ()=>{
    if (Cookies.get('auth')){
      await axios.get(URI).then((response)=>{
        userHasAuthenticated(true);
        console.log("Http Response:")
        console.log(response)
        console.log(`State Prop: ${state}`)
        console.log(`User auth status: ${isAuthenticated}`)
      }, (error)=>{
        console.log(error)
        console.log("User auth status:")
        console.log(isAuthenticated)
      })

    }
  }


  return (
    <div className="App">
      <header>
        <Nav isAuthenticated={isAuthenticated} state={state}/>
      </header>
      <div className='container mx-auto h-screen'>
            <Routes>
              <Route path='/' element={ <Welcome/>} />
              <Route path="/register" element={ <CompRegister/> }/>
              <Route path='/login' element={<Login />} />
              <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/blogs" element={<CompShowBlogs/>} />
                <Route path="/blogs/create" element={<CompCreateBlog/>} />
                <Route path="/blogs/edit/:id" element={<CompEditBlog/>}/>
                <Route path='/image' element={<CompShowImages />} />
                <Route path='/image/upload' element={<UploadImage />} />
                <Route path='/users' element={<ShowUsers/>} />
                <Route path='/users/create' element={<CreateUser/>} />
                <Route path='/users/edit/:id' element={<EditUser/>} />
              </Route>
              
            </Routes>
      </div>
      {<Footer/>}
    </div>
  );
}

export default App;
