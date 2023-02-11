import apiService from "../service/apiService";

class PostWithCommentsStore {
  constructor() {
    this.post = null;
    this.comments = null;
  }
  async getPostWithComments(id) {
    const data = await Promise.all([
      apiService.getPostById(id),
      apiService.getPostComments(id),
    ]);
    const [post, comments] = data;
    this.post = post;
    this.comments = comments;
    return data;
  }
}

const postWithCommentsStore = new PostWithCommentsStore();
export default postWithCommentsStore;
