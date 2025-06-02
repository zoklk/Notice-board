import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './PostForm.css'

const PostForm = ({ editMode }) => {
    // 가짜 데이터
    let oldTitle = ''
    let oldContent = ''    
    if (editMode){
        oldTitle = '수정하기 전 제목입니다.'
        oldContent = '수정하기 전 본문입니다.'
    }
    
    const [newTitle, setNewTitle] = useState(oldTitle);
    const [newContent, setNewContent] = useState(oldContent);

    const postSubmit = (event) => {
        event.preventDefault();
        console.log('title: ', newTitle);
        console.log('content: ', newContent);
    }
    
    return(
        <div className='main-postform'>
            <form className='form-new' onSubmit={postSubmit}>
                <div className='container-newcontent'>
                    { editMode ? <h1>게시글 수정</h1> : <h1>새 글 작성</h1>}
                    <h2>제목을 입력해주세요</h2>
                    <input  className='input-newtitle'
                            type='text'
                            value={newTitle}
                            onChange={ (event) => {setNewTitle(event.target.value)}} />
                    <h2>내용을 입력해주세요</h2>
                    <textarea   className='input-newcontent'
                                name='content-new'
                                value={newContent}
                                onChange={(event)=>{setNewContent(event.target.value);}}></textarea>
                </div>
                <div className='container-post'>
                    <button className='btn-newpost' type='submit'>Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm;