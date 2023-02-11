import axios from "axios";
import apiConfig from "../config/apiConfig";

class ApiService {
  constructor(api) {
    this.api = api.url;
  }
  async getPosts() {
    try {
      const response = await axios.get(`${this.api}/posts`);
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getPostComments(postId) {
    try {
      const response = await axios.get(`${this.api}/posts/${postId}/comments`);
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getPostById(id) {
    try {
      const response = await axios.get(`${this.api}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

const apiService = new ApiService(apiConfig);

export default apiService;
