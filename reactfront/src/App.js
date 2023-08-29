// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CompCreateBlog from './blog/CreateBlog.jsx';
// import CompEditBlog from './blog/EditBlog.jsx';
// import CompShowBlog from './blog/ShowBlogs.jsx'
import Nav from './components//Navigation/NavBar/Nav';
import Contact from './components/Contact.jsx'
import Intro from './components/Intro/Intro.jsx'
import About from './components/About.jsx'
import Posts from './components/Posts.jsx'
import Start from './components/Start.jsx'
import Footer from './components/Navigation/Footer/Footer';

function App() {
  return (
    <div className="App relative h-screen overflow-auto">
      <Nav/>
        <div className='paint'>
          <Intro/>
          <Start/>
          <About/>
          <Posts/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;