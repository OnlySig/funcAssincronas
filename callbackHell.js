const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = true
        if(error) {
            return onError(new Error('error in login!'))
        }
        console.log("user logged!")
        onSuccess({ email, password })
    }, 1500 )
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
};

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: "video title" })
    }, 2500)
};

const user = loginUser('gabrielCPereira@gmail.com', '123321', user => {
        getUserVideos(user.email, (videos) => {
            getVideoDetails(videos[0], (videoDetails) => {
                console.log(videoDetails)
            })
    });
}, 
    error => {
        console.log({ error })
});
