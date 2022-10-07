const viewportContainer = document.querySelector(".viewport");
const showViewportWidth = () => {
  viewportContainer.textContent = `現在的視窗大小是${window.innerWidth}px`;
};
showViewportWidth();

window.addEventListener("resize", () => {
  showViewportWidth();
});
