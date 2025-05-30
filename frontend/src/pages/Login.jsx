import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'

const PostForm = () => {
    return(
        <div className='main-login'>
            <div style={{maxWidth:'40%', margin:'auto'}}>
                <div className='container-userinfo'>
                    <h1>로그인</h1>
                    <h2>USERNAME</h2>
                    <input className='input-username' type='text'></input>
                    <h2>PASSWORD</h2>
                    <input className='input-password' type='password'></input>
                </div>
                <div className='container-login'>
                    <button className='btn-newpost'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default PostForm;