// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompShowBlogs from './blog/ShowBlogs.jsx';
import CompCreateBlog from './blog/CreateBlog.jsx';
import CompEditBlog from './blog/EditBlog.jsx';
import Nav from './components/Nav.jsx';
// import Footer from './components/Footer.jsx';



function App() {


  return (
    <div className="App">
      <header>
        <Nav/>

      </header>
      <div className='container mx-auto'>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={ <CompShowBlogs/>} />
              <Route path="/create" element={ <CompCreateBlog/> }/>
              <Route path="/edit/:id" element={ <CompEditBlog/> }/>              
            </Routes>
        </BrowserRouter>

      </div>
      
        
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
