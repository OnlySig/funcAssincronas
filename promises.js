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

loginUser('gabrielCPereira@gmail.com', '123321')
.then((user) => {
    console.log(user)
    return getUserVideos(user.email)
})
.then((video) => getVideoDetails(video[0]))
.catch((error) => console.log({ error }))

const yt = new Promise(resolve => {
    setTimeout(() => {
        resolve('videos from youtube')
    }, 2000)
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        resolve('posts from facebook')
    }, 2500)
})

Promise.all([yt, fb]).then(resolve => {
    console.log({ resolve })
})