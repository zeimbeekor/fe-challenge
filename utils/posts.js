import axios from 'axios'

const url = 'http://localhost:3000/api/graphql'

const conf = { headers: { 'Content-Type': 'application/json' } }

function renderBody (query) {
    return {
        "operation": "query",
        "metadata": {
            "query": query
        }
    }
}

async function getPosts () {
    const query = () => `query {
        posts {
            id
            title
            body
            url
            type
            userId
            createdAt
        }
    }`
    return axios.post(url, renderBody(query()), conf).then(r => r.data && r.data.posts).catch(e => console.error(e))
}

async function getPost (id) {
    const query = (id) => `query {
        post (id: ${id}) {
            id
            title
            body
            url
            type
            userId
            createdAt
        }
    }`
    return axios.post(url, renderBody(query(id, type)), conf).then(r => r.data && r.data.post).catch(e => console.error(e))
}

async function getPostsWithoutCommentsByUserId (id, type) {
    const query = (id, type) => `query {
        getPostsByUserId (id: ${id}, postType: \"${type}\") {
            id
            title
            body
            url
            type
            userId
            createdAt
        }
    }`
    return axios.post(url, renderBody(query(id, type)), conf).then(r => r.data && r.data.getPostsByUserId).catch(e => console.error(e))
}

async function getPostsWithCommentsByUserId (id, type) {
    const query = (id, type) => `query {
        getPostsByUserId (id: ${id}, postType: \"${type}\") {
            id
            title
            body
            url
            type
            userId
            createdAt
            comments {
                id
                name
                email
                body
                postId
                createdAt
            }
        }
    }`
    return axios.post(url, renderBody(query(id, type)), conf).then(r => r.data && r.data.getPostsByUserId).catch(e => console.error(e))
}

export { getPosts, getPost, getPostsWithCommentsByUserId, getPostsWithoutCommentsByUserId }