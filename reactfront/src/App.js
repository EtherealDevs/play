// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CompCreateBlog from './blog/CreateBlog.jsx';
// import CompEditBlog from './blog/EditBlog.jsx';
// import CompShowBlog from './blog/ShowBlogs.jsx'
import Nav from './components/Nav.jsx';
import Contact from './components/Contact/Contact.jsx'
import Intro from './components/Intro/Intro.jsx'
import We from './components/We.jsx'
import Posts from './components/Posts.jsx'
import Start from './components/Start.jsx'
import Footer from './components/Footer.jsx';



function App() {
  return (
    <div className="App">
        <Nav/>
        <Intro />
        <Start/>
        <We />
        <Posts />
          {/* <div className='container mx-auto'>
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={ <CompShowBlog/>} />
                  <Route path="/create" element={ <CompCreateBlog/> }/>
                  <Route path="/edit/:id" element={ <CompEditBlog/> }/>
                </Routes>
            </BrowserRouter>
          </div> */}
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
