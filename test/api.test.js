const axios = require('axios')

async function getUsers() {
    const url = 'http://localhost:3000/api/graphql'
    const conf = { headers: { 'Content-Type': 'application/json' } }
    const renderBody = (query) => {
        return {
            "operation": "query",
            "metadata": {
                "query": query
            }
        }
    }
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

    const data = await axios.post(url, renderBody(query()), conf).then(r => r.data && r.data.users).catch(e => {
        console.error(`The request has failed ${e.toString()}`)
    })
    return data
}

test('Returns all users from dapr.bindings.graphql source', async () => {
    let users = await getUsers()
    expect(users).not.toBeNull()
})