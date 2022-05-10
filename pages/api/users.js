// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

const url = 'http://localhost:3500/v1.0/bindings/graphql'

const conf = { headers: { 'Content-Type': 'application/json' } }

export default async function handler(req, res) {
  console.log('.... getUsers ...')
  if (req.method === 'GET') {
    let query = {
        "operation": "query",
        "metadata": {
            "query": "query { users { id name username email photo website address { street suite city zipcode geo { lat lng } } company { name catchPhrase bs } createdAt } }"
        }
    }
    let data = await axios.post(url, query, conf).then(r => r.data)
    .catch(e => {
      console.error(`Error (Users): ${e.toString()}`)
      res.status(500).json({ error: `Error (Users): ${e.toString()}`})
    })
    res.status(200).json(data)
  } else {
    res.status(500).json({ error: 'method not supported'})
  }
}
