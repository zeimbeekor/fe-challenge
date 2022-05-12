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

async function getUsers () {
    const query = () => `query {
        users {
            id
            name
            username
            email
            photo
            website
            address {
                street
                suite
                city
                zipcode
                geo {
                lat
                lng
                }
            }
            company {
                name
                catchPhrase
                bs
            }
            createdAt
        }
    }`
    return axios.post(url, renderBody(query()), conf).then(r => r.data && r.data.users).catch(e => console.error(e))
}

async function getUser (id) {
    const query = (id) => `query {
        user (id: ${id}) {
            id
            name
            username
            email
            photo
            website
            address {
            street
            suite
            city
            zipcode
            geo {
                lat
                lng
            }
            }
            company {
            name
            catchPhrase
            bs
            }
            createdAt
        }
    }`
    return axios.post(url, renderBody(query(id, type)), conf).then(r => r.data && r.data.user).catch(e => console.error(e))
}

async function getPostsWithCommentsByUserId (id) {
    const query = (id) => `query {
        user (id: ${id}) {
            id
            name
            username
            email
            photo
            website
            address {
            street
            suite
            city
            zipcode
            geo {
                lat
                lng
            }
            }
            company {
            name
            catchPhrase
            bs
            }
            createdAt
            posts {
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
        }
    }`
    return axios.post(url, renderBody(query(id)), conf).then(r => r.data && r.data.user).catch(e => console.error(e))
}

export { getUsers, getUser, getPostsWithCommentsByUserId }