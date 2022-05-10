// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

const url = 'http://localhost:3500/v1.0/bindings/graphql'

const conf = { headers: { 'Content-Type': 'application/json' } }

export default async function handler(req, res) {
  console.log('.... getComments ...')
  if (req.method === 'GET') {
    let query = {
        "operation": "query",
        "metadata": {
            "query": "query { comments { id name email body postId createdAt } }"
        }
    }
    let data = await axios.post(url, query, conf).then(r => r.data)
    .catch(e => {
      console.error(`Error (Comments): ${e.toString()}`)
      res.status(500).json({ error: `Error (Comments): ${e.toString()}`})
    })
    res.status(200).json(data)
  } else {
    res.status(500).json({ error: 'method not supported'})
  }
}
