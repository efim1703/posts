export default {
    getPosts: async () => {
        const response = await fetch('/api/posts')
        return response
    },
    addPost: async (post) => {
        const response = await fetch('/api/posts/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        })
        return response
    },
    updatePost: async (post) => {
        const response = await fetch('/api/posts/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        })
        return response
    },
    deletePost: async (postId) => {
        const response = await fetch('/api/posts/delete', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(postId)
        })
        return response
    },
}
