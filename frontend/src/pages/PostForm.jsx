import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './PostForm.css'

const PostForm = () => {
    return(
        <div className='main-postform'>
            <div className='container-newcontent'>
                <h1>새 글 작성</h1>
                <h2>제목을 입력해주세요</h2>
                <input className='input-newtitle' type='text'></input>
                <h2>내용을 입력해주세요</h2>
                <textarea className='input-newcontent' name='content-new'></textarea>
            </div>
            <div className='container-post'>
                <button className='btn-newpost'>Post</button>
            </div>
        </div>
    )
}

export default PostForm;