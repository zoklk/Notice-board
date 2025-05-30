import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css'

const mockDetail = [
    {id: 1, title:'첫글', author:'관리자', date:'2025-05-28', content:'첫글 내용입니다. 첫글 내용입니다.'},
    {id: 2, title:'두번째 글', author:'user1', date:'2025-05-27', content:'두번째 글.'}
]

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect( () => {
        const found = mockDetail.find(p => p.id === parseInt(id));
        setPost(found);
    }, [id]);

    if (!post) return <div>로딩 중...</div>;

    return (
        <div className='mainContent'>
            <div className="container-detail">
                <h1>{post.title}</h1>
                <p><strong>작성자:</strong> {post.author}</p>
                <p><strong>작성일:</strong> {post.date}</p>
                <hr />
                <div className="contents-detail">{post.content}</div>
            </div>
            <div className="container-editposts">
                <a className='btn-primary'>수정</a>
                <a className='btn-primary'>삭제</a>
                <a className='btn-primary'>글 목록</a>
            </div>
        </div>
    );
};

export default PostDetail;