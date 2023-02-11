import "../index.html";
import "../sass/main.scss";

import postWithCommentsStore from "./store/postCommentsStore";
import postsStore from "./store/postsStore";

import postsView from "./view/postsView";
import postWithCommentsView from "./view/postWithCommentsView";

document.addEventListener("DOMContentLoaded", initApp);
postsView.container.addEventListener("click", onContainerClickHandler);

function initApp() {
  postsStore
    .initPosts()
    .then(() => {
      postsView.renderPosts(postsStore.posts);
    })
    .catch((err) => console.log(err));
}

function onContainerClickHandler(e) {
  e.preventDefault;
  if (e.target.dataset.postId) {
    postWithCommentsStore
      .getPostWithComments(e.target.dataset.postId)
      .then(() => {
        postWithCommentsView.renderPostWithComments(postWithCommentsStore);
      })
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("btn-back")) {
    initApp();
  }
}
