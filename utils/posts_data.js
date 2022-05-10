import axios from 'axios'

const url = 'http://localhost:3000/api/posts'

const conf = { headers: { 'Content-Type': 'application/json' } }

export default async function getPosts () {
    return axios.get(url, null, conf).then(r => r.data && r.data.posts).catch(e => console.error(e))
}