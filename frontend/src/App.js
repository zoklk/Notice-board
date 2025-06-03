import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import BoardList from './pages/BoardList.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import PostDetail from './pages/PostDetail.jsx';
import PostForm from './pages/PostForm.jsx';

function App() {
  return (
    <div>
      <div className='main-app'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/board/:pageNum" element={<BoardList />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/board/write" element={<PostForm />} />
          <Route path="board/edit/:id" element={<PostForm editMode />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div style={{padding:'0 1rem'}}><hr></hr></div>
      <footer className='footer'>
        <h1> this is footer </h1>
      </footer>
    </div>
  );
}

export default App;
