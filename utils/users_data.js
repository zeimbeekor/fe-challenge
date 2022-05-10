import axios from 'axios'

const url = 'http://localhost:3000/api/users'

const conf = { headers: { 'Content-Type': 'application/json' } }

export default async function getUsers () {
    return axios.get(url, null, conf).then(r => r.data && r.data.users).catch(e => console.error(e))
}