class LoaderView {
  constructor() {
    this.cardsContainer = document.querySelector(".loader__container");
  }
  showLoader() {
    this.cardsContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class="loader">
      <div class="loader__element"></div>
    </div>`
    );
  }

  removeLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.remove();
    }
  }
}

const loaderView = new LoaderView();
export default loaderView;
