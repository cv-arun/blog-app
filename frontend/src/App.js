import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import BlogPage from './pages/blogPage';
import NewBlogPage from './pages/newBlogPage';
import './App.css';

function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route exact path='/blog' element={<BlogPage/>}/>
    <Route exact path='/new-blog' element={<NewBlogPage/>}/>
   </Routes>
   </>
  );
}

export default App;
