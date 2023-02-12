import "../index.html";
import "../sass/main.scss";

import postWithCommentsStore from "./store/postCommentsStore";
import postsStore from "./store/postsStore";

import postsView from "./view/postsView";
import postWithCommentsView from "./view/postWithCommentsView";
import loaderView from "./view/loaderView";

document.addEventListener("DOMContentLoaded", initApp);
postsView.container.addEventListener("click", onContainerClickHandler);

function initApp() {
  loaderView.showLoader();
  postsStore
    .initPosts()
    .then(() => {
      loaderView.removeLoader();
      postsView.renderPosts(postsStore.posts);
    })
    .catch((err) => console.log(err));
}

function onContainerClickHandler(e) {
  e.preventDefault;
  if (e.target.dataset.postId) {
    postWithCommentsView.clearContainer();
    loaderView.showLoader();
    postWithCommentsStore
      .getPostWithComments(e.target.dataset.postId)
      .then(() => {
        loaderView.removeLoader();
        postWithCommentsView.renderPostWithComments(postWithCommentsStore);
      })
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("btn-back")) {
    initApp();
  }
}
