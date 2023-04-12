import React from 'react'
import { useSelector } from 'react-redux'
import { PostReducer, PostReducerList } from './postsSlice'

export const PostsList = () => {

  const posts = useSelector((state: PostReducerList) => state.posts)

  const renderedPosts = posts.map((post: PostReducer) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}