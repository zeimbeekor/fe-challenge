// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

// const url = 'http://localhost:3500/v1.0/bindings/graphql'
const url = 'http://localhost:7000/dapr-gql'

const conf = { headers: { 'Content-Type': 'application/json' } }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let data = await axios.post(url, { "name": "graphql", ...req.body }, conf).then(r => r.data)
    .catch(e => {
      console.error(`Error (Posts): ${e.toString()}`)
      res.status(500).json({ error: `Error (Posts): ${e.toString()}`})
    })
    res.status(200).json(data)
  } else {
    res.status(500).json({ error: 'method not supported'})
  }
}
