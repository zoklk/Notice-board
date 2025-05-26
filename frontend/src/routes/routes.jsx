import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardList from '../pages/BoardList';
import PostDetail from '../pages/PostDetail';
import PostForm from '../pages/PostForm';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/board" element = {<BoardList /> } />
                <Route path="/board/:id" element={<PostDetail />} />
                <Route path="/board/write" element = {<PostForm />} />
                <Route path="/board/edit/:id" element={<PostForm editMode />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};