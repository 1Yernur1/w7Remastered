import apiService from "../service/apiService";

class PostsStore {
  constructor() {
    this.posts = null;
  }
  async initPosts() {
     await apiService.getPosts().then((res) => {
      this.posts = res;
    })
  }
}

const postsStore = new PostsStore();
export default postsStore;
