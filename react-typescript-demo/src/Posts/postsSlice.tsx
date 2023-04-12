import { createSlice } from "@reduxjs/toolkit"


export type PostReducer = {
    id: string,
    title: string,
    content: string
}

export type PostReducerList = {
    posts: PostReducer[]
}

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
  })

export default postsSlice.reducer
  