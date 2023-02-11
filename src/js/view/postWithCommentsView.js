class PostWithCommentsView {
  constructor() {
    this.container = document.querySelector(".cards-wrapper");
    this.header = document.querySelector(".header-title");
  }
  renderPostWithComments({ post, comments }) {
    this.clearContainer();
    this.changeHeaderTitle(post);
    const postTemplate = this.renderPost(post);
    const commentsTemplate = this.renderComments(comments);
    this.container.insertAdjacentHTML(
      "afterbegin",
      postTemplate + commentsTemplate
    );
  }

  renderPost(post) {
    const postTemplate = this.createPostTemplate(post);
    return postTemplate;
  }
  renderComments(comments) {
    let fragment = "";
    comments.forEach((comment) => {
      fragment += this.createCommentTemplate(comment);
    });
    return fragment;
  }
  createCommentTemplate(comment) {
    return `<div class="card m-5">
    <h5 class="card-header">${comment.email}</h5>
    <div class="card-body">
      <h5 class="card-title">Name: ${comment.name}</h5>
      <p class="card-text">${comment.body}</p>
    </div>
  </div>`;
  }
  createPostTemplate(post) {
    return `<div class="card m-5">
    <div class="card-body">
      <h5 class="card-title">${post.id} ${post.title}</h5>
      <p class="card-text">${post.body}</p>
      <div class="d-flex justify-content-between">
        <a href="#" class="btn btn-primary" data-post-id="${post.id}">Comments</a>
        <a href="#" class="btn btn-danger btn-back">Back to all Posts</a>
      </div>
    </div>
  </div>`;
  }

  clearContainer() {
    this.container.innerHTML = "";
  }
  changeHeaderTitle({ id }) {
    this.header.textContent = `Post ${id}`;
  }
}

const postWithCommentsView = new PostWithCommentsView();
export default postWithCommentsView;
