const toggleAction = document.getElementById("view-projects-action");

toggleAction.addEventListener("click", (event) => {
  const el =
    document.querySelector(".invisible") ||
    document.querySelector(".not-invisible");

  if (el.classList.contains("invisible")) {
    el.classList.remove("invisible");
    el.classList.add("not-invisible");
    toggleAction.textContent = "Hide list of projects";
  } else {
    el.classList.remove("not-invisible");
    el.classList.add("invisible");
    toggleAction.textContent = "View list of projects";
  }
});
