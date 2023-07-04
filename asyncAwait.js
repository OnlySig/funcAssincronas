const { resolve } = require("path");

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;
        if(error) {
            reject(new Error('error in login!'))
        }
        console.log('user logged!')
        resolve({email, password})
    });
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideos")
            resolve(['video1', 'video2', 'video3'])
        }, 2000)
    })
};

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideoDetails")
            resolve({ title: "video title" })
        }, 2500)
    })
};

// loginUser('gabrielCPereira@gmail.com', '123321')
// .then((user) => {
//     console.log(user)
//     return getUserVideos(user.email)
// })
// .then((video) => getVideoDetails(video[0]))
// .catch((error) => console.log({ error }))

const displayUser = async () => {
    try {
        const user = await loginUser('gcp@gmail.com', '123321')
        const videos = await getUserVideos(user.email)
        const details = await getVideoDetails(user.video)
        console.log({ user, videos, details });
    } catch (error) {
        console.log({ error })
    }
}

displayUser();