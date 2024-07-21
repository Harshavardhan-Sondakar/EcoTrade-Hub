import axios from 'axios';

const API_URL = 'http://localhost:8005/api/posts';

class PostService {
    getPosts() {
        return axios.get(API_URL);
    }

    createPost(post) {
        return axios.post(API_URL, post);
    }

    deletePost(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new PostService();
