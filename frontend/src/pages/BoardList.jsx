import React from 'react';
import { useEffect, useState } from 'react';
import './BoardList.css';
import { useParams } from 'react-router-dom';

// const mockPosts = [
//     // { id: 1, title: '첫 글', author: '관리자', date:'2025-05-28', likes:3, views:37},
//     // { id: 2, title: '두번째 글', author: 'user1', date:'2025-05-27', likes:5, views:58}

// ];

const mockPosts = Array.from( { length: 50 }, (_, x) => ({
    id: x+1,
    title: 'title ' + (x+1),
    author: 'user',
    date: '2025-05-' + (Math.floor(Math.random() * 30) + 1),
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 200)
}))

const BoardList = () => {
    //
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

    const { pageNum } = useParams();
    const [postPerPage, changePostPerPage] = useState(20); // 한번에 보일 게시글의 개수, 20이 default
    const [postSorting, changePostSorting] = useState('newest')

    const displayingPosts = mockPosts.filter(item =>
                            item.id >= (postPerPage*(pageNum-1)+1) && item.id <= (postPerPage*pageNum))
    
    return (
        <div>
        <div className="mainContent">
            <h1>POSTS</h1>
            <div className="container-viewsetting">
                <div className="container-select">
                <p>정렬 기준 : </p>
                    <select onChange={ (event) => {changePostSorting(Number(event.target.value))}}>
                        <option value='newest'>최신순</option>
                        <option value='oldest'>오래된 순</option>
                        <option value='likes'>좋아요 순</option>
                        <option value='views'>조회수 순</option>
                    </select>
                </div>
                <div className="container-select">
                    <p>페이지당 게시물 개수: </p>
                    <select onChange={ (event) => {changePostPerPage(Number(event.target.value))}}>    
                        <option value="20">20개씩</option>
                        <option value="30">30개씩</option>
                        <option value="50">50개씩</option>
                    </select>
                </div>
            </div>
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
                        {displayingPosts.map((post, index) => (
                            <PostItem key={post.id} no={index+1} {...post} />
                        ))}
                    </tbody>
                </table>
                <BoardIndex number={pageNum} totalPost={mockPosts.length}></BoardIndex>
                <div className='container-btn'>
                    <a className="btn-primary newButton" href="/board/write">New</a>
                </div>
            </div>
        </div>
        </div>
    )
}

const PostItem = ({id, title, date, likes, views}) => {
    const link = '../post/' + id;
    return (
        <tr className='row-posts'>
            <td>{id}</td>
            <td><a href={ link }>{title}</a></td>
            <td>{date}</td>
            <td>{likes}</td>
            <td>{views}</td>
        </tr>
    )
}

const BoardIndex = (props) => {

    return (
        <div>
            <div className='container-boardIndex'>
                <a  className='btn-secondary'
                    href={(Number(props.number)-1) }>이전</a>
                <a  className='btn-secondary'
                    href={(Number(props.number)+1) }>다음</a>
            </div>
            <div className='container-search'>
                <input type='text' placeholder='검색'></input>
            </div>
        </div>
    )
}

export default BoardList;