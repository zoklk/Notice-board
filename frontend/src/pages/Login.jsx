import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'

const PostForm = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // 로그인 버튼 클릭시 호출함수
    const loginSubmit = (event) => {
        event.preventDefault(); // submit 이후에도 새로고침 하지 않고 페이지 유지
        console.log('username: ', username);
        console.log('password: ', password);
        console.log('login info submitted');
        console.log('remember user?', rememberMe);
    }

    return(
        <div className='main-login'>
            <form className='form-login' onSubmit={loginSubmit}>
                <div className='container-userinfo'>
                    <h1>로그인</h1>
                    <h2>USERNAME</h2>
                    <input  className='input-username' 
                            type='text'
                            onChange={ (event) => {setUsername(event.target.value);}}></input>
                    <h2>PASSWORD</h2>
                    <input  className='input-password'
                            type='password'
                            onChange={ (event) => {setPassword(event.target.value);}}></input>
                </div>
                <div>
                    <label>
                        <input  type='checkbox'
                                id='remember'
                                checked={rememberMe}
                                onChange={(e)=>setRememberMe(e.target.checked)}/>
                        사용자 기억하기
                    </label>
                </div>
                <div className='container-login'>
                    <button className='btn-newpost' type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm;