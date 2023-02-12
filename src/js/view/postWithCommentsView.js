class PostWithCommentsView {
  constructor() {
    this.containerPost = document.querySelector(".posts__wrapper");
    this.containerComments = document.querySelector(".comments__wrapper");
    this.header = document.querySelector(".header__title");
  }
  renderPostWithComments({ post, comments }) {
    this.clearContainer();
    this.changeHeaderTitle(post);
    const postTemplate = this.renderPost(post);
    const commentsTemplate = this.renderComments(comments);
    this.containerPost.insertAdjacentHTML("afterbegin", postTemplate);
    this.containerComments.insertAdjacentHTML("afterbegin", commentsTemplate);
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
    return `<div class="comments__card">
    <div class="comments__card-header"><span>Email:</span> ${comment.email}</div>
    <div class="comments__card-body">
      <div class="comments__card-title"><span>Title:</span> ${comment.name}</div>
      <div class="comments__card-description">
        <span>Description: </span>
        <p>${comment.body}</p>
      </div>
    </div>
  </div>`;
  }

  createPostTemplate(post) {
    return `<div class="posts__card">
    <div class="posts__card-header">${post.title}</div>
    <div class="posts__card-body">
      ${post.body}
    </div>
    <div class="posts__card-btns">
      <button type="button" class="posts__card-btn" data-post-id="${post.id}">Show Comments</button>
      <button type="button" class="posts__card-btn btn-back">Back</button>
    </div>
  </div>`;
  }

  clearContainer() {
    this.containerPost.innerHTML = "";
    this.containerComments.innerHTML = "";
  }
  changeHeaderTitle({ id }) {
    this.header.textContent = `Post ${id}`;
  }
}

const postWithCommentsView = new PostWithCommentsView();
export default postWithCommentsView;
