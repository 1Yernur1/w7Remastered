class PostsView {
  constructor() {
    this.container = document.querySelector(".cards-wrapper");
    this.header = document.querySelector(".header-title");
  }
  renderPosts(posts) {
    this.clearContainer();
    this.changeHeaderTitle();
    let fragment = "";
    posts.forEach((post) => {
      fragment += PostsView.createPostTemplate(post);
    });
    this.container.insertAdjacentHTML("afterbegin", fragment);
  }
  clearContainer() {
    this.container.innerHTML = "";
  }
  static createPostTemplate(post) {
    return `<div class="card m-5">
    <div class="card-body">
      <h5 class="card-title">${post.id} ${post.title}</h5>
      <p class="card-text">${post.body}</p>
      <a href="#" class="btn btn-primary" data-post-id="${post.id}">Comments</a>
    </div>
  </div>`;
  }

  changeHeaderTitle() {
    this.header.textContent = "All Posts";
  }

  showLoader() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>`
    );
  }
}

const postsView = new PostsView();

export default postsView;
