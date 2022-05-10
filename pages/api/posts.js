// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

const url = 'http://localhost:3500/v1.0/bindings/graphql'

const conf = { headers: { 'Content-Type': 'application/json' } }

export default async function handler(req, res) {
  console.log('.... getPosts ...')
  if (req.method === 'GET') {
    let query = {
        "operation": "query",
        "metadata": {
            "query": "query { posts { id title body url type userId createdAt } }"
        }
    }
    let data = await axios.post(url, query, conf).then(r => r.data)
    .catch(e => {
      console.error(`Error (Posts): ${e.toString()}`)
      res.status(500).json({ error: `Error (Posts): ${e.toString()}`})
    })
    res.status(200).json(data)
  } else {
    res.status(500).json({ error: 'method not supported'})
  }
}
