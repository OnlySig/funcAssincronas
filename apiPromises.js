const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    console.log({ data: response.status })
})
.catch((error) => {
    console.log({ error })
})