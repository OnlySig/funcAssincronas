const axios = require('axios')

const fetchApi = async () => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log({ data })
    } catch (error) {
        console.log({ error })
    }
}

fetchApi()