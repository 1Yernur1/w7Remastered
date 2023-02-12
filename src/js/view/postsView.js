class PostsView {
  constructor() {
    this.container = document.querySelector(".posts__wrapper");
    this.header = document.querySelector(".header__title");
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
    return `<div class="posts__card">
    <div>
      <div class="posts__card-header">${post.title}</div>
      <div class="posts__card-body">
        ${post.body}
      </div>
    </div>
    <div class="posts__card-btns">
      <button type="button" class="posts__card-btn" data-post-id="${post.id}">Show Comments</button>
    </div>
  </div>`;
  }

  changeHeaderTitle() {
    this.header.textContent = "All Posts";
  }}

const postsView = new PostsView();

export default postsView;
