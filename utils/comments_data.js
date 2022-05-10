import axios from 'axios'

const url = 'http://localhost:3000/api/comments'

const conf = { headers: { 'Content-Type': 'application/json' } }

export default async function getComments () {
    return axios.get(url, null, conf).then(r => r.data && r.data.comments).catch(e => console.error(e))
}