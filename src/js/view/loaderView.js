class LoaderView {
  showLoader() {
    document.querySelector(".cards-wrapper").insertAdjacentHTML(
      "afterbegin",
      `<div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        
      </div>
    </div>`
    );
  }

  removeLoader() {
    const loader = document.querySelector(".spinner-border");
    if (loader) {
      loader.remove();
    }
  }
}

const loaderView = new LoaderView();
export default loaderView;
