// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CompCreateBlog from './blog/CreateBlog.jsx';
// import CompEditBlog from './blog/EditBlog.jsx';
// import CompShowBlog from './blog/ShowBlogs.jsx'
import Nav from './components//Navigation/NavBar/Nav';
import Contact from './components/Contact.jsx'
import Intro from './components/Intro/Intro.jsx'
import We from './components/We.jsx'
import Posts from './components/Posts.jsx'
import Start from './components/Start.jsx'
import Footer from './components/Navigation/Footer/Footer';

function App() {
  return (
    <div className="App scroll-smooth snap-y snap-mandatory relative h-screen overflow-auto">
      <Nav/>
        <div className='paint'>
        <div className='lg:snap-center'>
          <Intro />
        </div>
            <div className='lg:snap-center'>
              <Start/>
            </div>
            <div className='lg:snap-center'>
              <We />
            </div>
            <div className='lg:snap-center'>
              <Posts />
            </div>
            <div className='lg:snap-center'>
            <Contact />
            </div>
            <div className='lg:snap-end'>
              <Footer/>
            </div>
        </div>
    </div>
  );
}

export default App;