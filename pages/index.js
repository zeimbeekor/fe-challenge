import styles from "../styles/Home.module.css";

import Post from "./components/post";
// import Users from "./components/user";
import React, { useState, useEffect } from "react";

import getPosts from  '../utils/posts_data'
import getComments from  '../utils/comments_data'
import getUsers from  '../utils/users_data'

export default function Home() {
  const [data, setData] = useState(null)
  const [comments, setComments] = useState(null)
  const [users, setUser] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isLoadingComments, setLoadingComments] = useState(false)
  const [isLoadingUsers, setLoadingUsers] = useState(false)

  const loadPosts = () => {
    setLoading(true)
    getPosts()
    .then((data) => {
      console.debug('posts fetched', data)
      setData(data)
      setLoading(false)
    })
  }

  const loadComments = () => {
    setLoadingComments(true)
    getComments()
    .then((data) => {
      console.debug('comments fetched', data)
      setComments(data)
      setLoadingComments(false)
    })
  }

  const loadUsers = () => {
    setLoadingUsers(true)
    getUsers()
    .then((data) => {
      console.debug('users fetched', data)
      setUser(data)
      setLoadingUsers(false)
    })
  }

  useEffect(() => {
    loadPosts()
    loadComments()
    loadUsers()
  }, [])

  if (isLoading || isLoadingComments || isLoadingUsers) return <div className={styles.loader}></div>

  if (!data) return <p>No data</p>

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1> Welcome to Social Media Clone </h1>
      </header>
      {/* <div>
        <Users
          // key=''
          users={users}
        />
      </div> */}
      {/* <div>
        <Users
          // key=''
          users={users}
          posts={data}
          comments={comments}
        /> 
      </div>*/}
      <div className={styles.posts}>
        {data.map((post) => (
          <Post
            key={post.id}
            post={post}
            comments={comments.filter((comment) => comment.postId === post.id)}
            user={users.find((user) => user.id === post.userId)}
          />
        ))}
      </div>
    </div>
  );
}