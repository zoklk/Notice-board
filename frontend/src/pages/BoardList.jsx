import React from 'react';
import { useEffect, useState } from 'react';
import './BoardList.css';

const mockPosts = [
    { id: 1, title: '첫 글', author: '관리자', date:'2025-05-28', likes:3, views:37},
    { id: 2, title: '두번째 글', author: 'user1', date:'2025-05-27', likes:5, views:58}
];

const BoardList = () => {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const response = await fetch("http://localhost:3000/posts");

        if (!response.ok) {
            const message = 'An error occurred: ${response.statusText}';
            window.alert(message);
            return;
        }

        const postlist = await response.json();
        setPosts(postlist);
    }

    useEffect( () => {
        getPosts();
    }, []); // [] -> 매 렌더링이 아닌 컴포넌트가 처음 마운트될 때 1번 실행
    //[a, b] -> a, b가 바뀔 때만 실행

    return (
        <div>
        <div className="mainContent">
            <h1>POSTS</h1>
            <div className="div-table">
                <table className="table-board">
                    <thead className="thead-light">
                        <tr className='row-header'>
                            <th scope="col">No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPosts.map((post, index) => (
                            <PostItem key={post.id} no={index+1} {...post} />
                        ))}
                    </tbody>
                </table>
                <a className="btn-primary newButton" href="/board/write">New</a>
            </div>
        </div>
        </div>
    )
}

const PostItem = ({id, no, title, date, likes, views}) => {
    const link = 'board/' + id;
    return (
        <tr>
            <td>{no}</td>
            <td><a href={ link }>{title}</a></td>
            <td>{date}</td>
            <td>{likes}</td>
            <td>{views}</td>
        </tr>
    )
}

export default BoardList;